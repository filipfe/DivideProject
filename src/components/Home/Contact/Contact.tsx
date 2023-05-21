import Star from "@/components/Star";
import Form from "./components/Form";
import Title from "./components/Title";
import FAQ from "./components/FAQ";

export default function Contact() {
  return (
    <section
      className="sm:px-[8vw] md:px-[12vw] 2xl:px-[16vw] pt-[1in] xl:pt-[2in] pb-[1in] relative flex flex-col gap-16 xl:grid grid-cols-[5fr_4fr]"
      id="contact"
    >
      <div className="flex flex-col gap-16 h-max px-[8vw] sm:px-0">
        <Title />
        <FAQ />
      </div>
      <Form />
      <Star position="top-[20%] left-[2rem]" />
      <Star position="bottom-[30%] hidden sm:flex left-[8%]" />
      <Star position="top-[20%] hidden sm:flex right-[2rem]" />
      <Star position="top-[40%] left-[30%]" height="6in" />
      <Star position="top-[60%] right-[20%]" height="6in" />
    </section>
  );
}
