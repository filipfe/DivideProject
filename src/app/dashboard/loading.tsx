export default function Loading() {
  return (
    <section className="min-h-screen bg-background py-[1.2in] xl:py-[1.6in] padding relative flex flex-col gap-8">
      <div className="h-8 w-16 rounded-lg bg-loading" />
      <div className="relative z-20 flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        <div className="h-40 w-[350px] rounded-lg bg-loading" />
        <div className="h-40 w-[350px] rounded-lg bg-loading" />
        <div className="h-40 w-[350px] rounded-lg bg-loading" />
      </div>
    </section>
  );
}
