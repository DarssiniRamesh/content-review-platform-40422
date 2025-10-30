import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Indice from './routes/Indice';
import Instrucciones from './routes/Instrucciones';

/**
 * SPA flow:
 * - Unifies Índice and Instrucciones into a single in-app flow with transitions.
 * - Background strictly follows Figma (#39393e) via .app-root wrapper (see index.css).
 * - Removes theme toggles/manifest influences.
 * - Maintains accessibility: roles, focus management on step change.
 */

// PUBLIC_INTERFACE
function App() {
  /** Root SPA flow controller. Steps: 'indice' -> 'instrucciones' with smooth transition. */
  const [step, setStep] = useState('indice'); // 'indice' | 'instrucciones'
  const indiceRef = useRef(null);
  const instruccionesRef = useRef(null);

  // Focus management on step change
  useEffect(() => {
    const target = step === 'indice' ? indiceRef.current : instruccionesRef.current;
    if (target) {
      // Delay to allow DOM update then focus
      const t = setTimeout(() => {
        try {
          target.focus({ preventScroll: true });
        } catch {
          target.focus();
        }
      }, 0);
      return () => clearTimeout(t);
    }
  }, [step]);

  // Handlers to progress/regress the flow
  const goToInstrucciones = () => setStep('instrucciones');
  const goToIndice = () => setStep('indice');

  return (
    <div className="app-root" role="application" aria-label="Flujo de prototipos">
      {/* Top inline navigation for accessibility; behaves as in-app controls */}
      <nav
        aria-label="Flujo"
        style={{
          width: 'min(100%, 1440px)',
          marginInline: 'auto',
          padding: '16px 24px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 12
        }}
      >
        <button
          type="button"
          onClick={goToIndice}
          className="flow-btn"
          aria-current={step === 'indice' ? 'page' : undefined}
          aria-label="Ir a Índice"
          style={{
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 8,
            padding: '8px 12px',
            cursor: 'pointer'
          }}
        >
          Índice
        </button>
        <button
          type="button"
          onClick={goToInstrucciones}
          className="flow-btn"
          aria-current={step === 'instrucciones' ? 'page' : undefined}
          aria-label="Ir a Instrucciones"
          style={{
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 8,
            padding: '8px 12px',
            cursor: 'pointer'
          }}
        >
          Instrucciones
        </button>
      </nav>

      {/* Pages rendered as steps with CSS opacity transitions */}
      <section
        className="page"
        aria-hidden={step !== 'indice' ? 'true' : 'false'}
        aria-labelledby="titulo-indice"
      >
        <div tabIndex={-1} ref={indiceRef}>
          {/* Índice receives an onStart callback to move flow forward */}
          <Indice onStart={goToInstrucciones} />
        </div>
      </section>

      <section
        className="page"
        aria-hidden={step !== 'instrucciones' ? 'true' : 'false'}
        aria-labelledby="titulo-principal"
        style={{ position: step === 'instrucciones' ? 'relative' : 'absolute', inset: 0 }}
      >
        <div tabIndex={-1} ref={instruccionesRef}>
          <Instrucciones />
        </div>
      </section>
    </div>
  );
}

export default App;
