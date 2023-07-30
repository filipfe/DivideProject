import Star from "@/components/Star";

export default function Loading() {
  return (
    <section className="min-h-screen bg-background py-[1.2in] xl:py-[1.6in] padding relative flex flex-col gap-8">
      <div className="h-12 w-[30%] rounded-lg bg-loading" />
      <div className="relative z-20 flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        <div className="h-56 rounded-lg bg-loading" />
        <div className="h-56 rounded-lg bg-loading" />
        <div className="h-56 rounded-lg bg-loading" />
        <div className="h-56 rounded-lg bg-loading" />
        <div className="h-56 rounded-lg bg-loading" />
        <div className="h-56 rounded-lg bg-loading" />
      </div>
      <div className="h-12 w-32 rounded-lg bg-loading self-end" />
      <div className="fixed inset-0">
        <Star position="top-[20%] left-[2rem]" width="2in" />
        <Star position="bottom-[30%] hidden sm:flex left-[8%]" />
        <Star position="top-[20%] hidden sm:flex right-[2rem]" />
        <Star position="top-[60%] right-[20%]" height="6in" />
      </div>
    </section>
  );
}
