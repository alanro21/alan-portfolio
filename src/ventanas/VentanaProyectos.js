import { useState } from 'react';
import './VentanaProyectos.css';
import imagProyecto1 from '../assets/imagProyecto1.png';

function VentanaProyectos({ onClose }) {
    const [estado, setEstado] = useState("abierta");
    
      const cerrar = () => {
        setEstado("cerrado");
        setTimeout(() => {
          onClose();
    
        }, 350);
      };
    return (
        <div className="ventana">
            <div className={`ventana-proyectos ${estado}`}>
                <div className="barra-ventana">
                    <span className="titulo-ventana">Proyectos</span>
                    <button className="boton-cerrar-proyectos" onClick={cerrar}>X</button>
                </div>

                <div className="contenido-ventana">
                    <div className="lista-proyectos">
                        <div className="proyecto-1">
                          <img src={imagProyecto1} className="imagen-proyecto" alt="Proyecto 1" />
                          <h3>Portafolio web desarrollado para mostrar proyectos y conocimientos en desarrollo.</h3>
                          <h3>React · CSS · JavaScript</h3>
                          <a href="https://github.com/alanro21/alan-portfolio" className="boton-mas-info">Ver más</a>
                        </div>
                        <div className="proyecto-2">
                            <h3>Proyecto 2</h3>
                          <img src="ruta/a/imagen2.jpg" alt="Proyecto 2" />
                            <a href="#" className="boton-mas-info">Ver más</a>
                        </div>
                        <div className="proyecto-3">
                          <img src="ruta/a/imagen3.jpg" alt="Proyecto 3" />
                            <div className='overlay-proyecto'>
                                <h3>Proyecto 3</h3>
                                <p>Descripción del proyecto 3.</p>
                                <a href="#" className="boton-mas-info">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default VentanaProyectos;