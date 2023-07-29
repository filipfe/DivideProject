export default function Loading() {
  return (
    <section className="min-h-screen bg-background py-[1.2in] xl:py-[1.6in] padding relative flex flex-col gap-8">
      <div className="h-12 w-32 rounded-lg bg-loading" />
      <div className="relative z-20 flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        <div className="h-48 rounded-lg bg-loading" />
        <div className="h-48 rounded-lg bg-loading" />
        <div className="h-48 rounded-lg bg-loading" />
      </div>
      <div className="h-12 w-32 rounded-lg bg-loading self-end" />
    </section>
  );
}
