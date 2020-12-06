import React from 'react';

function Work() { 
  return (  
    <div className="work" id="work">
        <ul className="work-timeline">
            {/*<li className="work-event">
            <label className="work-icon" style={{"backgroundColor":"rgb(0 56 118)"}}></label>
            <div className="work-container">
                <div className="work-body">
                    <p className="work-date" style={{"backgroundColor":"rgb(0 56 118)"}}>January 2021 - April 2021</p>
                    <h3>Software Developer</h3>
                    <h4>TheScore - Internship</h4>
                    <div className="work-description">
                        <div className="experience-sections">
                        <div>
                        <div className="experience-description">Worked with the Platform Team to help build the scalable and performant web services that power Kinaxis' cloud-based Rapid Response platform.</div>
                        <br></br>
                        <div className="experience-logos">
                                    <div><img className="experience-logo" src="./logos/elixir.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/phoenix.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/rails.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/graphql.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/docker.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/kubernetes.png"></img></div>
                                </div>
                        <br></br>
                        <br></br>
                        </div>
                        <div><img className="company-logo company-logo-inner" src="data:image/png;base64,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"></img></div>
                        </div>
                    </div>
                </div>
                <div><img className="company-logo company-logo-outer" src="data:image/png;base64,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"></img></div>
            </div>
            </li>
            */}
            <li className="work-event">
            <label className="work-icon" style={{"backgroundColor":"#9CCC61"}}></label>
            <div className="work-container">
                <div className="work-body">
                    <p className="work-date" style={{"backgroundColor":"#9CCC61"}}>September 2020 - December 2020</p>
                    <h3>Software Developer</h3>
                    <h4>Fullscript - Internship</h4>
                    <div className="work-description">
                        <div className="experience-sections">
                        <div>
                        <div className="experience-description">Worked as a member of the API and Integrations team helping build Fullscript's Ruby on Rails healthcare e-commerce platform.</div>
                        <br></br>
                        <div className="experience-logos">
                                    <div><img className="experience-logo" src="./logos/rails.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/react.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/ts.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/graphql.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/apollo.png"></img></div>
                                    <div><img className="experience-logo" src="./logos/docker.png"></img></div>
                                </div>
                        <br></br>
                        <br></br>
                        </div>
                        <div><img className="company-logo company-logo-inner" src="https://theme.zdassets.com/theme_assets/170781/0e61729203f170c5142da557bfdd33d33d5605eb.png"></img></div>
                        </div>
                    </div>
                </div>
                <div><img className="company-logo company-logo-outer" src="https://theme.zdassets.com/theme_assets/170781/0e61729203f170c5142da557bfdd33d33d5605eb.png"></img></div>
            </div>
            </li>
            <li className="work-event">
            <a href="https://www.kinaxis.com/en">
            <label className="work-icon" style={{"backgroundColor":"#DA152F"}}></label>
            <div className="work-container">
            <div className="work-body">
                <p className="work-date" style={{"backgroundColor":"#DA152F"}}>May 2020 - August 2020</p>
                <h3>Application Platform Developer</h3>
                <h4>Kinaxis - Internship</h4>
                <div className="work-description">
                <div className="experience-sections">
                <div>
                <div className="experience-description">Worked with the Platform Team to help build the scalable and performant web services that power Kinaxis' cloud-based Rapid Response platform.</div>
                <br></br>
                <div className="experience-logos">
                    <div><img className="experience-logo" src="./logos/java.png"></img></div>
                    <div><img className="experience-logo" src="./logos/c.png"></img></div>
                    <div><img className="experience-logo" src="./logos/core2.png"></img></div>
                    <div><img className="experience-logo" src="./logos/maven.png"></img></div>
                    <div><img className="experience-logo" src="./logos/jenkins.png"></img></div>
                    <div><img className="experience-logo" src="./logos/artifactory.png"></img></div>
                </div>
                        <br></br>
                        <br></br>
                        </div>
                        <div><img className="company-logo company-logo-inner" src="/kinaxis.png"></img></div>
                        </div>
                    </div>
                </div>
                <div><img className="company-logo company-logo-outer" src="/kinaxis.png"></img></div>
            </div>
            </a>
            </li>
            <li className="work-event">
            <a href="https://explorator.ca/">
            <label className="work-icon" style={{"backgroundColor":"#FFBA00"}}></label>
            <div className="work-container">
            <div className="work-body">
                <p className="work-date" style={{"backgroundColor":"#FFBA00"}}>April 2019 - Present</p>
                <h3>Junior Web Developer</h3>
                <h4>Explorator - Part Time</h4>
                <div className="work-description">
                <div className="experience-sections">  
                    <div>
                    <div className="experience-description">Worked on a variety of projects and different tech stacks while making core system and infrastructure design decisions. Explorator is an Ottawa based startup that creates affordable software and web applications.</div>

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
                        <div><img className="company-logo company-logo-inner" src="/logos/ex.png"></img></div>
                        </div>
                    </div>
                </div>
                <div><img className="company-logo company-logo-outer" src="/logos/ex.png"></img></div>
            </div>
            </a>
            </li>
            <li className="work-event">
            <a href="https://www.bankofcanada.ca/">
            <label className="work-icon"></label>
            <div className="work-container">
            <div className="work-body">
                <p className="work-date">May 2019 - April 2020</p>
                <h3>IT, Systems Developer</h3>
                <h4>Bank of Canada - Internship</h4>
                <div className="work-description">
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
                        <div><img className="company-logo company-logo-inner" src="/bank.png"></img></div>
                        </div>
                    </div>
                </div>
                <div><img className="company-logo company-logo-outer" src="/bank.png"></img></div>
            </div>
            </a>
            </li>
        </ul>
    </div>
  );
}

export default Work;