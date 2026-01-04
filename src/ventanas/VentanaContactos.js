import { useState, useEffect } from 'react';
import './VentanaContactos.css';
import iconoWhatsApp from '../iconoWhatsApp.svg';
import iconoLinkedIn from '../iconoLinkedIn.svg';
import logo from '../assets/logo.svg';
import logo2 from '../assets/logo2.svg';
import logocontacto from '../assets/logoContacto.svg'

function VentanaContactos({ onClose, isMobile }) {
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
      <div className='ventana-contactos-mobile'>
         {isMobile && loading ? (
            <div className='contactos-loading'> 
                <img src={logo2} className='logo-de-carga-contac' alt='log de carga contact'/>
               <span className='icono-sombra-mobile'>
                 <img src={logocontacto} className='logo-contactos-mobile'alt="logo contactos" /> 
               </span>
               <div className='barra-carga-container-contact'>
                <div className='barra-carga-contac' style={{ width: `${progress}%` }}></div>
               </div>
               <footer className='footer-mobile-loading-contac'>
                       <div className='footer-contenido-loading-contac'>
                        <p>© 2026 - Alan Rodriguez Agostini</p>
                        <p>Todos los derechos reservado</p>
                        </div> 
                </footer>
            </div>
         ) : (
          <>
             <div className='contenido-proyectos-mobile'>
                 <div className='contenido-flex-mobile-contac'>
                     <button className='boton-cerrar-contactos-mobile' onClick={cerrar}>
                      <img src={logo} className='imagen-boton-cerrar' alt='logo'></img>
                     </button>
                     <img src={logo2} className='logo-contacto-mobile2' alt='log sobre mi mobile'/>
                      
                      <div className="contenido-contactos-mobile">
                        <img src={logo} className='logo-en-contacto-mobile' alt='logo en contacto'></img>
                        <img src={logo2} className='logo2-en-contacto-mobile' alt='log2'></img>
                        <div className='seccion-contacto-mobile'>
                            <h2>Contacto</h2>
                            <p>Contáctame para más información en: </p>          
                         <div className='redes-contactos-mobile'> 
                                 <a href="https://www.linkedin.com/in/alanrodriguezagostini/" target="_blank" rel="noopener noreferrer">
                                    <img src={iconoLinkedIn} alt="LinkedIn" className='icono-linkedin-mobile' />
                                 </a> 
                                 <a href="whatsapp://send?phone=+541162304149" target="_blank" rel="noopener noreferrer">
                                    <img src={iconoWhatsApp} alt="WhatsApp" className='icono-whatsapp-mobile' />
                                 </a>
                            </div>
                            <div className='info-adicional-contacto-mobile'>
                               <p>o sino por e-mail: alanrodriguezagostini71@gmail.com</p>
                           </div>
                        </div>
                        
                      </div>
                    
                    </div>
                </div>
                 <footer className='footer-mobile-contac'>
                       <div className='footer-contenido-contac-mobile'>
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
        <div className="ventana-contactos-container">
            <div className={`ventana-contactos ${estado}`}>
                <div className='barra-ventana-contactos'>
                    <span className='titulo-ventana-contactos'>Sobre Mi</span>
                    <button className='boton-cerrar-contacto' onClick={cerrar}>X</button>
            </div>
               <div className='contenido-ventana'>
                    <div className='seccion-contacto'>
                        <h2>Contacto</h2>
                        <p>Contáctame para más información en: </p>
                        <div className='redes-contactos'> 
                            <a href="https://www.linkedin.com/in/alanrodriguezagostini/" target="_blank" rel="noopener noreferrer">
                            <img src={iconoLinkedIn} alt="LinkedIn" className='icono-linkedin' />
                            </a> 
                            <a href="whatsapp://send?phone=+541162304149" target="_blank" rel="noopener noreferrer">
                                <img src={iconoWhatsApp} alt="WhatsApp" className='icono-whatsapp' />
                            </a>
                        </div>
                        <div className='info-adicional-contacto'>
                           <p>o sino por e-mail: alanrodriguezagostini71@gmail.com</p>
                        </div>
                </div>
            </div>

        </div>
    </div>
        
    );
}

export default VentanaContactos;