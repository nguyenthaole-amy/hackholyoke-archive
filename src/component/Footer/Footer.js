import React from "react";
import "./Footer.css";
import footer1 from "./footer-1.png";
import footer2 from "./footer-2.png";
import Social from "./Social.js"

function Footer() {
  return (
    <>
      <footer className="mobile-footer">
        <img className="footer-2" src={footer2} alt="envelopetop" />
        <img className="footer" src={footer1} alt="envelope" />
        <div className="back-mail"></div>
        <div className="paper-mail"></div>
        <Social />

      </footer>
    </>

  );
}


export default Footer;