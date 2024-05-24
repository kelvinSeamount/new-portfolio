import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import SectionDivider from "./components/section-divder";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
