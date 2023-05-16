import BottomLeft from "../../assets/pointers/BottomLeft";
import SidewaysDiagonally from "../../assets/pointers/SidewaysDiagonally";
import Top from "../../assets/pointers/Top";
import Pointer from "../Pointer";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import Modal from "./Modal/Modal";

export default function Hero() {
  return (
    <section className="padding pt-[1.4in] md:pt-[1.8in] xl:pt-[2.2in] flex flex-col gap-12 min-h-screen items-center relative">
      <div className="flex flex-col items-center gap-6 relative">
        <h1 className="text-4xl md:text-5xl xl:text-[4rem] w-full max-w-[12in] text-center leading-tight sm:leading-tight md:leading-tight xl:leading-tight text-primary font-bold">
          Building{" "}
          <span className="relative inline-block text-primary">
            <div className="text-shadow bg-text_shadow absolute -z-10 -left-1 -right-[.5ch] -top-2 bottom-0" />
            Custom Web <span className="hidden sm:inline">Solutions</span>
          </span>{" "}
          <span className="inline sm:hidden">Solutions </span>
          that Drive Results
        </h1>
        <p className="text-p text-center font-medium text-sm sm:text-base xl:text-lg max-w-[75%]">
          Transform Your Business with Our Cutting-Edge Solutions
        </p>
        <div className="mt-4 flex flex-col sm:flex-row relative z-10 self-stretch sm:self-center mx-auto max-w-[3in] w-full sm:max-w-none sm:items-center gap-4 sm:gap-6 sm:w-max">
          <PrimaryButton>Hire us now</PrimaryButton>
          <SecondaryButton>View our work</SecondaryButton>
        </div>
        <Pointer
          pointerPosition="-left-[2.5in] -top-[3rem]"
          dotPosition="left-[-4px] top-[-4px]"
          svg={<SidewaysDiagonally />}
          delay={1000}
        />
        <Pointer
          pointerPosition="-right-[2.5in] -top-[3rem] scale-x-[-1]"
          dotPosition="left-[-4px] top-[-4px]"
          svg={<SidewaysDiagonally />}
          delay={1500}
        />
        <Pointer
          pointerPosition="absolute right-[1in] -bottom-6"
          dotPosition="bottom-[-4px] left-[-4px]"
          svg={<BottomLeft />}
          delay={400}
        />
        <Pointer
          pointerPosition="absolute left-[1in] -bottom-6 scale-x-[-1]"
          dotPosition="bottom-[-4px] left-[-4px]"
          svg={<BottomLeft />}
          delay={1200}
        />
      </div>
      <Modal />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="left-[1.6in] bottom-[1in]"
        svg={<Top />}
        delay={1200}
      />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="right-[1.6in] bottom-[1in]"
        svg={<Top />}
        delay={400}
      />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="left-[1in] top-[30%]"
        svg={<Top />}
        delay={600}
      />
      <Pointer
        dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
        pointerPosition="right-[1in] top-[30%]"
        svg={<Top />}
        delay={1800}
      />
    </section>
  );
}
