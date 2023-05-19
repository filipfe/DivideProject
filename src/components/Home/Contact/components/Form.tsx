"use client";

import { FormData } from "@/types/contact";
import { useState } from "react";
import Input from "./Input";
import { CONTACT_FIELDS } from "@/consts/contact";
import PrimaryButton from "@/components/PrimaryButton";
import { TypeAnimation } from "react-type-animation";

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    budget: "",
    description: "",
  });

  return (
    <div className="flex flex-col gap-8 bg-dropdown border-[1px] border-[rgba(108,101,131,0.32)] rounded-xl p-12">
      <h3 className="text-primary text-xl font-semibold">
        <TypeAnimation
          repeat={Infinity}
          sequence={[
            "Get in touch with us",
            3000,
            "Describe your idea",
            3000,
            "Describe your goals",
            3000,
            "Make your project real",
            3000,
            "",
          ]}
        />
      </h3>
      <form className="flex flex-col gap-4">
        {CONTACT_FIELDS.map((field) => (
          <Input
            name="contact"
            id={field.name}
            label={`${field.label}${field.isOptional ? " (optional)" : ""}`}
            key={field.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
            }
          />
        ))}
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
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
        </label>
        <div className="w-max mt-8">
          <PrimaryButton>Send message</PrimaryButton>
        </div>
      </form>
    </div>
  );
}
