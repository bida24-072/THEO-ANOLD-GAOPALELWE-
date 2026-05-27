import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PythonDemo from "./components/PythonDemo";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <PythonDemo />
      <Education />
      <Contact />
      <footer className="bg-navy text-white text-center py-6">
        <p>© 2025 Theo Arnold Gaopalelwe — Building data & backend systems for tomorrow.</p>
      </footer>
    </main>
  );
}
