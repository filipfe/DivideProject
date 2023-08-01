import Status from "@/components/Dashboard/NewProject/Status";
import MilestoneRef from "@/components/Dashboard/Project/MilestoneRef";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { Project } from "@/types/dashboard";
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

type Props = {
  params: { id: number };
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createServerActionClient({ cookies });
  const { data: project } = await supabase
    .from("projects")
    .select("title, description")
    .eq("id", params.id)
    .single();
  return {
    title: project?.title || "Dashboard | DivideProject",
    description: project?.description,
  };
}

export default async function Page({ params }: Props) {
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

  const { title, description, link, status } = project as unknown as Project;

  return (
    <section className="min-h-screen padding flex flex-col gap-24 py-[1.2in] md:py-[1.6in] xl:py-[2in] xl:grid grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2 font-medium">
          Status: <Status status={status} />
        </div>
        <h1 className="text-primary font-semibold text-4xl">{title}</h1>
        <p className="text-p leading-relaxed">{description}</p>
        <div className="flex flex-wrap w-full items-center gap-4">
          {link && status !== "pending" && (
            <Link href={link}>
              <PrimaryButton>Visit preview</PrimaryButton>
            </Link>
          )}
          {status !== "finished" && (
            <SecondaryButton>Request a report</SecondaryButton>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl text-primary font-semibold">
          Threads and milestones
        </h2>
        <div className="flex flex-col gap-8">
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
