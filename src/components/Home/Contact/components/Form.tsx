"use client";

import { FormData } from "@/types/contact";
import { FormEvent, useState } from "react";
import Input from "./Input";
import PrimaryButton from "@/components/PrimaryButton";
import Loader from "@/components/Loader";
import { TypeAnimation } from "react-type-animation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-hot-toast";

export default function Form() {
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("messages").insert(formData);
    console.log(error?.message);
    error
      ? toast.error("Try again later!")
      : toast.success("Message has been sent!");
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
              className="py-3 px-6 bg-dropdown-active rounded-lg min-h-[1.2in] w-full"
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
          {isLoading ? <Loader /> : <PrimaryButton>Send message</PrimaryButton>}
        </div>
      </form>
    </div>
  );
}
