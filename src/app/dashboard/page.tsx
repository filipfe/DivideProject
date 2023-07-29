import ProjectRef from "@/components/Dashboard/ProjectRef";
import PrimaryButton from "@/components/PrimaryButton";
import { Project } from "@/types/dashboard";
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });

  const { data: projects } = await supabase.from("projects").select("*");

  async function logOut() {
    "use server";
    const supabase = createServerActionClient({ cookies });
    await supabase.auth.signOut();
    revalidatePath("/");
  }

  return (
    <section className="min-h-screen bg-background py-[1.2in] xl:py-[1.6in] padding relative flex flex-col gap-8">
      <div className="w-max">
        <PrimaryButton>Create new</PrimaryButton>
      </div>
      <div className="relative z-20 flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {projects?.map((project: Project) => (
          <ProjectRef {...project} key={project.id} />
        ))}
      </div>
      <form className="relative z-10" action={logOut}>
        <button>Log out</button>
      </form>
    </section>
  );
}
