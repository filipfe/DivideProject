import { Project } from "@/types/dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: { id: number } }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!data) return null;

  const { title, description } = data as unknown as Project;

  return (
    <section className="min-h-screen padding flex flex-col gap-8 py-[2in]">
      <h1 className="text-white font-semibold text-4xl">{title}</h1>
      <p className="text-p">{description}</p>
    </section>
  );
}
