"use client";

import PrimaryButton from "@/components/PrimaryButton";
import ProjectsList from "./components/ProjectsList";
import SearchBar from "@/components/SearchBar";

export default function Projects() {
  return (
    <section className="padding py-[1in] flex flex-col items-center relative">
      <div className="w-full xl:max-w-[85%] flex flex-col xl:grid grid-cols-2 gap-32">
        <div className="flex flex-col gap-8 sticky top-[20vh] h-max">
          <SearchBar
            sequence={[
              "What kind of project would be ideal?",
              4000,
              "What do I want to achieve?",
              4000,
              "",
            ]}
          />
          <h2 className="text-3xl md:text-4xl xl:text-5xl w-full max-w-[8in] leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent">
            Quick journey of our latest projects
          </h2>
          <p className="text-[#C4BAD3] leading-relaxed">
            I'm really impressed with the quality of work that DivideProject
            provides. They have an incredible eye for design and their attention
            to detail is second to none.
          </p>
          <PrimaryButton>View all work</PrimaryButton>
        </div>
        <ProjectsList />
      </div>
    </section>
  );
}
