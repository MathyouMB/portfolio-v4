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
           <img className="about-avatar" src="https://avatars0.githubusercontent.com/u/43223682?s=460&u=74b3055be2f8349d6640ca771dde880802e2bf35&v=4"></img>
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
               <div> I have a passion for learning about new technology and have worked for both large and startup tech companies.</div>
               <br></br>
               <div>I'm currently searching for <b>Winter 2021</b> {/*<span className="hvr-float" role="img">❄️</span>*/} and <b>Summer 2021</b> {/*<span className="hvr-float" role="img">🌻</span>*/} internship oppurtunities.</div>
           </div>
           <div className="about-tags">
               <div className="about-tag"><span className="underline--github">Github</span></div>
               <div className="about-tag"><span className="underline--linkedin">LinkedIn</span></div>
               <div className="about-tag"><span className="underline--resume">Resume</span></div>
               <div className="about-tag"><span className="underline--email">Email</span></div>
           </div>
        </div>

    </div>
  );
}

export default About;