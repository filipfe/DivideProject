"use client";

import { useRef, useState, useTransition, useEffect } from "react";
import Input from "./Input";
import PrimaryButton from "@/components/PrimaryButton";
import Loader from "@/components/Loader";
import { TypeAnimation } from "react-type-animation";
import Pointer from "@/components/Pointer";
import Top from "@/assets/pointers/Top";
import SidewaysDiagonally from "@/assets/pointers/SidewaysDiagonally";
import BottomLeft from "@/assets/pointers/BottomLeft";
import { sendMail } from "@/actions/contact";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Dict } from "@/dictionaries/dictionaries";

export default function Form({ dict }: { dict: Dict["contact"]["form"] }) {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>();
  const wrapperRef = useRef<HTMLDivElement>();
  const { push } = useRouter();
  const [popupVisible, setPopupVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!wrapperRef.current) return;
    const section = searchParams.get("section");
    if (section === "contact") {
      wrapperRef.current.scrollIntoView({ behavior: "smooth" });
      push("/", { scroll: false });
    }
  }, [wrapperRef.current]);

  return (
    <div
      ref={(ref) => ref && (wrapperRef.current = ref)}
      className="pt-[1in] xl:pt-[1.6in]"
      id="contact"
    >
      <div className="flex flex-col gap-8 bg-dropdown border-y-[1px] sm:border-[1px] border-[rgba(108,101,131,0.32)] sm:rounded-xl px-[8vw] py-12 sm:p-12">
        <h3 className="text-primary text-xl font-semibold">
          <TypeAnimation
            sequence={[
              dict.searchBar[0],
              4000,
              dict.searchBar[1],
              4000,
              dict.searchBar[2],
              4000,
              dict.searchBar[3],
              4000,
              "",
            ]}
            repeat={Infinity}
          />
        </h3>
        <form
          ref={(ref) => ref && (formRef.current = ref)}
          action={(data) =>
            startTransition(async () => {
              const resp = await sendMail(data);
              if (resp.status === "success") {
                setPopupVisible(true);
                formRef.current?.reset();
              } else {
                console.log(resp.error);
                toast.error("An error occured!");
              }
            })
          }
          className="flex flex-col gap-4 scroll-p-[4in]"
        >
          <div className="flex flex-col gap-4 sm:grid grid-cols-2">
            <Input id="first-name" name="first-name" required>
              {dict.fields.firstName}
            </Input>
            <Input id="last-name" name="last-name" required>
              {dict.fields.lastName}
            </Input>
          </div>
          <Input id="email" name="email" type="email" required>
            {dict.fields.email}
          </Input>
          <label
            htmlFor="description"
            className="flex flex-col gap-2 cursor-pointer relative"
          >
            <span className="text-sm text-primary font-medium">
              {dict.fields.message}
            </span>
            <div className="relative">
              <div className="absolute inset-0 rounded-lg pointer-events-none border-[1px] border-[rgba(108,101,131,0.32)]" />
              <textarea
                className="py-3 px-6 bg-dropdown-active rounded-lg min-h-[1.2in] w-full outline-none"
                id="description"
                name="message"
                required
              />
            </div>
          </label>
          <div className="w-max mt-8">
            <PrimaryButton disabled={isPending}>
              {isPending ? <Loader /> : dict.fields.send}
            </PrimaryButton>
          </div>
        </form>
        <div
          className={`bg-background fixed inset-0 h-full flex items-center justify-center z-50 transition-opacity overflow-hidden ${
            popupVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-8 items-center relative bg-dropdown border-y-[1px] sm:border-[1px] border-[rgba(108,101,131,0.32)] sm:rounded-xl px-[8vw] py-12 sm:p-12">
            <strong className="text-3xl text-primary text-center">
              {dict.success.title}
            </strong>
            <p className="text-primary font-medium !opacity-80 max-w-[5in] text-center leading-normal">
              {dict.success.paragraph}
            </p>
            <PrimaryButton onClick={() => setPopupVisible(false)}>
              Cool!
            </PrimaryButton>
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
              pointerPosition="absolute right-[-2in] -bottom-16 hidden md:block"
              dotPosition="bottom-[-4px] left-[-4px]"
              svg={<BottomLeft />}
              delay={400}
            />
            <Pointer
              pointerPosition="absolute left-[-2in] -bottom-16 scale-x-[-1] hidden md:block"
              dotPosition="bottom-[-4px] left-[-4px]"
              svg={<BottomLeft />}
              delay={1200}
            />
          </div>

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
        </div>
      </div>
    </div>
  );
}
