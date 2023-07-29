import Status from "@/components/Dashboard/NewProject/Status";
import MilestoneRef from "@/components/Dashboard/Project/MilestoneRef";
import SecondaryButton from "@/components/SecondaryButton";
import { Project } from "@/types/dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: number } }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.id)
    .single();

  const { data: milestones } = await supabase
    .from("milestones")
    .select("*")
    .eq("project_id", params.id)
    .order("created_at", { ascending: false });

  if (!project) return null;

  const { title, description, status } = project as unknown as Project;

  return (
    <section className="min-h-screen padding flex flex-col gap-8 py-[2in]">
      <div className="flex items-center gap-4 flex-wrap justify-between">
        <h1 className="text-primary font-semibold text-4xl">{title}</h1>
        <div className="flex items-center gap-4 font-medium">
          Status: <Status status={status} />
        </div>
      </div>
      <p className="text-p">{description}</p>
      <SecondaryButton>Request a report</SecondaryButton>
      <div className="flex flex-col gap-8 mt-16">
        <h2 className="text-2xl text-primary font-semibold">
          Threads and milestones
        </h2>
        <div className="flex flex-col gap-8 sm:grid grid-cols-2">
          {milestones?.length == 0 ? (
            <span className="text-p font-medium text-sm">
              Nothing has been found
            </span>
          ) : (
            milestones?.map((milestone) => (
              <MilestoneRef {...milestone} key={milestone.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
