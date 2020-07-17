import React from 'react';
import Particle from "./components/particles";
import Header from "./components/header";

function App() {
  return (
    <main className="wrapper">
      <Particle/>
      <section className="parallax bg1">
        <Header/>
      </section>
      <section className="section static">
        <h1>Experience</h1>
      </section>
      <section className="section parallax bg2">
        <h1>Projects</h1>
      </section>
      <section className="section static">
        <h1>Copyright</h1>
      </section>
  </main>
  );
}

export default App;
