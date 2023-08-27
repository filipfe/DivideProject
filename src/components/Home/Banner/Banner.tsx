import BannerTitle from "./BannerTitle";

export default function Banner() {
  return (
    <section className="relative">
      <div className="bg-banner relative py-8 z-10 w-full">
        <div className="z-10 bg-clip-text flex flex-col gap-8 overflow-hidden mx-[8vw] md:mx-[12vw] 2xl:mx-[16vw]">
          <BannerTitle direction="left" />
          <BannerTitle direction="right" />
        </div>
      </div>
      <div className="bg-banner-inner absolute h-[calc(100%+2px)] w-full top-[-1px] bottom-[-1px]"></div>
    </section>
  );
}
