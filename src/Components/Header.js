import '../App.scss';
import React from "react";

const appIcon1 = require("../localimages/icon1.png");
const appIcon2 = require("../localimages/icon2.png");
const appIcon3 = require("../localimages/icon3.png");

export default function Header() {
    return <section className="hero">
        <a href="https://www.canva.com/design/DAEp1s9oo9Y/HFXea3SIFXUDYGMGLmZRsA/view" className="wordSideBox" id="resume" target="_blank" rel="noopener noreferrer">
            Check out my resume
        </a>
        <div className="portfolioTitle headerItem"><span id="kyleForsythPort">Kyle Forsyth Portf</span><span id="aglio">olio</span></div>
        <div className="headerSideBox">
            <a href="https://github.com/cupokyle" target="_blank" rel="noopener noreferrer"><img src={appIcon3} alt="appIcon" width="40em"/></a>
            <a href="https://ca.linkedin.com/in/kyleforsyth" target="_blank" rel="noopener noreferrer"><img src={appIcon2} alt="appIcon" width="40em"/></a>
            <a href="https://twitter.com/cupokyle" target="_blank" rel="noopener noreferrer"><img src={appIcon1} alt="appIcon" width="40em"/></a>
        </div>
    </section>
}