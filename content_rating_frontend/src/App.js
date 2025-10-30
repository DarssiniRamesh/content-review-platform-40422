import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Indice from './routes/Indice';
import Instrucciones from './routes/Instrucciones';

// PUBLIC_INTERFACE
function App() {
  /** App shell with theme toggle and router. Provides navigation between Índice and Instrucciones. */
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header" style={{ minHeight: 'auto', padding: '16px' }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <nav aria-label="Principal" style={{ display: 'flex', gap: 16 }}>
            <Link className="App-link" to="/indice">Índice</Link>
            <Link className="App-link" to="/instrucciones">Instrucciones</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/indice" replace />} />
          <Route path="/indice" element={<Indice />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
          <Route path="*" element={<Navigate to="/indice" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
