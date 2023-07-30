"use client";

import ArrowDown from "@/assets/dashboard/ArrowDown";
import Top from "@/assets/pointers/Top";
import TopSideways from "@/assets/pointers/TopSideways";
import Loader from "@/components/Loader";
import Pointer from "@/components/Pointer";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { newProjectSteps } from "@/consts/dashboard";
import { NewProjectContext } from "@/context/NewProjectContext";
import { AuthContext } from "@/providers/AuthProvider";
import { Project } from "@/types/dashboard";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

export default function Page() {
  const { user } = useContext(AuthContext);
  const supabase = createClientComponentClient();
  const direction = useRef<"backwards" | "forwards">("forwards");
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const [newProject, setNewProject] = useState<Project>({
    id: 0,
    title: "",
    description: "",
    link: "",
    status: "pending",
  });

  async function saveProject() {
    const { id, ...project } = newProject;
    const { error } = await supabase
      .from("projects")
      .insert({ ...project, user_id: user.id });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Your project has been saved!");
    }
    router.push("/dashboard");
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    direction.current = "forwards";
    wrapperRef.current.ontransitionend = handleStepChange;
    wrapperRef.current.style.opacity = "0";
  };

  const handleStepBack = () => {
    direction.current = "backwards";
    wrapperRef.current.ontransitionend = handleStepChange;
    wrapperRef.current.style.opacity = "0";
  };

  const handleStepChange = (e: TransitionEvent) => {
    if (wrapperRef.current && wrapperRef.current !== (e.target as Node)) return;
    direction.current === "forwards"
      ? setIndex((prev) => prev + 1)
      : setIndex((prev) => (prev <= 0 ? 0 : prev - 1));
    wrapperRef.current.ontransitionend = null;
    wrapperRef.current.style.opacity = "1";
    if (index + 1 >= newProjectSteps.length && direction.current === "forwards")
      saveProject();
  };

  useEffect(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.opacity = "1";
  }, [wrapperRef.current]);

  const step = newProjectSteps[index];

  return (
    <NewProjectContext.Provider value={{ newProject, setNewProject }}>
      <section className="min-h-screen padding flex flex-col gap-8 py-[2in] sm:justify-center sm:items-center relative">
        {step ? (
          <div
            ref={wrapperRef}
            className="transition-opacity opacity-0 duration-500 w-full max-w-[5in] relative z-20"
          >
            <h1 className="font-semibold text-4xl text-white mb-8">
              {step.title}
            </h1>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <step.Field />
              <div className="self-end flex items-center gap-4">
                {index > 0 && (
                  <SecondaryButton type="button" onClick={handleStepBack}>
                    <div className="rotate-90">
                      <ArrowDown />
                    </div>
                    Back
                  </SecondaryButton>
                )}
                <PrimaryButton>
                  {index + 1 >= newProjectSteps.length
                    ? "Create project"
                    : "Next"}
                </PrimaryButton>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center relative z-20">
            <p className="text-p font-medium">Saving your project</p>
            <Loader />
          </div>
        )}
        <div className="absolute z-10 inset-0 w-full h-full">
          <Pointer
            dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
            pointerPosition="top-[30%] left-[3rem] md:left-[20%] md:top-auto md:bottom-[1in]"
            svg={<Top />}
            delay={1200}
          />
          <Pointer
            dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
            pointerPosition="top-[30%] right-[3rem] md:right-[20%] md:top-auto md:bottom-[1in]"
            svg={<Top />}
            delay={400}
          />
          <Pointer
            dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
            pointerPosition="left-[15%] top-[30%] hidden md:block"
            svg={<Top />}
            delay={600}
          />
          <Pointer
            dotPosition="left-[50%] translate-x-[-50%] top-[-3px]"
            pointerPosition="right-[15%] top-[30%] hidden md:block"
            svg={<Top />}
            delay={1800}
          />
          <Pointer
            pointerPosition="absolute left-[25%] z-10 top-[15%] hidden md:block"
            dotPosition="top-[-3px] right-[-3px]"
            svg={<TopSideways />}
            delay={2200}
          />
          <Pointer
            pointerPosition="absolute right-[25%] z-10 top-[15%] scale-x-[-1] hidden md:block"
            dotPosition="top-[-3px] right-[-3px]"
            svg={<TopSideways />}
            delay={800}
          />
        </div>
      </section>
    </NewProjectContext.Provider>
  );
}
