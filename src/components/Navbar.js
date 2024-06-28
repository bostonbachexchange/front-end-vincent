import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/logo.png" alt="Vincent Company Logo" className="navbar-logo" />
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/ecos">ECOS</Link></li>
        <li><Link to="/archivo-de-suenos">Archivo de sueños</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
