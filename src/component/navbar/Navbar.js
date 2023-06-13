import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "./Asset2.png"
import holyoke from "./HackHolyoke_1.png";
import bar from "./bars-solid.svg"


function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <>
      <nav>
        <div className="float">
          <div className="logo-div">
            <img className="logo" src={logo} width="60px" onClick={process.env.URL + "/welcome"} alt="" />
            <img className="name" src={holyoke} height="60px" alt="" />
          </div>
          <button className="toggle-btn" onClick={toggleNav}><img src={bar} alt="bar-btn" /></button>
        </div>
        {(toggleMenu || screenWidth > 1170) && (
          <>
            <ul className="nav-menu">
              {MenuItems.map((item, index) => {
                return (
                  <li key={index} className="items">
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeRGjigllG6QvYZ362C0zksyyhhFbp8ig_bUFf0h8_Jwf3tFA/viewform"
              type="button"
              className="register-button"
              target="_blank" rel="noopener noreferrer"
            >
              Register
            </a>
          </>)}
      </nav>

      <a className="mlh-trust-badge" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank" rel="noopener noreferrer">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" /></a>
    </>
  );
}

export default Navbar;


