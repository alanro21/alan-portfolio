import iconosobremi from '../logoSobreMi.svg'
import log2 from '../assets/logo2.svg'
import logo from '../assets/logo.svg'
import { useEffect, useState } from 'react';
import './VentanaSobreMi.css';

function VentanaSobreMi({ onClose, isMobile }) {
  const [estado, setEstado] = useState("abierta");

  const cerrar = () => {
    setEstado("cerrado");
    setTimeout(() => {
      onClose();

    }, 10);
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
    }, 10000); 
    
    return () => clearInterval(timer);
   } else {
     setProgress(0); 
   }
 }, [loading]);


  if (isMobile) {
    return (
      <div className='ventana-sobre-mi'>
         {isMobile && loading ? (
            <div className='sobre-mi-loading'> 
                <img src={log2} className='logo-de-carga' alt='log de carga'/>
               <span className='icono-sombra-mobile'>
                 <img src={iconosobremi} className='logo-sobre-mi-mobile'alt="logo sobre mi" /> 
               </span>
               <div className='barra-carga-container'>
                <div className='barra-carga' style={{ width: `${progress}%` }}></div>
               </div>
               <footer className='footer-mobile-loading'>
                       <div className='footer-contenido-loading'>
                        <p>© 2025 - Alan Rodriguez Agostini</p>
                        <p>Todos los derechos reservado</p>
                        </div> 
                      </footer>
            </div>
         ) : (
          <>
             <div className='contenido-sobre-mi-mobile'>
                 <div className='contenido-flex-mobile'>
                     <button className='boton-cerrar-sobremi-mobile' onClick={cerrar}>
                      <img src={logo} className='imagen-boton-cerrar' alt='logo'></img>
                     </button>
                     <img src={log2} className='logo-sobre-mi-mobile2' alt='log sobre mi mobile'/>
                   <div className='cuadro-imagen-perfil-mobile'>
                       <img 
                           src={require('../assets/foto-perfil.jpg')} 
                           alt="Foto de Perfil" 
                           className="imagen-perfil-mobile" 
                       />
                   </div> 

                   <div className='texto-sobre-mi-mobile'>
                     <p> Hola, me llamo Alan Hernan Rodríguez Agostini, tengo 24 años 
                            y soy estudiante de la carrera Licenciatura en Informática.</p>
                          <p>Me interesa la programación no solo como una disciplina técnica, 
                            sino como una forma de transformar ideas en soluciones claras y 
                            funcionales. Este portafolio representa mi recorrido, mi aprendizaje 
                            y los proyectos que fui desarrollando a lo largo de mi formación.</p>
                          <p>En cada proyecto busco aplicar buenas prácticas, 
                            trabajar con una lógica clara y seguir mejorando constantemente, 
                            tanto a nivel técnico como personal. Disfruto aprender cosas nuevas, 
                            enfrentar desafíos y crecer dentro del mundo del desarrollo de software.</p>
                    </div>
                 </div>
                 <footer className='footer-mobile'>
                       <div className='footer-contenido'>
                        <p>© 2025 - Alan Rodriguez Agostini</p>
                        <p>Todos los derechos reservado</p>
                        </div> 
                      </footer>   
              </div>
          
          </>
        )}
      </div>
    );
  }

    return (
        <div className={`ventana ${isMobile ? "mobile" : "desktop"}`}>
            <div className={`ventana-sobre-mi ${estado}`}>
                <div className='barra-ventana'>
                    <img src={iconosobremi} className='icono-contacto' alt='icono sobre mi'/>
                    <span className='titulo-ventana'>Sobre Mi</span>
                    <button className='boton-cerrar-sobremi' onClick={cerrar}>X</button>
            </div>
               <div className='contenido-ventana'>
                   <div className='contenido-flex'>
                      <div className='cuadro-imagen-perfil'>
                       <img 
                           src={require('../assets/foto-perfil.jpg')} 
                           alt="Foto de Perfil" 
                           className="imagen-perfil" 
                       />
                      </div>
                      <div className='texto-sobre-mi'>
                          <p> Hola, me llamo Alan Hernan Rodríguez Agostini, tengo 24 años 
                            y soy estudiante de la carrera Licenciatura en Informática.</p>
                          <p>Me interesa la programación no solo como una disciplina técnica, 
                            sino como una forma de transformar ideas en soluciones claras y 
                            funcionales. Este portafolio representa mi recorrido, mi aprendizaje 
                            y los proyectos que fui desarrollando a lo largo de mi formación.</p>
                          <p>En cada proyecto busco aplicar buenas prácticas, 
                            trabajar con una lógica clara y seguir mejorando constantemente, 
                            tanto a nivel técnico como personal. Disfruto aprender cosas nuevas, 
                            enfrentar desafíos y crecer dentro del mundo del desarrollo de software.</p>
                      </div>
                    </div>
                </div>

            </div>

        </div>
        
    );
  
}

export default VentanaSobreMi;