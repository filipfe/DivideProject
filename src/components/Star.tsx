import { StarProps } from "@/types/general";

export default function Star({
  position,
  width = "3in",
  height = "3in",
}: StarProps) {
  return (
    <div
      className={`absolute -z-10 flex items-center justify-center ${position}`}
    >
      <div style={{ width, height: 1 }} className="bg-star bg-center" />
      <div
        style={{ width: height, height: 1 }}
        className="bg-star bg-center rotate-90 absolute"
      />
    </div>
  );
}
