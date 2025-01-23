import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Ruta del componente Login
import App from './App'; // Si tienes un componente principal
import './index.css'; // Estilos globales (opcional)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<App />} />

        {/* Ruta para la página de inicio de sesión */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
