import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import myPhoto from "../assets/my-photo.jpg";

export default function About() {
  const aboutRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    // Section fade + slide
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    // Photo animation
    gsap.fromTo(
      photoRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="section-header">
        <h2>About</h2>
      </div>
      <section id="about" className="about" ref={aboutRef}>
        <div className="about-grid">
          <img
            src={myPhoto}
            alt="My Photo"
            className="about-photo"
            ref={photoRef}
          />
        </div>
        <div>
          <p>
            <strong>
              I am passionate about software development and thrive as a
              full-stack engineer.
            </strong>{" "}
            Currently working as an SDET at SOTI, I bring hands-on experience in
            building both web and mobile applications. I enjoy transforming
            ideas into efficient, scalable, and intuitive digital solutions, and
            I constantly look for ways to improve performance, usability, and
            overall product quality.
          </p>
          <p>
            <strong>More details:</strong> C#,.NET,React-JS,python
          </p>

          <ul className="stats">
            <li>
              <strong>2+</strong> years experience
            </li>
            <li>
              <strong>4+</strong> projects
            </li>
            <li>
              <strong>Open to</strong> full-time / freelance
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
