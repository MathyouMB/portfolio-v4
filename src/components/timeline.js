import React from 'react';
import { Timeline, Event } from "react-timeline-scribble";
import Orbit from "./orbit";
function TimelineComponent() { 
  return (  
    <div className="timeline">
    <Timeline>
    <Event interval={"September 2020 - December 2020"} title={"Software Developer"} subtitle={"Fullscript - Internship"}>
        <div className="experience-sections">
        
        <div>
        <div className="experience-description">Worked with the Platform Team to help build the scalable and performant web services that power Kinaxis' cloud-based Rapid Response platform.</div>
        {/*<ul style={{"marginLeft":"2em","marginTop":"1em"}}>
          <li>
            Followed the agile development process to resolve bugs and development tasks for the ASP.NET application server and Java client application 
          </li>
          <li>
          Packaged and deployed application dependencies using Maven and Jenkins to eliminate unnecessary compilation and improve build times of core Java client
          </li>
  </ul>*/}
        <br></br>
        <div className="experience-logos">
                    <div><img className="experience-logo" src="./logos/javascript.png"></img></div>
                    <div><img className="experience-logo" src="./logos/react.png"></img></div>
                    <div><img className="experience-logo" src="./logos/rails.png"></img></div>
                    <div><img className="experience-logo" src="./logos/graphql.png"></img></div>
                    <div><img className="experience-logo" src="./logos/docker.png"></img></div>
                    <div><img className="experience-logo" src="./logos/kubernetes.png"></img></div>
                </div>
        <br></br>
        <br></br>
        </div>
        <div><img className="company-logo" src="https://theme.zdassets.com/theme_assets/170781/0e61729203f170c5142da557bfdd33d33d5605eb.png"></img></div>
        </div>
        </Event>
      <Event interval={"May 2020 - August 2020"} title={"Application Platform Developer"} subtitle={"Kinaxis - Internship"}>
        <div className="experience-sections">
        
        <div>
        <div className="experience-description">Worked with the Platform Team to help build the scalable and performant web services that power Kinaxis' cloud-based Rapid Response platform.</div>
        {/*<ul style={{"marginLeft":"2em","marginTop":"1em"}}>
          <li>
            Followed the agile development process to resolve bugs and development tasks for the ASP.NET application server and Java client application 
          </li>
          <li>
          Packaged and deployed application dependencies using Maven and Jenkins to eliminate unnecessary compilation and improve build times of core Java client
          </li>
  </ul>*/}
        <br></br>
        <div className="experience-logos">
            <div><img className="experience-logo" src="./logos/java.png"></img></div>
            <div><img className="experience-logo" src="./logos/c.png"></img></div>
            <div><img className="experience-logo" src="./logos/core2.png"></img></div>
            <div><img className="experience-logo" src="./logos/maven.png"></img></div>
            <div><img className="experience-logo" src="./logos/jenkins.png"></img></div>
            <div><img className="experience-logo" src="./logos/artifactory.png"></img></div>
            {/*<div><img className="experience-logo" src="./logos/kubernetes.png"></img></div>*/}
        </div>
        <br></br>
        <br></br>
        </div>
        <div><img className="company-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Kinaxis-Logo.svg/1280px-Kinaxis-Logo.svg.png"></img></div>
        </div>
      </Event>
      
      <Event interval={"April 2019 - Present"} title={"Junior Web Developer"} subtitle={"Explorator - Part Time"}>
        <div className="experience-sections">
        
        <div>
        <div className="experience-description">Explorator is an Ottawa based startup that creates affordable software and web applications. As a Junior Web Developer, I've worked on variety of projects and different tech stacks.</div>

        <br></br>
        <div className="experience-logos">
                    <div><img className="experience-logo" src="./logos/react.png"></img></div>
                    <div><img className="experience-logo" src="./logos/graphql.png"></img></div>
                    <div><img className="experience-logo" src="./logos/nodejs.png"></img></div>
                    <div><img className="experience-logo" src="./logos/rails.png"></img></div>
                    <div><img className="experience-logo" src="./logos/docker.png"></img></div>
                    <div><img className="experience-logo" src="./logos/aws.png"></img></div>
        </div>
        <br></br>
        <br></br>
        </div>
        <div><img className="company-logo2" src="/logos/ex.png"></img></div>
        </div>
      </Event>
      <Event interval={"May 2019 - April 2020"} title={"IT, Systems Developer"} subtitle={"Bank of Canada - Internship"}>
      <div className="experience-sections">
        
        <div>
        <div className="experience-description">Tested, maintained, and developed applications supporting several different teams and departments within the Bank.</div>
        <br></br>
        <div className="experience-logos">
                    <div><img className="experience-logo" src="./logos/javascript.png"></img></div>
                    <div><img className="experience-logo" src="./logos/jquery.png"></img></div>
                    <div><img className="experience-logo" src="./logos/html.png"></img></div>
                    <div><img className="experience-logo" src="./logos/css.png"></img></div>
                    <div><img className="experience-logo" src="./logos/sharepoint.png"></img></div>
                    <div><img className="experience-logo" src="./logos/azure.png"></img></div>
                </div>
        <br></br>
        <br></br>
        </div>
        <div><img className="company-logo" src="https://theindustryspread.com/wp-content/uploads/2018/06/Bank_of_Canada_logo.png"></img></div>
        </div>
      </Event>
    </Timeline>
    </div>
  );
}

export default TimelineComponent;