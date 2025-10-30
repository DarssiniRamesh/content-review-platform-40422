import React, { useEffect } from 'react';
import './indice.css';

/* Synced from assets/ndice-41-135.html and assets/ndice-41-135.css — Keep structure/classes mapped to Figma. */
// PUBLIC_INTERFACE
export default function Indice({ onStart }) {
  /**
   * Índice screen. CTA calls onStart() to dispatch START_FROM_INDICE event
   * as defined in kavia-docs/navigation-flow-indice-instrucciones.md.
   */
  useEffect(() => {
    // Ensure notice SVGs are decorative and not focusable
    document.querySelectorAll('.notice__icon svg').forEach((svg) => {
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
    });
  }, []);

  // handler to advance flow
  const handleStart = (e) => {
    e.preventDefault();
    if (typeof onStart === 'function') onStart();
  };

  return (
    <main id="canvas" role="main" aria-label="Índice de prototipos">
      <header className="section section--header" aria-labelledby="titulo-indice">
        <h1 id="titulo-indice" className="typo-64">Índice de prototipos</h1>
      </header>

      <section className="section section--notice" aria-label="Aviso importante">
        <div className="notice" role="group" aria-roledescription="Alerta informativa con iconos decorativos">
          <div className="notice__icon" aria-hidden="true">
            <svg className="notice__svg" width="40" height="40" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <ellipse cx="110" cy="110" rx="103.125" ry="96.25" fill="#815c13"/>
              <ellipse cx="110" cy="110" rx="89.375" ry="82.5" fill="#feaa01"/>
              <ellipse cx="110" cy="110" rx="89.375" ry="75.625" fill="#feaa01"/>
              <rect x="96.25" y="56.875" width="27.5" height="96.25" rx="4" fill="#4a5764"/>
              <rect x="96.25" y="70.625" width="27.5" height="96.25" rx="4" fill="#feaa01"/>
              <circle cx="110" cy="175.625" r="13.75" fill="#4a5764"/>
              <circle cx="110" cy="161.875" r="13.75" fill="#feaa01"/>
            </svg>
          </div>

          <div className="notice__content">
            <p className="typo-63">
              <strong>Importante</strong><br/><br/>
              Los guiones que acompañan los prototipos son sumamente específicos y cualquier otro comportamiento
              fuera de ese guión no se debe considerar como comportamiento esperado.
            </p>
          </div>

          <div className="notice__icon" aria-hidden="true">
            <svg className="notice__svg" width="40" height="40" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <ellipse cx="110" cy="110" rx="103.125" ry="96.25" fill="#815c13"/>
              <ellipse cx="110" cy="110" rx="89.375" ry="82.5" fill="#feaa01"/>
              <ellipse cx="110" cy="110" rx="89.375" ry="75.625" fill="#feaa01"/>
              <rect x="96.25" y="56.875" width="27.5" height="96.25" rx="4" fill="#4a5764"/>
              <rect x="96.25" y="70.625" width="27.5" height="96.25" rx="4" fill="#feaa01"/>
              <circle cx="110" cy="175.625" r="13.75" fill="#4a5764"/>
              <circle cx="110" cy="161.875" r="13.75" fill="#feaa01"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="section section--proto">
        <h2 className="typo-65">Entrada y salida de calificador de contenidos</h2>
        <p className="typo-66">
          Objetivo del prototipo:<br/>
          Observar el comportamiento de la entrada al Calificador de contenidos desde los créditos,
          y regresar a la reproducción en pantalla completa.<br/><br/>
          Teclas para navegar:<br/>
          ↑ Enter<br/><br/>
          Guión del prototipo:<br/>
          Esperar 3 segundos para observar la entrada al Calificador de contenidos.<br/>
          Subir al botón Me gusta con la tecla (↑).<br/>
          Subir al reproductor PiP con la tecla (↑).<br/>
          Salir del Calificador de contenidos y regresar a la reproducción en pantalla completa con la tecla (Enter).
        </p>

        <div className="cta-group" role="group" aria-label="Prototipo 1 - Inicio">
          <button type="button" className="cta-frame" onClick={handleStart} aria-describedby="cta1-desc">
            <span className="cta-text typo-67">Click aquí para iniciar prototipo 1</span>
          </button>
          <p id="cta1-desc" className="cta-support typo-68">
            Da click en el botón amarillo para visualizar las interacciones descritas en el guión
          </p>
        </div>

        <hr className="divider"/>
      </section>

      <section className="section section--proto">
        <h2 className="typo-65">Navegación por el Calificador de Contenidos</h2>
        <p className="typo-66">
          Objetivo del prototipo:<br/>
          Navegar por la pantalla del Calificador de Contenidos.<br/><br/>
          Teclas para navegar:<br/>
          ↓ ↑ → Enter<br/><br/>
          Guión del prototipo:<br/>
          Subir al botón Me gusta con la tecla (↑).<br/>
          Navegar a la derecha al botón Me encanta con la tecla (→).<br/>
          Navegar a la derecha al botón No me gusta con la tecla (→).<br/>
          Subir al reproductor PiP con la tecla (↑).<br/>
          Bajar al botón Me gusta con la tecla (↓).<br/>
          Bajar al botón Cerrar con la tecla (↓).<br/>
          Cerrar el Calificador de contenidos y regresar a la reproducción en pantalla completa con la tecla (Enter).
        </p>

        <div className="cta-group" role="group" aria-label="Prototipo 2 - Inicio">
          <button type="button" className="cta-frame" onClick={handleStart} aria-describedby="cta2-desc">
            <span className="cta-text typo-67">Click aquí para iniciar prototipo 2</span>
          </button>
          <p id="cta2-desc" className="cta-support typo-68">
            Da click en el botón amarillo para visualizar las interacciones descritas en el guión
          </p>
        </div>

        <hr className="divider"/>
      </section>

      <section className="section section--proto">
        <h2 className="typo-65">Comportamiento de notificación al calificar el contenido.</h2>
        <p className="typo-66">
          Objetivo del prototipo:<br/>
          Calificar el contenido y observar la notificación.<br/><br/>
          Teclas para navegar:<br/>
          ↑ Enter<br/><br/>
          Guión del prototipo:<br/>
          Subir al botón Me gusta con la tecla (↑).<br/>
          Calificar el contenido con Me gusta con la tecla (Enter).<br/>
          Esperar 6 segundos a que la notificación de feedback desaparezca.<br/>
          Esperar 4 segundos a que se cierre el panel de calificación automáticamente.
        </p>

        <div className="cta-group" role="group" aria-label="Prototipo 3 - Inicio">
          <button type="button" className="cta-frame" onClick={handleStart} aria-describedby="cta3-desc">
            <span className="cta-text typo-67">Click aquí para iniciar prototipo 3</span>
          </button>
          <p id="cta3-desc" className="cta-support typo-68">
            Da click en el botón amarillo para visualizar las interacciones descritas en el guión
          </p>
        </div>
      </section>
    </main>
  );
}
