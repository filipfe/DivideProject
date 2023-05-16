import Opinions from "@/components/Home/Opinions/Opinions";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects/Projects";
import Services from "@/components/Home/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Projects />
      <Opinions />
    </div>
  );
}
