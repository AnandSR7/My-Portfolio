import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    // Animate entire contact section
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate each link with stagger
    gsap.fromTo(
      ".contact-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <p className="contact-links">
        <span className="contact-item">
          <FaPhone /> 7025350926
        </span>
        &nbsp;|&nbsp;
        <a href="mailto:65nandavani@gmail.com" className="contact-item">
          <MdEmail /> Email
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://linkedin.com/in/anand-sreekumar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin /> LinkedIn
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://github.com/AnandSR7"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaGithub /> GitHub
        </a>
      </p>
    </section>
  );
}
