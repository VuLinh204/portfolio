import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

/**
 * Home page — assembles all portfolio sections in order.
 * Each section is a self-contained component in /src/sections/.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
