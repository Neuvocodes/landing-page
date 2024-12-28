import React from "react";
import "./Header.css";
import headerImage from "../../assets/images/header_image.png";
import Navbar from "../Navbar/Navbar";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="body-header">
        <div className="left">
          <img src={headerImage} alt="" />
        </div>
        <div className="right">
          <h3>Are You Looking For Making Really Good Software ?</h3>
          <p>
            Creating exceptional software requires technical expertise,
            innovation, and understanding user needs. Let us handle it for you,
            so you don’t have to.
          </p>
          <a className="btn-contact-us" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
      <div className="wave"></div>
    </div>
  );
};

export default Header;
