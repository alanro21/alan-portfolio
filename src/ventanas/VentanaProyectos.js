import { useState, useEffect } from 'react';
import './VentanaProyectos.css';
import imagProyecto1W from '../assets/imagProyecto1.png';
import imagProyecto1M from '../assets/imagProyecto1-movil.png';
import imagProyecto2 from '../assets/imagProyecto2.png';
import logoproyect from '../assets/logoProyecto.svg';
import logo2 from '../assets/logo2.svg';
import logo from '../assets/logo.svg';

function VentanaProyectos({ onClose, isMobile }) {
    const [estado, setEstado] = useState("abierta");
    
      const cerrar = () => {
        setEstado("cerrado");
        setTimeout(() => {
          onClose();
    
        }, 350);
      };

      const [loading, setLoading] = useState(isMobile);
        const [progress, setProgress] = useState(0);
      
       useEffect(() => {
        if (loading) {
          const timer = setInterval(() => {
            setProgress(prev => {
              if (prev >= 109) {
                clearInterval(timer);
                setLoading(false); 
                return 109;
              }
              return prev + 1; 
            });
          }, 40); 
          
          return () => clearInterval(timer);
         } else {
           setProgress(0); 
         }
       }, [loading]);


        if (isMobile) {
    return (
      <div className='ventana-proyectos-mobile'>
         {isMobile && loading ? (
            <div className='proyectos-loading'> 
                <img src={logo2} className='logo-de-carga-proyec' alt='log de carga proyec'/>
               <span className='icono-sombra-mobile'>
                 <img src={logoproyect} className='logo-proyecto-mobile'alt="logo proyecto" /> 
               </span>
               <div className='barra-carga-container-proyec'>
                <div className='barra-carga-proyect' style={{ width: `${progress}%` }}></div>
               </div>
               <footer className='footer-mobile-loading-proyec'>
                       <div className='footer-contenido-loading-proyect'>
                        <p>© 2026 - Alan Rodriguez Agostini</p>
                        <p>Todos los derechos reservado</p>
                        </div> 
                      </footer>
            </div>
         ) : (
          <>
             <div className='contenido-proyectos-mobile'>
                 <div className='contenido-flex-mobile-proyect'>
                     <button className='boton-cerrar-proyecto-mobile' onClick={cerrar}>
                      <img src={logo} className='imagen-boton-cerrar' alt='logo'></img>
                     </button>
                     <img src={logo2} className='logo-sobre-mi-mobile2' alt='log sobre mi mobile'/>
                      
                    <div className="lista-proyectos-moblie">
                        <div className="proyecto-1-mobile">
                          <img src={imagProyecto1M} className="imagen-proyecto-mobile" alt="Proyecto 1" />
                          <h3>Portafolio web desarrollado para mostrar proyectos y conocimientos en desarrollo.</h3>
                          <h3>React · CSS · JavaScript</h3>
                          <a href="https://github.com/alanro21/alan-portfolio" className="boton-mas-info-mobile">Ver más</a>
                        </div>
                        <div className="proyecto-2-mobile">
                          <img src={imagProyecto2} className='imagen-proyecto2-mobile' alt="Proyecto 2" />
                          <h3>Proyecto sobre Arquitectura Serveles donde envia solicitudes HTTP a un 
                            provedor cloud que actua como intermediario en la visualización de 
                            acceso (registros en la página web) y 
                            en la supervisión de los datos que se almacenan en la base de datos.
                          </h3>

                          <h3>Python · CSS · HTML</h3>
                            <a href="https://github.com/alanro21/Arquitectura-Serverless?tab=readme-ov-file" className="boton-mas-info-mobile">Ver más</a>
                        </div>
                        <div className="proyecto-3-mobile">
                            <div className='overlay-proyecto'>
                                <h3>Coming soon</h3>
                            </div>
                        </div>
                    </div>
                    
                       </div>
                 </div>
                 <footer className='footer-mobile-proyec-mobile'>
                       <div className='footer-contenido-proyec-mobile'>
                        <p>© 2026 - Alan Rodriguez Agostini</p>
                        <p>Todos los derechos reservado</p>
                        </div> 
                      </footer> 
          </>
        )}
      </div>
    );
  }
    return (
        <div className="ventana">
            <div className={`ventana-proyectos ${estado}`}>
                <div className="barra-ventana">
                    <img src={logoproyect} className='icono-proyecto' alt='icono proyecto'/>
                    <span className="titulo-ventana">Proyectos</span>
                    <button className="boton-cerrar-proyectos" onClick={cerrar}>X</button>
                </div>

                <div className="contenido-ventana">
                    <div className="lista-proyectos">
                        <div className="proyecto-1">
                          <img src={imagProyecto1W} className="imagen-proyecto" alt="Proyecto 1" />
                          <h3>Portafolio web desarrollado para mostrar proyectos y conocimientos en desarrollo.</h3>
                          <h3>React · CSS · JavaScript</h3>
                          <a href="https://github.com/alanro21/alan-portfolio" className="boton-mas-info">Ver más</a>
                        </div>
                        <div className="proyecto-2">
                            <img src={imagProyecto2} className="imagen-proyecto" alt="Proyecto 2" />
                            <h3>Proyecto serverless que envía solicitudes HTTP a 
                              un proveedor cloud para registrar accesos web y supervisar datos en la base de datos.
                          </h3>
                          <h3>Python · CSS · HTML</h3>
                            <a href="#" className="boton-mas-info">Ver más</a>
                        </div>
                        <div className="proyecto-3">
                                <h3>Coming soon</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default VentanaProyectos;