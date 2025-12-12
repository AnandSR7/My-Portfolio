import Header from "./components/Headers.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";
import ScrollSpy from "./components/ScrollSpy.jsx";
import Education from "./components/Education.jsx";
export default function App() {
  return (
    <>
      <ScrollSpy />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
