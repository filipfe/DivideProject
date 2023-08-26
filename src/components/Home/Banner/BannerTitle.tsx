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
      className={`text-4xl xl:text-8xl bg-banner-inner bg-clip-text text-transparent select-none font-bold md:text-[4rem] leading-none md:leading-none ${animationClass}`}
    >
      DIVIDE PROJECT
    </span>
  );
}
