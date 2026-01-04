import { useState, useEffect } from "react";
import "./Home.css";

import logo from "./logo.svg";
import logo2 from "./logo2.svg";

import VentanaSobreMi from "./ventanas/VentanaSobreMi";
import VentanaProyectos from "./ventanas/VentanaProyectos";
import VentanaContacto from "./ventanas/VentanaContactos";

import logoinicio from "./logoInicio.svg";
import logosobremi from "./logoSobreMi.svg";
import logoproyecto from "./logoProyecto.svg";
import logocontacto from "./logoContacto.svg";

function Home({ isMobile }) {
  const [fecha, setFecha] = useState(new Date());
  const [ventanaActiva, setVentanaActiva] = useState(null);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const hora = fecha.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const diaFecha = fecha.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  const cerrarVentana = () => setVentanaActiva(null);

  /* ==========================
     📱 MOBILE LAYOUT
  ========================== */
  if (isMobile) {
    return (
      <div className="home-mobile">
        <div className="fondo-fijo-mobile-home"></div>

        <img src={logo2} className="Home-mobile-logo-2" alt="logo2" />
        <img src={logo} className="Home-mobile-logo" alt="logo" />

        <div className="contenido-home-mobile">
        <h1>Hola, soy Alan.</h1>
        <p>
          Este portafolio refleja mi crecimiento, mi aprendizaje y mi forma de
          crear.
        </p>
      </div>
      <div className="boton-mobile">
          <a
             href="https://alanro21.github.io/alan-portfolio/cv.pdf"
             download="Curriculum Alan Rodriguez Agostini"
             className="btn-mobile"
          > Descargar CV</a>
          <a
            href="https://github.com/alanro21"
            className="btn-mobile"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        

        <div className="mobile-menu">
          <button className="btn-mobile-opci" onClick={() => setVentanaActiva("sobre-mi")}>
            <span className="icono-con-sombra">
              <img src={logosobremi} className="home-logo-opci" alt="Inicio"/>
            </span>
            <span className="texto-menu-mobile">Sobre mí</span>
          </button>
          <button className="btn-mobile-opci" onClick={() => setVentanaActiva("proyectos")}>
            <span className="icono-con-sombra">
              <img src={logoproyecto} className="home-logo-opci" alt="Inicio"/>
            </span>
            <span className="texto-menu-mobile">Proyectos</span>
          </button>
          <button className="btn-mobile-opci" onClick={() => setVentanaActiva("contacto")}>
            <span className="icono-con-sombra">
              <img src={logocontacto} className="home-logo-opci" alt="Inicio"/>
            </span>
            <span className="texto-menu-mobile">Contactos</span>
          </button>
        </div>

        {ventanaActiva === "sobre-mi" && (
          <VentanaSobreMi onClose={cerrarVentana} isMobile={isMobile}/>
        )}
        {ventanaActiva === "proyectos" && (
          <VentanaProyectos onClose={cerrarVentana} isMobile={isMobile}/>
        )}
        {ventanaActiva === "contacto" && (
          <VentanaContacto onClose={cerrarVentana} isMobile={isMobile}/>
        )}

        <footer className='footer-mobile-home'>
          <div className='footer-contenido-home'>
            <p>© 2026 - Alan Rodriguez Agostini</p>
            <p>Todos los derechos reservado</p>
          </div> 
        </footer> 
      </div>
    );
  }

  /* ==========================
     🖥️ DESKTOP LAYOUT (EL TUYO)
  ========================== */
  return (
    <>
      <div className="fondo-fijo-home"></div>

      <img src={logo2} className="Home-logo-2" alt="logo2" />
      <img src={logo} className="Home-logo" alt="logo" />

      <div className="cuadro-horario-home">
        <div className="hora-home">{hora}</div>
        <div className="fecha-home">{diaFecha}</div>
      </div>

      <div className="contenido-home">
        <h1>Hola, soy Alan.</h1>
        <p>
          Este portafolio refleja mi crecimiento, mi aprendizaje y mi forma de
          crear.
        </p>

        <div className="boton">
          <a
            href="/CV.pdf"
            download="Currículum Alan Rodriguez Agostini"
            className="btn"
          >
            Descargar CV
          </a>
          <a
            href="https://github.com/alanro21"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="menu">
        <button className="btn-inicio" onClick={() => setVentanaActiva(null)}>
          <span className="icono-con-sombra">
            <img src={logoinicio} className="home-logo-inicio" alt="Inicio" />
          </span>
          <span className="texto-menu">Inicio</span>
        </button>

        <button className="btn-sobre-mi" onClick={() => setVentanaActiva("sobre-mi")}>
          <span className="icono-con-sombra">
            <img src={logosobremi} className="home-logo-sobre-mi" alt="Sobre mí" />
          </span>
          <span className="texto-menu">Sobre mí</span>
        </button>

        <button className="btn-proyectos" onClick={() => setVentanaActiva("proyectos")}>
          <span className="icono-con-sombra">
            <img src={logoproyecto} className="home-logo-proyectos" alt="Proyectos" />
          </span>
          <span className="texto-menu">Proyectos</span>
        </button>

        <button className="btn-contactos" onClick={() => setVentanaActiva("contacto")}>
          <span className="icono-con-sombra">
            <img src={logocontacto} className="home-logo-contactos" alt="Contacto" />
          </span>
          <span className="texto-menu">Contacto</span>
        </button>
      </div>

      {ventanaActiva && <div className="overlay" />}

      {ventanaActiva === "sobre-mi" && (
        <VentanaSobreMi onClose={cerrarVentana} />
      )}
      {ventanaActiva === "proyectos" && (
        <VentanaProyectos onClose={cerrarVentana} />
      )}
      {ventanaActiva === "contacto" && (
        <VentanaContacto onClose={cerrarVentana} />
      )}
      
    </>
  );
}

export default Home;