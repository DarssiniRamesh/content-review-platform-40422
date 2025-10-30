import React, { useEffect } from 'react';
import './instrucciones.css';

// PUBLIC_INTERFACE
export default function Instrucciones() {
  /**
   * Instrucciones screen mapped to Figma 41:206.
   * Pixel parity for container/grid, typography, spacing, shapes, and imagery.
   * Notes:
   * - All images must reference /assets/figmaimages to ensure correct public asset resolution.
   * - Focus styles are visible via :focus-visible and shared CSS tokens with Índice.
   */
  useEffect(() => {
    // Ensure any inline decorative shapes remain non-focusable for AT
    document.querySelectorAll('.shape-inline, .cta-square').forEach((el) => {
      el.setAttribute('aria-hidden', 'true');
    });
  }, []);

  return (
    <main id="canvas" role="main" aria-label="Instrucciones - Guía de uso de prototipos">
      {/* Header: Title size/weight/spacing per Figma (56px, lh ~1.17) */}
      <header className="section section--header" aria-labelledby="titulo-principal">
        <h1 id="titulo-principal" className="typo-64">¿Cómo consumir estos prototipos?</h1>
      </header>

      {/* Intro block with CTA sample (560x160, radius 24, yellow #ffe500) */}
      <section className="section section--intro">
        <p className="typo-69">
          En la sección de “Indice de prototipos” se encuentran las instrucciones de cada prototipo y los links que dirigen a cada uno de ellos.
          <br/><br/>
          Dar clic al link del prototipo que se quiere usar
        </p>

        <div className="cta-block" role="group" aria-label="Ejemplo de botón para iniciar prototipo">
          {/* Using div to mirror static specimen in Figma; CTA is non-interactive here */}
          <div className="cta-frame" role="img" aria-label="Botón amarillo de ejemplo">
            <div className="cta-text typo-67">Click aquí para iniciar prototipo 1</div>
          </div>
          {/* Decorative adjacent square (no raster in figma JSON) */}
          <div className="cta-square" aria-hidden="true">
            {/* Inline placeholder icon as SVG for crispness in case figma asset missing */}
            <svg className="square-svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="#bfbfbf"/>
              <path d="M8 12h8" stroke="#6f6f6f" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 8v8" stroke="#6f6f6f" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Example of the prototype window image (path validated: /assets/figmaimages/figma_image_176_1015.png) */}
      <section className="section section--window-example">
        <p className="typo-69">Una vez que la ventana de prototipos este abierta, se verá de esta forma:</p>
        <figure className="figure">
          <img
            className="img img-176_1015"
            src="/assets/figmaimages/figma_image_176_1015.png"
            alt="Ejemplo de ventana de prototipos"
          />
        </figure>
      </section>

      {/* Pre-usage settings (a): includes overlay icon on screenshot */}
      <section className="section section--pre-a">
        <p className="typo-69">
          Antes de comenzar a utilizar los prototipos, realizar los siguientes ajustes:
          <br/><br/>
          a) Presionar el ícono
          <span className="shape-inline" aria-hidden="true"></span>
          y seleccionar la opción “Fit width and heigth”
        </p>

        {/* Placeholder rectangle (no raster asset) */}
        <div className="shape-rect-small" aria-hidden="true"></div>

        <div className="group-29360" role="group" aria-label="Ajuste (a) - captura con icono resaltado">
          <div className="group-29360-stage">
            <img
              className="img img-176_1016"
              src="/assets/figmaimages/figma_image_176_1016.png"
              alt="Pantalla de Figma con opciones para ajuste de tamaño"
            />
            <img
              className="img img-41_221 overlay"
              src="/assets/figmaimages/figma_image_41_221.png"
              alt="Ícono resaltado para 'Fit width and heigth'"
            />
          </div>
        </div>

        <figure className="figure">
          <img
            className="img img-176_1018"
            src="/assets/figmaimages/figma_image_176_1018.png"
            alt="Captura adicional del ajuste (a)"
          />
        </figure>

        <div className="shape-rect-small" aria-hidden="true"></div>
      </section>

      {/* Pre-usage settings (b) */}
      <section className="section section--pre-b">
        <p className="typo-69">
          b) Volver a presionar el ícono
          <span className="shape-inline" aria-hidden="true"></span>
          y desactivar la opción “Enable Figma shortcuts”
        </p>
        <figure className="figure">
          <img
            className="img img-41_219"
            src="/assets/figmaimages/figma_image_41_219.png"
            alt="Ícono de Figma para el ajuste (b)"
          />
        </figure>
      </section>

      {/* During-usage guidance image */}
      <section className="section section--during">
        <p className="typo-69">
          Las instrucciones de cada prototipo serán visibles del lado izquierdo de la pantalla
        </p>
        <figure className="figure">
          <img
            className="img img-176_1021 tall"
            src="/assets/figmaimages/figma_image_176_1021.png"
            alt="Panel de instrucciones del lado izquierdo"
          />
        </figure>
      </section>

      {/* Decorative vertical line per Figma (style_42) */}
      <section className="section section--decorative" aria-label="Elemento decorativo">
        <span className="decor-line" aria-hidden="true"></span>
      </section>

      {/* Restart guidance with small header label */}
      <section className="section section--restart">
        <div className="restart-label">
          <h2 className="typo-70">Instrucciones</h2>
        </div>
        <p className="typo-69">
          Para poder reiniciar el prototipo, presionar el botón que se encuentra en la parte inferior derecha “Restart”
        </p>
        <figure className="figure">
          <img
            className="img img-41_207"
            src="/assets/figmaimages/figma_image_41_207.png"
            alt="Zona inferior derecha con botón Restart"
          />
        </figure>
      </section>
    </main>
  );
}
