import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id="about" className="section">About Me</section>
      <section id="experience" className="section">Experience</section>
      <section id="projects" className="section">Projects</section>
      <section id="contact" className="section">Contact</section>
      <Footer />
    </>
  );
}
