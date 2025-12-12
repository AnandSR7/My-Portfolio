import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const nav = document.querySelector(".top-nav");

    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add("nav-shadow");
      } else {
        nav.classList.remove("nav-shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="top-nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
      <div class="divider"></div>
      <header className="header">
        <div className="header-main">
          <h1>Anand Sreekumar</h1>
          <p className="tagline">Full Stack Developer + SDET</p>
        </div>
      </header>
    </>
  );
}
