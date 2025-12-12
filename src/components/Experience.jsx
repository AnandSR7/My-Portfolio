import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const expRef = useRef(null);

  useEffect(() => {
    // Section fade + slide
    gsap.fromTo(
      expRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    // Stagger job items
    gsap.fromTo(
      ".job-item",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: expRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="experience" className="experience" ref={expRef}>
      <h2>Experience</h2>

      <div className="job">
        <h3>Software Engineer — SOTI</h3>
        <p className="job-meta">2023 - Present</p>
        <ul>
          <li className="job-item">UI automation and UI development</li>
          <li className="job-item">Playwright, BDD</li>
          <li className="job-item">
            Designed and maintained scalable UI automation suites using
            Playwright, Selenium, and scripting to validate core workflows
            across distributed applications.
          </li>
          <li className="job-item">
            Implemented BDD-based API automation with SpecFlow and C#,
            validating REST/JSON services and en- suring integration quality.
            Android platforms using Appium and PowerShell.
          </li>
          <li className="job-item">
            Created and maintained Postman collections for API regression and
            exploratory testing.
          </li>
          <li className="job-item">
            Collaborated closely with cross-functional teams in an Agile
            environment, contributing to sprint planning and con- tinuous
            delivery initiatives.
          </li>
        </ul>
      </div>
    </section>
  );
}
