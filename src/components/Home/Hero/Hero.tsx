import PrimaryButton from "@/components/PrimaryButton";
import BottomLeft from "../../../assets/pointers/BottomLeft";
import SidewaysDiagonally from "../../../assets/pointers/SidewaysDiagonally";
import Top from "../../../assets/pointers/Top";
import HashLink from "../../Header/components/HashLink";
import Pointer from "../../Pointer";
import SecondaryButton from "../../SecondaryButton";
import Modal from "../Modal/Modal";
import { Dict } from "@/dictionaries/dictionaries";

export default function Hero({ dict }: { dict: Dict["hero"] }) {
  return (
    <section className="padding pt-[1.4in] md:pt-[1.8in] xl:pt-[2.2in] flex flex-col gap-12 min-h-screen items-center relative overflow-hidden z-10 bg-background">
      <div className="flex flex-col items-center gap-6 relative">
        <h1 className="text-4xl md:text-[3rem] xl:text-[4rem] w-full max-w-[12in] text-center leading-tight sm:leading-tight md:leading-tight xl:leading-tight text-primary font-bold">
          {dict.title.prefix}{" "}
          <span className="relative inline-block text-primary min-w-max">
            <div className="text-shadow bg-text_shadow absolute -z-10 -left-1 -right-[.5ch] -top-2 -bottom-2" />
            {dict.title.markedLeft}{" "}
            <span className="hidden sm:inline">{dict.title.markedRight}</span>
          </span>{" "}
          <span className="inline sm:hidden">{dict.title.sufixLeft} </span>
          {dict.title.sufixRight}
        </h1>
        <p className="text-p text-center font-medium text-sm sm:text-base xl:text-lg max-w-[75%]">
          {dict.paragraph}
        </p>
        <div className="mt-4 flex flex-col sm:flex-row relative z-10 self-stretch sm:self-center mx-auto max-w-[3in] w-full sm:max-w-none sm:items-center gap-4 sm:gap-6 sm:w-max">
          <HashLink to="contact">
            <PrimaryButton asChild>{dict.primary}</PrimaryButton>
          </HashLink>
          <HashLink to="work">
            <SecondaryButton asChild>{dict.secondary}</SecondaryButton>
          </HashLink>
        </div>
        <Pointer
          pointerPosition="-left-[2.5in] -top-[3rem] hidden md:block"
          dotPosition="left-[-4px] top-[-4px]"
          svg={<SidewaysDiagonally />}
          delay={1000}
        />
        <Pointer
          pointerPosition="-right-[2.5in] -top-[3rem] scale-x-[-1] hidden md:block"
          dotPosition="left-[-4px] top-[-4px]"
          svg={<SidewaysDiagonally />}
          delay={1500}
        />
        <Pointer
          pointerPosition="absolute right-[1in] -bottom-6 hidden md:block"
          dotPosition="bottom-[-4px] left-[-4px]"
          svg={<BottomLeft />}
          delay={400}
        />
        <Pointer
          pointerPosition="absolute left-[1in] -bottom-6 scale-x-[-1] hidden md:block"
          dotPosition="bottom-[-4px] left-[-4px]"
          svg={<BottomLeft />}
          delay={1200}
        />
      </div>
      <Modal />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="top-[30%] left-[3rem] md:left-[1.6in] md:top-auto md:bottom-[1in]"
        svg={<Top />}
        delay={1200}
      />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="top-[30%] right-[3rem] md:right-[1.6in] md:top-auto md:bottom-[1in]"
        svg={<Top />}
        delay={400}
      />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="left-[1in] top-[30%] hidden md:block"
        svg={<Top />}
        delay={600}
      />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="right-[1in] top-[30%] hidden md:block"
        svg={<Top />}
        delay={1800}
      />
    </section>
  );
}
