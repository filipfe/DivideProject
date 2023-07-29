import BottomLeft from "@/assets/pointers/BottomLeft";
import Top from "@/assets/pointers/Top";
import TopSideways from "@/assets/pointers/TopSideways";
import Pointer from "@/components/Pointer";
import Form from "@/components/SignIn/Form";

export default function SignIn() {
  return (
    <section className="min-h-screen bg-background py-[1.2in] xl:py-[1.6in] sm:px-[8vw] relative sm:flex justify-center items-center">
      <div className="flex flex-col sm:items-center relative z-20">
        <div className="flex flex-col gap-8 sm:bg-dropdown sm:border-[1px] border-[rgba(108,101,131,0.32)] sm:rounded-xl px-[8vw] sm:p-12 w-full max-w-[5in] relative">
          <h3 className="text-primary text-2xl font-semibold select-none">
            Sign in to your dashboard
          </h3>
          <Form />
          <Pointer
            pointerPosition="absolute -right-[1in] -bottom-12 hidden md:block"
            dotPosition="bottom-[-4px] left-[-4px]"
            svg={<BottomLeft />}
            delay={400}
          />
          <Pointer
            pointerPosition="absolute -left-[1in] -bottom-12 scale-x-[-1] hidden md:block"
            dotPosition="bottom-[-4px] left-[-4px]"
            svg={<BottomLeft />}
            delay={1200}
          />
          <Pointer
            pointerPosition="absolute -left-12 z-10 -top-12 hidden md:block"
            dotPosition="top-[-3px] right-[-3px]"
            svg={<TopSideways />}
            delay={2200}
          />
          <Pointer
            pointerPosition="absolute -right-12 z-10 -top-12 scale-x-[-1] hidden md:block"
            dotPosition="top-[-3px] right-[-3px]"
            svg={<TopSideways />}
            delay={800}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-10">
        <Pointer
          dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
          pointerPosition="top-[30%] left-[3rem] md:left-[20%] md:top-auto md:bottom-[1in]"
          svg={<Top />}
          delay={1200}
        />
        <Pointer
          dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
          pointerPosition="top-[30%] right-[3rem] md:right-[20%] md:top-auto md:bottom-[1in]"
          svg={<Top />}
          delay={400}
        />
        <Pointer
          dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
          pointerPosition="left-[15%] top-[30%] hidden md:block"
          svg={<Top />}
          delay={600}
        />
        <Pointer
          dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
          pointerPosition="right-[15%] top-[30%] hidden md:block"
          svg={<Top />}
          delay={1800}
        />
      </div>
    </section>
  );
}
