import { useState } from 'react';
import './VentanaContactos.css';
import iconoWhatsApp from '../iconoWhatsApp.svg';
import iconoLinkedIn from '../iconoLinkedIn.svg';

function VentanaContactos({ onClose }) {
    const [estado, setEstado] = useState("abierta");
    
      const cerrar = () => {
        setEstado("cerrado");
        setTimeout(() => {
          onClose();
    
        }, 350);
      };
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