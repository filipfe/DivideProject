import LogoutIcon from "@/assets/dashboard/LogoutIcon";
import PlusIcon from "@/assets/dashboard/PlusIcon";
import ProjectRef from "@/components/Dashboard/ProjectRef";
import { Project } from "@/types/dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });

  const { data: projects } = await supabase.from("projects").select("*");

  const unfinishedProjects =
    projects?.filter((project: Project) => project.status !== "finished") || [];

  return (
    <section className="min-h-screen bg-background py-[1.2in] xl:py-[1.6in] padding relative flex flex-col gap-8">
      <Link
        href="/dashboard/new-project"
        className="bg-dropdown fill-font hover:fill-white transition-colors hover:text-white border-[1px] border-[rgba(108,101,131,0.32)] rounded-lg py-5 px-10 w-max flex items-center gap-4"
      >
        <PlusIcon />
        Create new
      </Link>
      <div className="relative z-20 flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {projects?.map((project: Project) => (
          <ProjectRef {...project} key={project.id} />
        ))}
      </div>
      <form className="self-end" action="/auth/signout" method="post">
        <button
          className={`mt-4 font-medium hover:text-white text-p transition-colors fill-p hover:fill-white flex items-center gap-2`}
        >
          <LogoutIcon />
          Log out
        </button>
      </form>
    </section>
  );
}
