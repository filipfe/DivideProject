import Opinions from "@/components/Home/Opinions/Opinions";
import Hero from "../../components/Home/Hero/Hero";
import Projects from "../../components/Home/Projects/Projects";
import Services from "@/components/Home/Services/Services";
import Banner from "@/components/Home/Banner/Banner";
import Contact from "@/components/Home/Contact/Contact";
import { Locale, getDictionary } from "@/dictionaries/dictionaries";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { navigation, hero, services, projects, opinions, contact } =
    await getDictionary(params.lang);
  return (
    <>
      <Header dict={navigation} />
      <div className="flex flex-col">
        <Hero dict={hero} />
        <Services dict={services} />
        <Projects dict={projects} />
        <Opinions dict={opinions} />
        <Banner />
        <Contact dict={contact} />
      </div>
      <Footer dict={navigation} />
    </>
  );
}
