import { Service } from "@/types/services";

export default function ServiceRef({ title, desc, decorator }: Service) {
  const Decorator = () => decorator;
  return (
    <div className="flex flex-col gap-4 pt-20 service relative">
      <div className="flex items-center gap-2 py-[14px] px-8 absolute top-0 left-0 right-0 w-full service-header">
        <div className="bg-[#837AA4] h-3 w-3 rounded-full" />
        <div className="bg-[#837AA4] h-3 w-3 rounded-full" />
        <div className="bg-[#837AA4] h-3 w-3 rounded-full" />
      </div>
      <h3 className="text-3xl w-min font-semibold text-primary leading-snug px-8">
        {title}
      </h3>
      <p className="leading-relaxed font-medium text-sm px-8">{desc}</p>
      <div className="service-back max-w-[85%] pt-6 pr-6 mt-8">
        <div className="h-[2in] service-fore rounded-xl p-6">
          <Decorator />
        </div>
      </div>
    </div>
  );
}
