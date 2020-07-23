import React from 'react';
import Particle from "./components/particles";
import Header from "./components/header";
import Experience from "./components/experience";
import Orbit from "./components/orbit";
import Timeline from "./components/timeline";
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
        {/*<Experience/>*/}
        <Particle/>
        <Timeline/>
      </section>
      <section className="section static">
        <Orbit/>
      </section>
      <section className="section parallax bg2">
        <h1>Projects</h1>
      </section>
      <section className="section-footer static">
        <Footer/>
      </section>
  </main>
  );
}

export default App;
