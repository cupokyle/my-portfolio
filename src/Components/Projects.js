import '../App.scss';
import React from "react";

const image1 = require("../localimages/fakesite1.png");
const image2 = require("../localimages/fakesite2.png");
const image3 = require("../localimages/fakesite3.png");


export default function Projects() {
    return <section className="projectBox">
        <a href="https://www.lego.com" className="projectItem">
            <img alt="image1" src={image1} className="projectImage"/>
            <p className="projectTitle">Website 1</p>
        </a>
        <a href="https://www.lego.com" className="projectItem">
            <img alt="image2" src={image2} className="projectImage"/>
            <p className="projectTitle">Website 2</p>
        </a>
        <a href="https://www.lego.com" className="projectItem">
            <img alt="image3" src={image3} className="projectImage"/>
            <p className="projectTitle">Website 3</p>
        </a>
    </section>
}