import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
function Footer() { 
  const scrollIcon = <FontAwesomeIcon icon={faScroll} />
  const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
  const gitIcon = <FontAwesomeIcon icon={faGithub} />
  const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />
  return (  
    <div className="footer">
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
                <a href="https://drive.google.com/file/d/1fHfytC_4Y0l6_7dyLMvy4GW9ADgSm5Hc/view">{scrollIcon}</a>
                </div>
            </div>
        <div>Copyright © Matthew MacRae-Bovell</div>
    </div>
  );
}

export default Footer;