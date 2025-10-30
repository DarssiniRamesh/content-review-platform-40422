import React, { useEffect, useRef, useState, useCallback } from 'react';
import './App.css';
import Indice from './routes/Indice';
import Instrucciones from './routes/Instrucciones';

/**
 * Unified real-time SPA per kavia-docs/navigation-flow-indice-instrucciones.md
 * States: 'INDICE' -> 'INSTRUCCIONES' -> 'COMPLETE' (optional terminal)
 * Events: 'START_FROM_INDICE', 'BACK_TO_INDICE', 'FLOW_COMPLETE'
 * Transitions are documented alongside handlers below.
 * Accessibility: focus management on state change, keyboard access for CTAs and flow buttons.
 * Figma background: enforced on html, body, #root and .app-root (see index.css).
 */

// Simple finite-state machine definition
const STATES = {
  INDICE: 'INDICE',
  INSTRUCCIONES: 'INSTRUCCIONES',
  COMPLETE: 'COMPLETE'
};

const EVENTS = {
  START_FROM_INDICE: 'START_FROM_INDICE',
  BACK_TO_INDICE: 'BACK_TO_INDICE',
  FLOW_COMPLETE: 'FLOW_COMPLETE'
};

// PUBLIC_INTERFACE
function App() {
  /** Root SPA controller using a finite state machine. */
  const [state, setState] = useState(STATES.INDICE);
  const [selection, setSelection] = useState(null); // shared selection if needed later
  const [isValid, setIsValid] = useState(true); // validation placeholder for future steps

  // Refs for focus management
  const indiceRef = useRef(null);
  const instruccionesRef = useRef(null);

  // PUBLIC_INTERFACE
  const dispatch = useCallback((event, payload) => {
    /**
     * Handles events and performs transitions.
     * See kavia-docs/navigation-flow-indice-instrucciones.md for flow reference.
     */
    switch (state) {
      // From INDICE
      case STATES.INDICE:
        if (event === EVENTS.START_FROM_INDICE) {
          // Transition: INDICE -> INSTRUCCIONES
          setSelection(payload?.selection ?? null);
          setIsValid(true);
          setState(STATES.INSTRUCCIONES);
        }
        break;

      // From INSTRUCCIONES
      case STATES.INSTRUCCIONES:
        if (event === EVENTS.BACK_TO_INDICE) {
          // Transition: INSTRUCCIONES -> INDICE
          setState(STATES.INDICE);
        } else if (event === EVENTS.FLOW_COMPLETE) {
          // Transition: INSTRUCCIONES -> COMPLETE (optional terminal)
          setState(STATES.COMPLETE);
        }
        break;

      // From COMPLETE (terminal)
      case STATES.COMPLETE:
        if (event === EVENTS.BACK_TO_INDICE) {
          // Transition: COMPLETE -> INDICE (restart)
          setSelection(null);
          setIsValid(true);
          setState(STATES.INDICE);
        }
        break;

      default:
        break;
    }
  }, [state]);

  // Focus management when state changes
  useEffect(() => {
    const target =
      state === STATES.INDICE
        ? indiceRef.current
        : state === STATES.INSTRUCCIONES
        ? instruccionesRef.current
        : null;

    if (target) {
      const t = setTimeout(() => {
        try {
          target.focus({ preventScroll: true });
        } catch {
          target.focus();
        }
      }, 0);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [state]);

  // Keyboard support for top-level flow controls (Enter/Space activates)
  const asButtonKeydown = (onActivate) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate();
    }
  };

  return (
    <div className="app-root" role="application" aria-label="Flujo unificado de prototipos">
      {/* App-level navigation controls (not router). Keyboard accessible. */}
      <nav
        aria-label="Controles de flujo"
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
          className="flow-btn"
          aria-current={state === STATES.INDICE ? 'page' : undefined}
          aria-label="Ir a Índice"
          onClick={() => dispatch(EVENTS.BACK_TO_INDICE)}
          onKeyDown={asButtonKeydown(() => dispatch(EVENTS.BACK_TO_INDICE))}
        >
          Índice
        </button>
        <button
          type="button"
          className="flow-btn"
          aria-current={state === STATES.INSTRUCCIONES ? 'page' : undefined}
          aria-label="Ir a Instrucciones"
          onClick={() => dispatch(EVENTS.START_FROM_INDICE)}
          onKeyDown={asButtonKeydown(() => dispatch(EVENTS.START_FROM_INDICE))}
        >
          Instrucciones
        </button>
      </nav>

      {/* Consolidated content: render both sections in a single DOM hierarchy with conditional visibility */}
      <section
        className="page"
        aria-hidden={state !== STATES.INDICE ? 'true' : 'false'}
        aria-labelledby="titulo-indice"
      >
        <div tabIndex={-1} ref={indiceRef}>
          {/* Índice triggers START_FROM_INDICE (per navigation doc) */}
          <Indice onStart={() => dispatch(EVENTS.START_FROM_INDICE)} />
        </div>
      </section>

      <section
        className="page"
        aria-hidden={state !== STATES.INSTRUCCIONES ? 'true' : 'false'}
        aria-labelledby="titulo-principal"
        style={{ position: state === STATES.INSTRUCCIONES ? 'relative' : 'absolute', inset: 0 }}
      >
        <div tabIndex={-1} ref={instruccionesRef}>
          <Instrucciones />
        </div>
      </section>

      {/* Optional terminal state container (minimal) */}
      {state === STATES.COMPLETE && (
        <section
          className="page"
          aria-hidden="false"
          aria-label="Flujo completado"
          style={{
            width: 'min(100%, 1440px)',
            marginInline: 'auto',
            padding: '16px 24px',
            boxSizing: 'border-box'
          }}
        >
          <div role="status" aria-live="polite" className="typo-68" style={{ color: '#ffffff' }}>
            Flujo completado.
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
