"use client";

import { ButtonProps } from "../types/button";

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  type = "submit",
  asChild,
  disabled,
}: ButtonProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 border-[1px] border-[#7856FF]/20 rounded-lg pointer-events-none" />
      {asChild ? (
        <div
          className={`bg-[#7856FF]/40 hover:bg-[#7856FF]/60 transition-all w-full sm:max-w-max justify-center gap-2 py-[10px] px-6 flex items-center rounded-lg text-white text-sm font-medium ${
            disabled ? "opacity-60" : "opacity-100"
          } ${className}`}
        >
          {children}
        </div>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`bg-[#7856FF]/40 transition-all w-full sm:max-w-max justify-center gap-2 py-[10px] px-6 flex items-center rounded-lg text-white text-sm font-medium ${
            disabled ? "opacity-60" : "opacity-100 hover:bg-[#7856FF]/60"
          } ${className}`}
        >
          {children}
        </button>
      )}
    </div>
  );
}
