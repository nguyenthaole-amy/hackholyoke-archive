import React, { useEffect } from "react";
import "./AboutPage.css";
import header from "./AboutUsHeader.png";
import onsite from "./onsite.png";
import Profile from "./Profile";


function AboutPage() {

  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <>

      <div className="about-container">
        <img className="header-img" src={header} alt="aboutheader" />
      </div>

      <div className="content-container">
        <h1 className="about-h1">What is HackHolyoke?</h1>
        <div className="info">
          <div className="abt-para">
            HackHolyoke is a 24-hour hackathon hosted every year by students at
            Mount Holyoke College, one of the first historically women’s
            colleges in the US. Initiated in 2014, we have strived to be an
            inclusive hackathon that unites young innovators from a variety of
            backgrounds. With over 50% of HackHolyoke attendees identifying as
            women and/or first-time hackers, our hackathon aims to represent
            what we hope the tech industry will look like.
          </div>

          <div className="abt-img">
            <img src={onsite} className="onsite-img" alt="onsite" />
          </div>
        </div>
        <h1 className="about-h1"> When HackHolyoke 2022 will be held?</h1>
        <div className="info">
          <p className="abt-font-size">HackHolyoke 2022 will take place on <strong className="abt-font-size">November 12-13th, 2022 </strong> with a hybrid, digital
            focus with in-person tea breaks, information sessions, and workshops.</p>
        </div>
        <Profile />
      </div>
    </>
  );
}

export default AboutPage;
