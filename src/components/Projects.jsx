import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    // Animate all project cards with stagger
    gsap.fromTo(
      ".project",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project">
          <h3>ALZ</h3>
          <p>
            A Flutter-based mobile app aimed at assisting people living with
            Alzheimer's disease.
          </p>
          <ul className="project-tags">
            <li>Dart</li>
            <li>Java</li>
            <li>Flutter-Firebase</li>
          </ul>
          <p>
            <a href="https://github.com/AnandSR7/ALZ" className="card-link">
              ALZ
            </a>
          </p>
        </div>

        <div className="project">
          <h3>WORDLE</h3>
          <p>
            A simple and engaging Wordle-style word-guessing game where players
            have six attempts to guess a hidden five-letter word.
          </p>
          <ul className="project-tags">
            <li>React JS</li>
            <li>.NET</li>
            <li>C#</li>
          </ul>
          <p>
            <a href="https://github.com/AnandSR7/Wordle" className="card-link">
              Wordle
            </a>
          </p>
        </div>

        <div className="project">
          <h3>Respiratory Disease Detection</h3>
          <p>
            A machine learning model that analyzes breathing audio and then
            identify and classify various respiratory diseases.
          </p>
          <ul className="project-tags">
            <li>Machine Learning</li>
            <li>Python</li>
            <li>TensorFlow</li>
          </ul>
          <p>
            <a
              href="https://github.com/AnandSR7/Respiratory_final"
              className="card-link"
            >
              Respiratory Disease Recognition
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
