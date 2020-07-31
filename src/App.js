import React from 'react';
import Particle from "./components/particles";
import Header from "./components/header";
import Experience from "./components/experience";
import Experiments from "./components/experiments";
import Work from "./components/work";
import Orbit from "./components/orbit";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Footer from "./components/footer";
import About from "./components/about";

function App() {
  return (
    <main className="wrapper">
      <Particle/>
      <section className="parallax bg1">
        <Header/>
      </section>
      <section className="section-about static">
        <About/>
      </section>
      <section className="section-experience parallax bg2">
        <h1>Experience</h1>
        <Work/>
        
      </section>

      <section className="section-projects static">
        <h1>Featured Projects</h1>
        <Projects/>
        <h1>Archieve</h1>
        <Experiments/>
    </section>
      {/*<section className="section-games">

        <div className="game-container">
          <div className="game-left" style={{"backgroundImage":"url(/lastlightbg.png)"}}>
            <img className="game-title" src="/lastlight.png"></img>
          </div>
          <div className="game-right" style={{"backgroundImage":"url(/gifs/lastlight.gif)"}}>

          </div>
        </div>
        <div className="game-container">
          <div className="game-right" style={{"backgroundImage":"url(/gifs/hello.gif)"}}>
          
          </div>
          <div className="game-left" style={{"backgroundImage":"url(/hellobg.png)"}}>
            <img className="game-title" src="/hello.png"></img>
          </div>
        </div>
        <div className="game-container">
          <div className="game-left" style={{"backgroundImage":"url(/project22bg.png)"}}>
          <img src="/project22.png" style={{"height":"300px", "margin":"auto"}}></img>
          </div>
          <div className="game-right" style={{"backgroundImage":"url(/gifs/project22.gif)"}}>

          </div>
        </div>
        <div className="game-container">
          <div className="game-right" style={{"backgroundImage":"url(/gifs/arcane.gif)"}}>

          </div>
          <div className="game-left" style={{"backgroundImage":"url(/arcanebg.png)"}}>
          <img className="game-title" src="/arcane.png"></img>
          </div>
         
        </div>
 
      </section>
       */}
      {/*<section className="section-experience parallax bg2">
        <Particle/>
        <Timeline/>
      </section>
      <section className="section static">
        <Orbit/>
      </section>
      <section className="section parallax bg2">
        <h1>Projects</h1>
      </section>
  */}
      <section className="section-footer static">
        <Footer/>
      </section>
  </main>
  );
}

export default App;
