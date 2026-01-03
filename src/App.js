import { useState, useEffect } from 'react';
import Home from './Home.js';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';


function App() {
  const [fecha, setfecha] = useState(new Date());
  const [unlocked, setUnlocked] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const intervalo = setInterval(() => {
      setfecha(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const hora = fecha.toLocaleTimeString("es-AR",{
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const diaFecha = fecha.toLocaleDateString("es-AR",{
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  });

  const desbloquear = () => {
    setUnlocking(true);
    setTimeout(() => {
      setUnlocked(true);
    }, 600);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>{ 
    window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
  <div className={isMobile ? "app-mobile" : "app-desktop"}>
      {!unlocked && (
        <div className={`lockscreen ${unlocking ? "cerrar" : ""}`}>
          <img src={logo2} className="App-logo-2" alt="logo2" />
          <img src={logo} className="App-logo" alt="logo" />

          <div className="cuadro-horario">
            <div className="hora">{hora}</div>
            <div className="fecha">{diaFecha}</div>
          </div>

          <button className="btn-unlock" onClick={desbloquear}>
            {isMobile ? "Entrar" : "Ingresar"}
          </button>
        </div>
      )}

      {unlocked && <Home isMobile={isMobile} />}
    </div>
  );
}

export default App;