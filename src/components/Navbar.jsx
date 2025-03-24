import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Portfolio</Link>
        
        <button className="mobile-toggle" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/Projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;