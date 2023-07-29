import { ButtonProps } from "../types/button";

export default function SecondaryButton({
  children,
  className,
  rotate,
  onClick,
  type,
}: ButtonProps & { rotate?: boolean }) {
  return (
    <div className="relative sm:max-w-max z-10">
      <div className="absolute inset-0 border-[1px] border-[#7856FF]/20 rounded-lg pointer-events-none" />
      <button
        type={type}
        onClick={onClick}
        className={`bg-secondary w-full sm:max-w-max justify-center py-[10px] px-6 shadow-secondary_button flex items-center gap-2 rounded-lg text-white text-sm font-medium ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
