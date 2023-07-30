export default function Loading() {
  return (
    <section className="min-h-screen padding flex flex-col gap-24 py-[1.2in] md:py-[1.6in] xl:py-[2in] xl:grid grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-8">
        <div className="h-12 w-full rounded-lg bg-loading" />
        <div className="flex flex-col gap-4">
          <div className="h-6 w-[80%] rounded-lg bg-loading" />
          <div className="h-6 w-[75%] rounded-lg bg-loading" />
          <div className="h-6 w-[95%] rounded-lg bg-loading" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-12 w-36 rounded-lg bg-loading" />
          <div className="h-12 w-36 rounded-lg bg-loading" />
        </div>
      </div>
      <div className="relative z-20 flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        <div className="h-8 w-[60%] rounded-lg bg-loading" />
        <div className="h-48 rounded-lg bg-loading" />
        <div className="h-48 rounded-lg bg-loading" />
        <div className="h-48 rounded-lg bg-loading" />
      </div>
    </section>
  );
}
