import React from 'react';
function About() { 
  return (  
    <div className="about">
       <div><img className="about-avatar" src="https://avatars0.githubusercontent.com/u/43223682?s=460&u=74b3055be2f8349d6640ca771dde880802e2bf35&v=4"></img></div>
       <div className="about-text">
           <div className="about-header">HEY THERE, I'M <span className="underline--magical">MATTHEW!</span> {/*<span className="hvr-float" role="img">👋</span>*/}</div>
           <hr></hr>
           <div className="about-description">
               <div>I'm a <b>Carleton University</b> computer science student interested in web development, distributed systems, and cloud infrastructure. </div>
               <br></br>
               <div> I have a <b>passion</b> for learning about new <b>technology</b> and have worked for both <b>large</b> and <b>startup</b> tech companies.</div>
               <br></br>
               <div>I'm currently searching for <span className="underline--winter">Winter 2021</span> {/*<span className="hvr-float" role="img">❄️</span>*/} and <span className="underline--summer">Summer 2021</span> {/*<span className="hvr-float" role="img">🌻</span>*/} internship oppurtunities.</div>
           </div>
        </div>
    </div>
  );
}

export default About;