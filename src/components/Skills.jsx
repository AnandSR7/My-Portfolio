import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    // Animate the whole section
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate each skill item with stagger
    gsap.fromTo(
      ".skill-item",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <h2>Skills</h2>
      <ul>
        <li className="skill-item">
          <strong>Languages:</strong> JavaScript, TypeScript, C#, HTML,
          CSS,Python,Java
        </li>
        <li className="skill-item">
          <strong>Frontend:</strong> React, Vite,TypeScript
        </li>
        <li className="skill-item">
          <strong>Automation:</strong> Playwright, BDD, NUnit
        </li>
        <li className="skill-item">
          <strong>Tools:</strong> Git, Docker, CI/CD
        </li>
      </ul>
    </section>
  );
}
