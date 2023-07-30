import { ButtonProps } from "../types/button";

export default function SecondaryButton({
  children,
  className,
  onClick,
  type,
}: ButtonProps) {
  return (
    <div className="relative sm:max-w-max rounded-lg overflow-hidden group">
      <div className="absolute inset-0 border-[1px] z-10 border-[#7856FF]/20 rounded-lg pointer-events-none" />
      <button
        type={type}
        onClick={onClick}
        className={`w-full sm:max-w-max z-30 relative justify-center py-[10px] px-6 shadow-secondary_button flex items-center gap-2 rounded-lg text-white text-sm font-medium ${className}`}
      >
        {children}
      </button>
      <div className="bg-background group-hover:bg-[#7856FF]/20 duration-300 -z-10 absolute inset-0 h-full w-full group-hover:z-20" />
    </div>
  );
}
