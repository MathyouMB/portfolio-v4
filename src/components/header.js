import React from 'react';
import Orbit from "./orbit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
function Header() { 
  const scrollIcon = <FontAwesomeIcon icon={faScroll} />
  const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
  const gitIcon = <FontAwesomeIcon icon={faGithub} />
  const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />
  return (  
    <div className="header">
        <div className="header-text">
             
            <div className="header-title">MATTHEW</div>
            <div className="header-title3">MACRAE-BOVELL</div>
            <div className="header-title2">Fullstack Web & Software Developer</div>
            {/*<div className="header-paragraph">I'm a second year <span className="underline--magical">Carleton University</span> computer science student interested in web development, distributed systems, and cloud infrastructure. I'm currently working full-time at <span className="underline--magical">Kinaxis</span> and part-time at <span className="underline--magical">Explorator.</span></div>*/}
            <div className="header-buttons">
                <a href="#work"><div className="header-about-button">View My Work</div></a>
                <a href="https://drive.google.com/file/d/17BXO0uemAjefYHP6bXKdZmKiLD--HekM/view"><div className="header-resume-button">Download CV</div></a>
                
            </div>
        </div>
        <Orbit/>
    </div>
  );
}

export default Header;