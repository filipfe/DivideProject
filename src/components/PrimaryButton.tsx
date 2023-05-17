import Image from "next/image";
import { anchorArrow } from "../assets/general";
import { ButtonProps } from "../types/button";

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  type = "submit",
}: ButtonProps) {
  const seoTitle = typeof children === "string" ? children : "Navigate";
  return (
    <div className="relative">
      <div className="absolute inset-0 border-[1px] border-[#7856FF]/20 rounded-lg pointer-events-none" />
      <button
        type={type}
        onClick={onClick}
        className={`bg-primary w-full sm:max-w-max justify-center py-3 px-6 shadow-primary_button flex items-center rounded-lg text-white text-sm font-semibold ${className}`}
      >
        {children}
        <Image
          height={18}
          width={12}
          className="w-auto ml-2"
          src={anchorArrow}
          alt={seoTitle}
          title={seoTitle}
        />
      </button>
    </div>
  );
}
