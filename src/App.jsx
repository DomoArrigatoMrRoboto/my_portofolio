import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="gradient-bg">
        <Hero />
        <section className="section-3d">
          <About />
        </section>
        <section className="section-3d">
          <Projects />
        </section>
        <section className="section-3d">
          <Skills />
        </section>
        <Contact />
      </div>
    </>
  );
}

export default App;
