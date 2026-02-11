import React, { useEffect, useRef } from "react";
import poza3 from "../assets/images/poza3.png";

const Hero = () => {
  const waveRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (waveRef.current) {
        waveRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      if (circleRef.current) {
        circleRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero artistic-hero d-flex justify-content-center align-items-center">
      
      <svg ref={waveRef} className="svg-wave" viewBox="0 0 1440 320">
        <path
          fill="rgba(255, 255, 255, 0.62)"
          d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,160C672,149,768,139,864,149.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L0,0Z"
        />
      </svg>
      
      <svg ref={circleRef} className="svg-circle circle-1" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="rgba(198, 231, 255, 0.45)"
        />
      </svg>
      
      <div className="glass-card text-center p-5 fade-in">
        <div className="image-wrapper mb-4">
          <img
            src={poza3}
            alt="Portrait of Raluca Trofimov"
            className="hero-img"
          />
        </div>

        <h1 className="hero-title mb-3">
          Hi, I’m <span>Raluca Trofimov</span> <span className="wave">👋</span>
        </h1>

        <p className="hero-subtitle mb-4">
          Junior Front-End Developer • React • JavaScript • UI Design
        </p>

        <a href="#projects" className="hero-btn">
          View Projects
        </a>
      </div>
     
      <div className="scroll-indicator"></div>

    </section>
  );
};

export default Hero;
