import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="Vincent Company Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </div>
      <ul className={`navbar-links nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Inicio</Link></li>
        <li><Link to="/nosotros" onClick={toggleMobileMenu}>Nosotros</Link></li>
        <li><Link to="/proyectos" onClick={toggleMobileMenu}>Proyectos</Link></li>
        <li><Link to="/ecos" onClick={toggleMobileMenu}>ECOS</Link></li>
        <li><Link to="/archivo-de-suenos" onClick={toggleMobileMenu}>Archivo de sueños</Link></li>
        <li><Link to="/contacto" onClick={toggleMobileMenu}>Contacto</Link></li>
      </ul>
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
    </nav>
  );
};

export default Navbar;
