import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo-ufrj.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo da universidade" />
        <span href="#">UNIVERSIDADE FEDERAL DO RIO DE JANEIRO</span>
      </div>
    </div>
  );
}

export default Navbar;
