import Form from "./components/Form";
import Title from "./components/Title";
import FAQ from "./components/FAQ";
import { Dict } from "@/dictionaries/dictionaries";

export default function Contact({ dict }: { dict: Dict["contact"] }) {
  return (
    <section className="sm:px-[8vw] md:px-[12vw] 2xl:px-[16vw] pb-[1in] relative flex flex-col gap-16 xl:grid grid-cols-[5fr_4fr] overflow-hidden">
      <div className="flex flex-col gap-16 h-max px-[8vw] sm:px-0 pt-[1in] xl:pt-[1.6in]">
        <Title dict={dict.title} />
        <FAQ dict={dict.faq} />
      </div>
      <Form dict={dict.form} />
    </section>
  );
}
