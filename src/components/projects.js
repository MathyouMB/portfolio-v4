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
            <label className="work-icon" style={{"backgroundColor":"#4365E2"}}></label>
            <div className="work-container">
                <div className="work-body">
                    <p className="work-date" style={{"backgroundColor":"#4365E2"}}>March - April 2019</p>
                    <h3>Bookstore E-Commerce Platform</h3>
                    <h4>Web Application</h4>
                    <div className="work-description">
                        <div className="experience-sections">
                        <div>
                        <div className="experience-description">A Dockerized and Kubernetes configured Platform for selling books online built with Golang, React, and Postgres. This is my final project for COMP3005 Database Management Systems.</div>
                        <br></br>
                        <div className="experience-logos">
                          <div><img className="experience-logo" src="./logos/javascript.png"></img></div>
                          <div><img className="experience-logo" src="./logos/react.png"></img></div>
                          <div><img className="experience-logo" src="./logos/golang.png"></img></div>
                          <div><img className="experience-logo" src="./logos/postgres.png"></img></div>
                          <div><img className="experience-logo" src="./logos/docker.png"></img></div>
                          <div><img className="experience-logo" src="./logos/kubernetes.png"></img></div>
                      </div>
                        <br></br>
                        <br></br>
                        </div>
                        <div className="work-slides company-logo-inner" style={{"borderColor":"#4365E2"}}>
                          <SimpleImageSlider
                              
                              width={500}
                              height={300}
                              images={project1}
                              showBullets={false}
                          />
                          </div>
                        </div>
                    </div>
                </div>
                <div className="work-slides company-logo-outer" style={{"borderColor":"#4365E2"}}>
                          <SimpleImageSlider
                              
                              width={500}
                              height={300}
                              images={project1}
                              showBullets={false}
                          />
                          </div>
            </div>
            </li>
            <li className="work-event">
            <label className="work-icon" style={{"backgroundColor":"#ED424F"}}></label>
            <div className="work-container">
            <div className="work-body">
                <p className="work-date" style={{"backgroundColor":"#ED424F"}}>May 2020 - August 2020</p>
                <h3>Computer Science Study Center</h3>
                <h4>Online Learning Platform</h4>
                <div className="work-description">
                <div className="experience-sections">
                <div>
                <div className="experience-description">Worked with the Platform Team to help build the scalable and performant web services that power Kinaxis' cloud-based Rapid Response platform.</div>
                <br></br>
                <div className="experience-logos">
                  <div><img className="experience-logo" src="./logos/react.png"></img></div>
                  <div><img className="experience-logo" src="./logos/rails.png"></img></div>
                  <div><img className="experience-logo" src="./logos/graphql.png"></img></div>
                  <div><img className="experience-logo" src="./logos/postgres.png"></img></div>
                  <div><img className="experience-logo" src="./logos/redis.png"></img></div>
                  <div><img className="experience-logo" src="./logos/docker.png"></img></div>
              </div>
                        <br></br>
                        <br></br>
                        </div>
                        <div className="work-slides company-logo-inner" style={{"borderColor":"#ED424F"}}>
                          <SimpleImageSlider
                              
                              width={500}
                              height={300}
                              images={project2}
                              showBullets={false}
                          />
                          </div>
                        </div>
                    </div>
                </div>
                <div className="work-slides company-logo-outer" style={{"borderColor":"#ED424F"}}>
                <SimpleImageSlider
                    
                    width={500}
                    height={300}
                    images={project2}
                    showBullets={false}
                />
                </div>
            </div>
            </li> 
        </ul>
    </div>
    
    </>
  );
}

export default Projects;