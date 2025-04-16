import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/AboutComponent/About";
import Skills from "./components/SkillsComponent/Skills";
import Experience from "./components/ExperienceComponent/Experience";
import Projects from "./components/ProjectComponent/Projects";
import Contact from "./components/ContactComponent/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <section id="about" className="section">
        <About />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="experience" className="section">
        <Experience />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
