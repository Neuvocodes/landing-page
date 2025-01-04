import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import emailIcon from "../../assets/images/email-icon.png";
import addressIcon from "../../assets/images/address-icon.png";
import facebookIcon from "../../assets/images/facebook-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="" className="logo_footer_image" />
          <p>NeuovoCode</p>
        </div>

        <div className="contact-list">
          <div className="contact-body">
            <img src={phoneIcon} alt="Phone" className="phone-icon" />
            <p>(+62) 821 3265 8861</p>
          </div>
          <div className="contact-body">
            <img src={emailIcon} alt="Email" />
            <p>neuvocode11@gmail.com</p>
          </div>
          <div className="contact-body">
            <img src={addressIcon} alt="Address" />
            <p>
              Jl. Raya Ngeni No.4, Panyunan, Kepuhkiriman, Kec. Waru, Kabupaten
              Sidoarjo, Jawa Timur 61256
            </p>
          </div>
        </div>

        <div className="menu-container">
          <h4 className="menu-title">Menu</h4>
          <div className="menu-list">
            <div className="menu-body">
              <a href="#home">Home</a>
              <a href="#our-expertise">Our Expertise</a>
              <a href="#experience">What People Say</a>
            </div>
            <div className="menu-body">
              <a href="#product">Our Product</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4806780420145!2d112.66534274074596!3d-7.411931173028192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3e6609a943b%3A0x92b0f915cc7757da!2sTiga%20Sinar%20Matahari!5e0!3m2!1sid!2sid!4v1735367498775!5m2!1sid!2sid"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="social-media">
        <div className="social-media-icon">
          <img src={facebookIcon} alt="Facebook" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={instagramIcon} alt="Instagram" />
        </div>
        <p>© 2024 NeuvoCode. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
