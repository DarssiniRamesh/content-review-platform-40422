import React from 'react';
import './instrucciones.css';

/* Synced from assets/instrucciones-41-206.html and assets/instrucciones-41-206.css — Do not change structure/classes without updating assets. */
// PUBLIC_INTERFACE
export default function Instrucciones() {
  /** Exact DOM structure and class names from assets/instrucciones-41-206.html */
  return (
    <main id="canvas" role="main" aria-label="Instrucciones - Guía de uso de prototipos">
      <header className="section section--header" aria-labelledby="titulo-principal">
        <h1 id="titulo-principal" className="typo-64">¿Cómo consumir estos prototipos?</h1>
      </header>

      <section className="section section--intro">
        <p className="typo-69">
          En la sección de “Indice de prototipos” se encuentran las instrucciones de cada prototipo y los links que dirigen a cada uno de ellos.
          <br/><br/>
          Dar clic al link del prototipo que se quiere usar
        </p>

        <div className="cta-block" role="group" aria-label="Ejemplo de botón para iniciar prototipo">
          <div className="cta-frame">
            <div className="cta-text typo-67">Click aquí para iniciar prototipo 1</div>
          </div>
          <div className="cta-square" aria-hidden="true"></div>
        </div>
      </section>

      <section className="section section--window-example">
        <p className="typo-69">Una vez que la ventana de prototipos este abierta, se verá de esta forma:</p>
        <figure className="figure">
          <img
            className="img img-176_1015"
            src="/assets/figmaimages/figma_image_176_1015.png"
            alt="Ejemplo de ventana de prototipos"/>
        </figure>
      </section>

      <section className="section section--pre-a">
        <p className="typo-69">
          Antes de comenzar a utilizar los prototipos, realizar los siguientes ajustes:
          <br/><br/>
          a) Presionar el ícono
          <span className="shape-inline" aria-hidden="true"></span>
          y seleccionar la opción “Fit width and heigth”
        </p>

        <div className="shape-rect-small" aria-hidden="true"></div>

        <div className="group-29360" role="group" aria-label="Ajuste (a) - captura con icono resaltado">
          <div className="group-29360-stage">
            <img
              className="img img-176_1016"
              src="/assets/figmaimages/figma_image_176_1016.png"
              alt="Pantalla de Figma con opciones para ajuste de tamaño"/>
            <img
              className="img img-41_221 overlay"
              src="/assets/figmaimages/figma_image_41_221.png"
              alt="Ícono resaltado para 'Fit width and heigth'"/>
          </div>
        </div>

        <figure className="figure">
          <img
            className="img img-176_1018"
            src="/assets/figmaimages/figma_image_176_1018.png"
            alt="Captura adicional del ajuste (a)"/>
        </figure>

        <div className="shape-rect-small" aria-hidden="true"></div>
      </section>

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
            alt="Ícono de Figma para el ajuste (b)"/>
        </figure>
      </section>

      <section className="section section--during">
        <p className="typo-69">
          Las instrucciones de cada prototipo serán visibles del lado izquierdo de la pantalla
        </p>
        <figure className="figure">
          <img
            className="img img-176_1021 tall"
            src="/assets/figmaimages/figma_image_176_1021.png"
            alt="Panel de instrucciones del lado izquierdo"/>
        </figure>
      </section>

      <section className="section section--decorative" aria-label="Elemento decorativo">
        <span className="decor-line" aria-hidden="true"></span>
      </section>

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
            alt="Zona inferior derecha con botón Restart"/>
        </figure>
      </section>
    </main>
  );
}
