import React from "react";
import logo from '../assets/images/logo-anfit.png';

function Header() {
  return (
    <header className="header">
        <button type="button" className="logo"><img src={logo} alt="anfit"/></button>
    </header>
  );
}

export default Header;
