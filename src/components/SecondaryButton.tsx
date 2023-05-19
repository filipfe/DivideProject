import Image from "next/image";
import { arrowDown } from "../assets/general";
import { ButtonProps } from "../types/button";

export default function SecondaryButton({
  children,
  className,
  rotate,
  onClick,
  type,
}: ButtonProps & { rotate?: boolean }) {
  const seoTitle = typeof children === "string" ? children : "Navigate";
  return (
    <div className="relative sm:max-w-max z-10">
      <div className="absolute inset-0 border-[1px] border-[#7856FF]/20 rounded-lg pointer-events-none" />
      <button
        type={type}
        onClick={onClick}
        className={`bg-secondary w-full sm:max-w-max justify-center py-[10px] px-6 shadow-secondary_button flex items-center rounded-lg text-white text-sm font-medium ${className}`}
      >
        {children}
        <Image
          height={18}
          width={12}
          className={`w-auto ml-2 transition-transform ${
            rotate ? "rotate-180" : "rotate-0"
          }`}
          src={arrowDown}
          alt={seoTitle}
          title={seoTitle}
        />
      </button>
    </div>
  );
}
