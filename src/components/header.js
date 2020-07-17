import React from 'react';
import Orbit from "./orbit";
function Header() { 
  return (  
    <div className="header">
        <div className="header-text">
            <div className="header-title">Matthew MacRae-Bovell,</div>
            <div className="header-title2">Software & Web Developer</div>
            <div className="header-paragraph">I'm a second year <span className="underline--magical">Carleton University</span> computer science student interested in web development, distributed systems, and cloud infrastructure. I'm currently working full-time at <span className="underline--magical">Kinaxis</span> and part-time at <span className="underline--magical">Explorator.</span></div>
            <div className="header-buttons">
                <div className="header-about-button">View My Work</div>
                <div className="header-resume-button">Download CV</div>
            </div>
        </div>
        <Orbit/>
    </div>
  );
}

export default Header;