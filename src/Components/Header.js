import '../App.scss';
import React from "react";

const appIcon1 = require("../localimages/icon1.png");
const appIcon2 = require("../localimages/icon2.png");
const appIcon3 = require("../localimages/icon3.png");

export default function Header() {
    return <section className="hero">
        <div className="wordSideBox">
            I'm just a little guy
        </div>
        <div className="portfolioTitle headerItem"><span id="kyleForsythPort">Kyle Forsyth's Portf</span><span id="aglio">olio</span></div>
        <div className="headerSideBox">
            <a href="www.lego.com"><img src={appIcon1} alt="appIcon" width="40em"/></a>
            <a href="www.lego.com"><img src={appIcon2} alt="appIcon" width="40em"/></a>
            <a href="www.lego.com"><img src={appIcon3} alt="appIcon" width="40em"/></a>
        </div>
    </section>
}