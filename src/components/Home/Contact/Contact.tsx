import Star from "@/components/Star";
import Form from "./components/Form";
import Title from "./components/Title";
import FAQ from "./components/FAQ";

export default function Contact() {
  return (
    <section
      className="sm:px-[8vw] md:px-[12vw] 2xl:px-[16vw] pt-[1in] xl:pt-[2in] pb-[1in] relative flex flex-col gap-16 xl:grid grid-cols-[5fr_4fr] overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col gap-16 h-max px-[8vw] sm:px-0">
        <Title />
        <FAQ />
      </div>
      <Form />
    </section>
  );
}
