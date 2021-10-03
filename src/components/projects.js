import React from 'react';
import { Timeline, Event } from "react-timeline-scribble";
import SimpleImageSlider from "react-simple-image-slider";
import Orbit from "./orbit";
function Projects() { 
  const project1 = [
      { url: "https://github.com/MathyouMB/Bookstore/raw/master/docs/screenshots/15-reportsview.png" },
      { url: "https://github.com/MathyouMB/Bookstore/raw/master/docs/screenshots/06-defaultuserview.png" },
      { url: "https://github.com/MathyouMB/Bookstore/raw/master/docs/schema.png" },
  ];

  const project2 = [
    { url: "https://github.com/CarletonComputerScienceStudyCenter/StudyCenter-Client/raw/master/screenshot1.png" },
    { url: "https://github.com/CarletonComputerScienceStudyCenter/StudyCenter-Client/raw/master/screenshot2.png" },
    { url: "https://camo.githubusercontent.com/8357d838710c51582a4b37d0d28ee17d2a35561d/68747470733a2f2f692e696d6775722e636f6d2f62494f4238576a2e706e67" },
];

const project3 = [
  { url: "https://camo.githubusercontent.com/bd976a05912adabc75e0e3170dff11712f7319e3/68747470733a2f2f692e6779617a6f2e636f6d2f62343462663662366532313365353037323334646166636433306330643361612e676966" }
];
  return (  
    <>
    <div className="work">
        <ul className="work-timeline">
            <li className="work-event">
            
            <label className="work-icon" style={{"backgroundColor":"rgb(253 170 76)"}}></label>
            <div className="work-container">
                <div className="work-body">
                    <a href="https://discretemath.ca/">
                    <p className="work-date" style={{"backgroundColor":"rgb(253 170 76)"}}>March 2020 - Present</p>
                    <h3>DiscreteMath.ca</h3>
                    <h4>Web Application</h4>
                    <div className="work-description">
                        <div className="experience-sections">
                        <div>
                        <div className="experience-description">DiscreteMath.ca is an interactive platform built specifically for content from Carleton's discrete mathematics courses.</div>
                        <br></br>
                        <div className="experience-logos">
                          <div><img className="experience-logo" src="./logos/svelte.png"></img></div>
                          <div><img className="experience-logo" src="./logos/rails.png"></img></div>
                          <div><img className="experience-logo" src="./logos/fastapi.png"></img></div>
                          <div><img className="experience-logo" src="./logos/graphql.png"></img></div>
                          <div><img className="experience-logo" src="./logos/postgres.png"></img></div> 
                      </div>
                        <br></br>
                        <br></br>
                        </div>
                        <div><img className="company-logo company-logo-inner" src="https://github.com/CarletonComputerScienceSociety/discretemath.ca/raw/master/docs/logo.png"></img></div>
                        </div>
                    </div>
                    </a>
                </div>
                <div><img className="company-logo company-logo-outer" src="https://github.com/CarletonComputerScienceSociety/discretemath.ca/raw/master/docs/logo.png"></img></div>
            </div>
            
            </li>
            <li className="work-event">
           
            <label className="work-icon" style={{"backgroundColor":"rgb(211 35 43)"}}></label>
            <div className="work-container">
            <div className="work-body">
                 <a href="https://merged.carletoncomputerscience.ca/">
                <p className="work-date" style={{"backgroundColor":"rgb(211 35 43)"}}>May 2021 - Present</p>
                <h3>Merged</h3>
                <h4>Web Application</h4>
                <div className="work-description">
                <div className="experience-sections">
                <div>
                <div className="experience-description">Merged is a community project that aims to provide a platform where students can easily view all activity and events from all Carleton tech student groups.</div>
                <br></br>
                <div className="experience-logos">
                  <div><img className="experience-logo" src="./logos/react.png"></img></div>
                  <div><img className="experience-logo" src="./logos/nextjs.png"></img></div>
                  <div><img className="experience-logo" src="./logos/django.png"></img></div>
                  <div><img className="experience-logo" src="./logos/postgres.png"></img></div>
                  <div><img className="experience-logo" src="./logos/docker.png"></img></div>
              </div>

              <br></br>
                        <br></br>
                        </div>
                        <div><img className="company-logo company-logo-inner" src="https://github.com/CarletonComputerScienceSociety/merged/raw/master/docs/logo.png"></img></div>
                        </div>
                    </div>
                    </a>
                </div>
                <div><img className="company-logo company-logo-outer" src="https://github.com/CarletonComputerScienceSociety/merged/raw/master/docs/logo.png"></img></div>
            </div>
 
            </li> 
            <li className="work-event">
           
            <label className="work-icon" style={{"backgroundColor":"rgb(14 53 251)"}}></label>
            <div className="work-container">
            <div className="work-body">
                 <a href="https://github.com/MathyouMB/scored">
                <p className="work-date" style={{"backgroundColor":"rgb(14 53 251)"}}>March 2021 - April 2021</p>
                <h3>Scored</h3>
                <h4>Web Application</h4>
                <div className="work-description">
                <div className="experience-sections">
                <div>
                <div className="experience-description">Scored is an Elixir based scrum planning poker. Built to build a deeper understanding of OTP, concurrency, and the Elixir ecosystem.</div>
                <br></br>
                <div className="experience-logos">
                  <div><img className="experience-logo" src="./logos/elixir.png"></img></div>
                  <div><img className="experience-logo" src="./logos/html.png"></img></div>
                  <div><img className="experience-logo" src="./logos/css.png"></img></div>
                  <div><img className="experience-logo" src="./logos/javascript.png"></img></div>
                  <div><img className="experience-logo" src="./logos/heroku.png"></img></div>
              </div>

              <br></br>
                        <br></br>
                        </div>
                        <div><img className="company-logo company-logo-inner" src="/scored.png"></img></div>
                        </div>
                    </div>
                    </a>
                </div>
                <div><img className="company-logo company-logo-outer" src="/scored.png"></img></div>
            </div>
 
            </li> 
        </ul>
    </div>
    
    </>
  );
}

export default Projects;