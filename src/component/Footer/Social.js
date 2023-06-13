import React from "react";
import "./Social.css"
import "../pages/resources/Resources.css"

import facebook from "./Asset 7.png"
import instagram from "./Asset 9.png";
import mail from "./Asset 8.png";

function Social() {

  return (
    <div className="social">
      <div className="footer-img">
        <hr className="footer-hr" />
        <div className="footer-contact-info">Contact Information</div>
        <div className="footer-social-media">
          <a className="social-media" href="mailto:hackholyoke@gmail.com" ><img src={mail} alt="" /></a>
          <a className="social-media" href="https://www.facebook.com/hackholyoke" ><img src={facebook} alt="" /></a>
          <a className="social-media" href="https://www.instagram.com/hackholyoke/"><img src={instagram} alt="" /></a>
        </div>
      </div>
      <div className="footer-text">Made by HackHolyoke <br />©️ HackHolyoke 2022 <br /></div>
      <div className='codeOfConduct'>HackHolyoke abides by the <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</a>.</div>
    </div>
  )
}

export default Social;
