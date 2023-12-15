import '../App.scss';
import React, { useState, useRef, useEffect } from "react";

const appIcon1 = require("../localimages/icon1.png");
const appIcon2 = require("../localimages/icon2.png");
const appIcon3 = require("../localimages/icon3.png");

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(); // Add this line

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
      };

      useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
    
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return <section className="hero">
        <a href="https://www.canva.com/design/DAEp1s9oo9Y/HFXea3SIFXUDYGMGLmZRsA/view" className="wordSideBox" id="resume" target="_blank" rel="noopener noreferrer">
            Check out my resume
        </a>
        <div className="portfolioTitle headerItem"><span id="kyleForsythPort">Kyle Forsyth's Portfolio</span></div>
        <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div ref={menuRef} className={`headerSideBox ${isMenuOpen ? 'isMenuOpen' : ''}`}>
            <a href="https://github.com/cupokyle" target="_blank" rel="noopener noreferrer"><img src={appIcon3} alt="appIcon" width="40em"/></a>
            <a href="https://ca.linkedin.com/in/kyleforsyth" target="_blank" rel="noopener noreferrer"><img src={appIcon2} alt="appIcon" width="40em"/></a>
            <a href="https://twitter.com/cupokyle" target="_blank" rel="noopener noreferrer"><img src={appIcon1} alt="appIcon" width="40em"/></a>
        </div>
    </section>
}
