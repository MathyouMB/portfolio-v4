import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
function About() { 

 const scrollIcon = <FontAwesomeIcon icon={faScroll} />
 const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
 const gitIcon = <FontAwesomeIcon icon={faGithub} />
 const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />

  return (  
    <div className="about">
       <div>
           <img className="about-avatar" src="/profile.jpg"></img>
       </div>
       <div className="about-text">
           <div className="about-header">
           Hey There, I'm Matthew!
               {/*<div style={{"width":"100%", "textAlign":"center"}}></div>*/}
           </div>
  <hr></hr>
           <div className="about-description">
               <div>I'm a <b>Carleton University</b> computer science student interested in web development, distributed systems, and cloud infrastructure. </div>
               <br></br>
               <div>I'm currently searching for <b>Summer 2021</b> {/*<span className="hvr-float" role="img">❄️</span>*/} and <b>Fall 2021</b> {/*<span className="hvr-float" role="img">🌻</span>*/} internship opportunities.</div>
           </div>
           <div className="about-desktop">
           <div className="about-tags">
               <div className="about-tag"><span className="underline--github"><a href="https://github.com/MathyouMB">Github</a></span></div>
               <div className="about-tag"><span className="underline--linkedin"><a href="https://www.linkedin.com/in/matthewmacraebovell/">LinkedIn</a></span></div>
               <div className="about-tag"><span className="underline--resume"><a href="http://resume.matthewmacraebovell.com">Resume</a></span></div>
               <div className="about-tag"><span className="underline--email"><a href="mailto:matthewmacraebovell@outlook.com">Email</a></span></div>
           </div>
           </div>
           <div className="about-mobile">
           <div className="footer-links">
                <div className="footer-link hvr-float">
                    <a href="https://github.com/MathyouMB">{gitIcon}</a>
                </div>
                <div className="footer-link hvr-float">
                    <a href="https://www.linkedin.com/in/matthewmacraebovell/">{linkedIcon}</a>
                </div>
                <div className="footer-link hvr-float">
                    <a href="mailto:matthewmacraebovell@outlook.ca">{mailIcon}</a>
                </div>
                <div className="footer-link hvr-float">
                <a href="http://resume.matthewmacraebovell.com">{scrollIcon}</a>
                </div>
            </div>
            </div>
        </div>

    </div>
  );
}

export default About;