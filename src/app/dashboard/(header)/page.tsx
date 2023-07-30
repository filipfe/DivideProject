import LogoutIcon from "@/assets/dashboard/LogoutIcon";
import PlusIcon from "@/assets/dashboard/PlusIcon";
import ProjectRef from "@/components/Dashboard/ProjectRef";
import Star from "@/components/Star";
import { Project } from "@/types/dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });

  const { data: projects } = await supabase.from("projects").select("*");

  return (
    <section
      className={`min-h-screen bg-background padding relative ${
        projects?.length == 0
          ? "sm:flex flex-col justify-center items-center py-[1.2in] sm:py-0"
          : "py-[1.2in] xl:py-[1.6in]"
      }`}
    >
      {projects?.length == 0 ? (
        <div className="flex flex-col gap-8 items-center justify-center relative z-10">
          <h1 className="text-3xl text-center text-white font-semibold">
            Seems like you don't have any projects yet.
          </h1>
          <Link
            href="/dashboard/new-project"
            className="bg-dropdown fill-font hover:fill-white transition-colors hover:text-white border-[1px] border-[rgba(108,101,131,0.32)] rounded-lg py-5 px-10 w-max flex items-center gap-4"
          >
            <PlusIcon />
            Create new
          </Link>
          <form action="/auth/signout" method="post">
            <button
              className={`mt-4 font-medium hover:text-white text-p transition-colors fill-p hover:fill-white flex items-center gap-2`}
            >
              <LogoutIcon />
              Log out
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-8 relative z-10">
          <h1 className="text-3xl text-white font-semibold">Dashboard</h1>
          <div className="relative z-20 flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
            {projects?.map((project: Project) => (
              <ProjectRef {...project} key={project.id} />
            ))}
            <Link
              className="rounded-lg bg-[#7856FF]/40 hover:bg-[#7856FF]/50 transition-colors border-[1px] border-[#7856FF]/20 flex items-center justify-center gap-4 text-white font-medium fill-white"
              href="/dashboard/new-project"
            >
              <PlusIcon />
              Create new
            </Link>
          </div>
          <form className="self-end" action="/auth/signout" method="post">
            <button
              className={`mt-4 font-medium hover:text-white text-p transition-colors fill-p hover:fill-white flex items-center gap-2`}
            >
              <LogoutIcon />
              Log out
            </button>
          </form>
        </div>
      )}
      <div className="fixed inset-0">
        <Star position="top-[20%] left-[2rem]" width="2in" />
        <Star position="bottom-[30%] hidden sm:flex left-[8%]" />
        <Star position="top-[20%] hidden sm:flex right-[2rem]" />
        <Star position="top-[60%] right-[20%]" height="6in" />
      </div>
    </section>
  );
}
