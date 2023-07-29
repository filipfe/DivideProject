import Opinions from "@/components/Home/Opinions/Opinions";
import Hero from "../../components/Home/Hero/Hero";
import Projects from "../../components/Home/Projects/Projects";
import Services from "@/components/Home/Services/Services";
import Banner from "@/components/Home/Banner/Banner";
import Contact from "@/components/Home/Contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Projects />
      <Opinions />
      <Banner />
      <Contact />
    </div>
  );
}
