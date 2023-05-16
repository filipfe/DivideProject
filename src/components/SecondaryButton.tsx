import { arrowDown } from "../assets/general";
import { ButtonProps } from "../types/button";

export default function SecondaryButton({
  children,
  className,
  onClick,
  type,
}: ButtonProps) {
  return (
    <div className="relative sm:max-w-max z-10">
      <div className="absolute inset-0 border-[1px] border-[#7856FF]/20 rounded-lg pointer-events-none" />
      <button
        type={type}
        onClick={onClick}
        className={`bg-secondary w-full sm:max-w-max justify-center py-3 px-6 shadow-secondary_button flex items-center rounded-lg text-white text-sm font-semibold ${className}`}
      >
        {children}
        <img className="max-h-[1.2em] ml-2" src={arrowDown} alt="" />
      </button>
    </div>
  );
}
