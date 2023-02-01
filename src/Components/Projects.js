import '../App.scss';
import React from "react";

const image1 = require("../localimages/clapify.png");
const image2 = require("../localimages/whatnow.png");
const image3 = require("../localimages/wedding.png");


export default function Projects() {
    return <section className="projectBox">
        <a href="https://cupokyle.github.io/clapify/" className="projectItem" target="_blank" rel="noopener noreferrer">
            <img alt="image1" src={image1} className="projectImage"/>
            <p className="projectTitle">Clapify</p>
        </a>
        <a href="https://wnow.netlify.app/" className="projectItem" target="_blank" rel="noopener noreferrer">
            <img alt="image2" src={image2} className="projectImage"/>
            <p className="projectTitle">What Now?</p>
        </a>
        <a href="https://www.lego.com" className="projectItem" target="_blank" rel="noopener noreferrer">
            <img alt="image3" src={image3} className="projectImage"/>
            <p className="projectTitle">Wedding Website</p>
        </a>
    </section>
}