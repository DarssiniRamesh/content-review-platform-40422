import React, { useEffect } from 'react';
import './indice.css';

// PUBLIC_INTERFACE
export default function Indice() {
  /**
   * Índice de prototipos screen.
   * Pixel-accurate structure per Figma 41:135.
   * Spacing/typography/line heights/colors per:
   * - kavia-docs/pixel-parity-audit-indice-instrucciones.md
   * - kavia-docs/figma-analysis-indice-41-135.md
   */
  useEffect(() => {
    // Ensure inline SVGs are decorative per audit (avoid tab stops)
    document.querySelectorAll('.notice__icon svg').forEach((svg) => {
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      // role optional because aria-hidden=true; retained for clarity
      svg.setAttribute('role', 'img');
    });
  }, []);

  return (
    <main id="canvas" role="main" aria-label="Índice de prototipos">
      {/* Title spacing and size match Figma (typo-64 per audit) */}
      <header className="section section--header" aria-labelledby="titulo-indice">
        <h1 id="titulo-indice" className="typo-64">Índice de prototipos</h1>
      </header>

      {/* Notice Frame 1685 with 24px radius, grid 40|1fr|40, per audit */}
      <section className="section section--notice" aria-label="Aviso importante">
        <div className="notice" role="alert" aria-live="polite">
          {/* Left decorative icon (inline SVG; no raster). Colors per figma (#815c13, #feaa01, #4a5764) */}
          <div className="notice__icon" aria-hidden="true">
            <svg className="notice__svg" width="40" height="40" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="110" cy="110" rx="103.125" ry="96.25" fill="#815c13"/>
              <ellipse cx="110" cy="110" rx="89.375" ry="82.5" fill="#feaa01"/>
              <ellipse cx="110" cy="110" rx="89.375" ry="75.625" fill="#feaa01"/>
              <rect x="96.25" y="56.875" width="27.5" height="96.25" rx="4" fill="#4a5764"/>
              <rect x="96.25" y="70.625" width="27.5" height="96.25" rx="4" fill="#feaa01"/>
              <circle cx="110" cy="175.625" r="13.75" fill="#4a5764"/>
              <circle cx="110" cy="161.875" r="13.75" fill="#feaa01"/>
            </svg>
          </div>

          <div className="notice__content" id="aviso-importante">
            {/* Notice text: Roboto bold, dark on white, 24px/1.4 line height per audit */}
            <p className="typo-63">
              <strong>Importante</strong><br/><br/>
              Los guiones que acompañan los prototipos son sumamente específicos y cualquier otro comportamiento
              fuera de ese guión no se debe considerar como comportamiento esperado.
            </p>
          </div>

          {/* Right decorative icon mirrors left one */}
          <div className="notice__icon" aria-hidden="true">
            <svg className="notice__svg" width="40" height="40" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
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

      {/* Section 1 */}
      <section className="section section--proto" aria-labelledby="sec-1-title">
        <h2 id="sec-1-title" className="typo-65">Entrada y salida de calificador de contenidos</h2>
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

        {/* CTA group: 560x160, yellow #ffe500, radius 24px per Figma */}
        <div className="cta-group" role="group" aria-label="Prototipo 1 - Inicio">
          <button
            type="button"
            className="cta-frame"
            aria-describedby="cta1-desc"
            onClick={()=>{ window.location.href = '/instrucciones'; }}
          >
            <span className="cta-text typo-67">Click aquí para iniciar prototipo 1</span>
          </button>
          <p id="cta1-desc" className="cta-support typo-68">
            Da click en el botón amarillo para visualizar las interacciones descritas en el guión
          </p>
        </div>

        {/* Divider 5px #797979 per Figma style_41 */}
        <hr className="divider" aria-hidden="true"/>
      </section>

      {/* Section 2 */}
      <section className="section section--proto" aria-labelledby="sec-2-title">
        <h2 id="sec-2-title" className="typo-65">Navegación por el Calificador de Contenidos</h2>
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
          <button
            type="button"
            className="cta-frame"
            aria-describedby="cta2-desc"
            onClick={()=>{ window.location.href = '/instrucciones'; }}
          >
            <span className="cta-text typo-67">Click aquí para iniciar prototipo 2</span>
          </button>
          <p id="cta2-desc" className="cta-support typo-68">
            Da click en el botón amarillo para visualizar las interacciones descritas en el guión
          </p>
        </div>

        <hr className="divider" aria-hidden="true"/>
      </section>

      {/* Section 3 */}
      <section className="section section--proto" aria-labelledby="sec-3-title">
        <h2 id="sec-3-title" className="typo-65">Comportamiento de notificación al calificar el contenido.</h2>
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
          <button
            type="button"
            className="cta-frame"
            aria-describedby="cta3-desc"
            onClick={()=>{ window.location.href = '/instrucciones'; }}
          >
            <span className="cta-text typo-67">Click aquí para iniciar prototipo 3</span>
          </button>
          <p id="cta3-desc" className="cta-support typo-68">
            Da click en el botón amarillo para visualizar las interacciones descritas en el guión
          </p>
        </div>
      </section>

      {/* Footer spacing mirrors Figma base grid */}
      <footer className="section" aria-label="Pie de página">
        <span className="typo-68" aria-hidden="true">© Prototipos</span>
      </footer>
    </main>
  );
}
