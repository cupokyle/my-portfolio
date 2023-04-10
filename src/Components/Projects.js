import '../App.scss';
import React from "react";

const image1 = require("../localimages/blackjack-screen.png");
const image2 = require("../localimages/wnow-screen.png");
const image3 = require("../localimages/weddin-screen.png");


export default function Projects() {
    return <section className="projectBox">
        <a href="https://rudedudeblackjack.netlify.app/" className="projectItem" target="_blank" rel="noopener noreferrer">
            <img alt="image1" src={image1} className="projectImage"/>
            <p className="projectTitle">Rude Dude Blackjack</p>
        </a>
        <a href="https://wnow.netlify.app/" className="projectItem" target="_blank" rel="noopener noreferrer">
            <img alt="image2" src={image2} className="projectImage"/>
            <p className="projectTitle">What Now?</p>
        </a>
        <a href="https://beautifulwedding.netlify.app/" className="projectItem" target="_blank" rel="noopener noreferrer">
            <img alt="image3" src={image3} className="projectImage"/>
            <p className="projectTitle">Wedding Website</p>
        </a>
    </section>
}