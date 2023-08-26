export default function BannerTitle({
  direction,
}: {
  direction: "left" | "right";
}) {
  const animationClass = [
    direction === "left" ? "animate-slide-left" : "animate-slide-right",
    direction === "left" ? "self-end" : "self-start",
  ].join(" ");

  return (
    <span
      className={`text-4xl select-none font-bold md:text-[4rem] opacity-20 leading-none md:leading-none ${animationClass}`}
    >
      DIVIDE PROJECT
    </span>
  );
}
