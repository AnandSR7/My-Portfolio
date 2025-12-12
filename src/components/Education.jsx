import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Education() {
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
    <section id="education" className="education" ref={expRef}>
      <h2>Education</h2>
      <div className="education-grid">
        <a
          href="https://www.rajagiritech.ac.in/Home/"
          target="_blank"
          rel="noopener noreferrer"
          className="edu-card-link"
        >
          <div className="edu-card">
            <h3>Bachelor of Technology</h3>
            <p>Computer Science and Engineering</p>
            <p>Rajagiri School of Engineering and Technology</p>
            <span>2019-2023</span>
          </div>
        </a>
        <a
          href="https://www.kvnschool.com/ "
          target="_blank"
          rel="noopener noreferrer"
          className="edu-card-link"
        >
          <div className="edu-card">
            <h3>Higher Secondary</h3>
            <p>Computer Science</p>
            <p>Kailasanadha Vidyanikethan</p>
            <span>2017-2019</span>
          </div>
        </a>
        <a
          href="https://christvidyanikethan.edu.in/ "
          target="_blank"
          rel="noopener noreferrer"
          className="edu-card-link"
        >
          <div className="edu-card">
            <h3>School</h3>
            <p>Christ Vidyanikethan</p>
            <span>2005-2017</span>
          </div>
        </a>
      </div>
    </section>
  );
}
