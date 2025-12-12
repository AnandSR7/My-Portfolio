import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <section className="hero" id="hero" ref={heroRef}>
        <p>
          I build modern web applications and work full-time as an SDET,
          specializing in both full-stack development and automation. My
          development experience spans front-end technologies—where I focus on
          creating clean, responsive, and user-friendly UI—and back-end
          services, where I work with server-side logic, APIs, and data handling
          to deliver reliable end-to-end solutions. Alongside development, I
          also automate UI and functional workflows to ensure every feature
          behaves as expected across different browsers and environments. By
          combining full-stack engineering skills with strong automation
          practices, I am able to design, build, and validate complete
          application features with a deep understanding of both functionality
          and quality.
        </p>
      </section>
      <div className="NavigationLinks">
        <p>
          <a href="#projects">View My Work</a>
          <a href="https://drive.google.com/file/d/1ia4aFNNdSH_R_zd6168x_mN47jfahwtZ/view?usp=sharing">
            My Resume
          </a>
          <a href="#contact">Get In Touch</a>
        </p>
      </div>
    </>
  );
}
