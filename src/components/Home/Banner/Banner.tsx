import BannerTitle from "./BannerTitle";

export default function Banner() {
  return (
    <section>
      <div className="bg-banner relative py-8">
        <div className="bg-banner-inner z-10 bg-clip-text flex flex-col gap-8 overflow-hidden mx-[8vw] md:mx-[12vw] 2xl:mx-[16vw]">
          <BannerTitle direction="left" />
          <BannerTitle direction="right" />
        </div>
      </div>
    </section>
  );
}
