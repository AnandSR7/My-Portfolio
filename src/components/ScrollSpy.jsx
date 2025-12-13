import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let manualActiveId = null; // to track manual clicks

    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    };

    // 👇 NEW: handle nav click
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        manualActiveId = link.getAttribute("href").replace("#", "");
        setActive(manualActiveId);

        // release after scroll settles
        setTimeout(() => {
          manualActiveId = null;
        }, 800);
      });
    });

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 30%",
        end: "bottom 30%",

        onToggle: (self) => {
          if (!self.isActive) return;
          if (manualActiveId) return; // skip if manual click is active
          setActive(section.id);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
