import About from "./components/about";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Hero />
      <About />
    </div>
  );
}
