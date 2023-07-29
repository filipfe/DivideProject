import { InputProps } from "@/types/contact";
import { InputHTMLAttributes } from "react";

export default function Input(
  props: InputHTMLAttributes<HTMLInputElement> & InputProps
) {
  return (
    <label
      htmlFor={props.id}
      className="flex flex-col gap-2 cursor-pointer relative"
    >
      <span className="text-sm text-primary font-medium">{props.label}</span>
      <div className="relative cursor-text">
        <div className="bg-dropdown-active w-full h-[calc(28px+1em)] px-6 rounded-lg pointer-events-none border-[1px] border-[rgba(108,101,131,0.32)]" />
        <input
          {...props}
          className="absolute w-full px-6 top-3 bottom-3 z-10 font-medium placeholder:text-font/60 placeholder:font-normal bg-transparent border-none stroke-none outline-none"
        />
      </div>
    </label>
  );
}
