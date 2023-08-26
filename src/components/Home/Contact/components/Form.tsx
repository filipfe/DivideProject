"use client";

import { FormData } from "@/types/contact";
import { FormEvent, useEffect, useState } from "react";
import Input from "./Input";
import PrimaryButton from "@/components/PrimaryButton";
import Loader from "@/components/Loader";
import { TypeAnimation } from "react-type-animation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-hot-toast";
import Pointer from "@/components/Pointer";
import Top from "@/assets/pointers/Top";
import SidewaysDiagonally from "@/assets/pointers/SidewaysDiagonally";
import BottomLeft from "@/assets/pointers/BottomLeft";

export default function Form() {
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.from("messages").insert(formData);
    error ? toast.error("Try again later!") : setPopupVisible(true);
    setIsLoading(false);
  }
  return (
    <div className="flex flex-col gap-8 bg-dropdown border-y-[1px] sm:border-[1px] border-[rgba(108,101,131,0.32)] sm:rounded-xl px-[8vw] py-12 sm:p-12">
      <h3 className="text-primary text-xl font-semibold">
        <TypeAnimation
          sequence={[
            "Get in touch with us",
            4000,
            "Describe your idea",
            4000,
            "Describe your goals",
            4000,
            "Make your project real",
            4000,
            "",
          ]}
          repeat={Infinity}
        />
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:grid grid-cols-2">
          <Input
            name="contact"
            id="first-name"
            value={formData.first_name}
            label="First Name"
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, first_name: e.target.value }))
            }
          />
          <Input
            name="contact"
            id="last-name"
            value={formData.last_name}
            label="Last Name"
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, last_name: e.target.value }))
            }
          />
        </div>
        <Input
          name="contact"
          id="email"
          value={formData.email}
          label="Email"
          type="email"
          required
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label
          htmlFor="description"
          className="flex flex-col gap-2 cursor-pointer relative"
        >
          <span className="text-sm text-primary font-medium">Message</span>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg pointer-events-none border-[1px] border-[rgba(108,101,131,0.32)]" />
            <textarea
              className="py-3 px-6 bg-dropdown-active rounded-lg min-h-[1.2in] w-full outline-none"
              id="description"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
            />
          </div>
        </label>
        <div className="w-max mt-8">
          <PrimaryButton disabled={isLoading}>
            {isLoading ? <Loader /> : "Send"}
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
            Thank you for registering!
          </strong>
          <p className="text-primary font-medium !opacity-80 max-w-[5in] text-center leading-normal">
            We will review your order along with the message you provided and
            respond as soon as possible!
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
  );
}
