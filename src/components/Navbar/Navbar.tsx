import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" className="logo_image" />
        <p>
          Neuovo<span>Code</span>
        </p>
      </div>
      <div className={`links ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#our-expertise">Services</a>
        <a href="#contact">About Us</a>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
