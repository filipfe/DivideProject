import { ButtonProps } from "../types/button";

export default function SecondaryButton({
  children,
  className,
  onClick,
  type,
  disabled,
  asChild,
}: ButtonProps) {
  return (
    <div
      className={`${
        disabled ? "opacity-80" : "opacity-100"
      } relative sm:max-w-max rounded-lg overflow-hidden group`}
    >
      <div className="absolute inset-0 border-[1px] z-10 border-[#7856FF]/20 rounded-lg pointer-events-none" />
      {asChild ? (
        <div
          className={`w-full select-none sm:max-w-max z-30 relative justify-center py-[10px] px-6 shadow-secondary_button flex items-center gap-2 rounded-lg text-white text-sm font-medium ${className}`}
        >
          {children}
        </div>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`w-full sm:max-w-max select-none z-30 relative justify-center py-[10px] px-6 shadow-secondary_button flex items-center gap-2 rounded-lg text-white text-sm font-medium ${className}`}
        >
          {children}
        </button>
      )}
      {!disabled && (
        <div className="bg-background group-hover:bg-[#7856FF]/20 duration-300 -z-10 absolute inset-0 h-full w-full group-hover:z-20" />
      )}
    </div>
  );
}
