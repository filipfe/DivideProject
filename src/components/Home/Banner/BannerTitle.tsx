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
    <h2
      className={`text-4xl font-bold text-transparent md:text-[4rem] animate-slide-in-right leading-none md:leading-none ${animationClass}`}
    >
      DIVIDE PROJECT
    </h2>
  );
}
