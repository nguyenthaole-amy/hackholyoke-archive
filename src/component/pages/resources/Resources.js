import React, { useEffect } from "react";
import "./Resources.css";
import header from "../../../img/Resources-header.png";
import "../aboutus/AboutPage.css"
import guidePreview from "../../../img/Artboard 2.png"
import Challenges from "./Challenges.jsx";
import { ChallengesData } from "./ChallengesData"

function ResourcesPage() {

    useEffect(() => {
        document.title = "Resources";
    }, []);

    return (
        <>

            <div className="about-container">
                <img src={header} className="header-img" alt="header" />
            </div>
            <div className="content-container">
                <Challenges slides={ChallengesData}></Challenges>
                <hr />
                <div id="box2">
                    <div className="prehack">Pre-Hack Materials</div>
                    <br />
                    <div className="guide-for-hackers">Guide for new Hackers: <a className="guide-for-hackers" href="https://docs.google.com/document/d/19CZ7EA4wj6FCgarloCHKiVyiW7hvB_xVqY-flxwBNC4/edit?usp=share_link">Link</a></div>
                    <br />
                    <div><img className="guide-preview" src={guidePreview} alt="" /></div>
                </div>
            </div>
        </>
    );
}

export default ResourcesPage;