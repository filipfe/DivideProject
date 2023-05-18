"use client";

import PrimaryButton from "@/components/PrimaryButton";
import ProjectsList from "./components/ProjectsList";
import SearchBar from "@/components/SearchBar";
import Star from "@/components/Star";

export default function Projects() {
  return (
    <section
      className="padding py-[1in] flex flex-col items-center relative"
      id="work"
    >
      <div className="w-full xl:max-w-[85%] flex flex-col xl:grid grid-cols-2 gap-16 xl:gap-32">
        <div className="flex flex-col gap-8 xl:sticky top-[20vh] h-max">
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
          <p className="text-[#C4BAD3] font-medium text-sm md:text-base leading-relaxed">
            Hop on a visual tour of our latest projects, showcasing our
            expertise in web development and design. Discover innovation,
            quality, and excellence in every step of our journey.
          </p>
          <div className="w-max">
            <PrimaryButton>View all work</PrimaryButton>
          </div>
        </div>
        <ProjectsList />
      </div>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Star position="top-[20%] left-[2rem]" />
        <Star position="bottom-[30%] hidden sm:flex left-[8%]" />
        <Star position="top-[20%] hidden sm:flex right-[2rem]" />
        <Star position="top-[40%] left-[30%]" height="6in" />
        <Star position="top-[50%] left-[12%]" width="6in" />
        <Star position="top-[65%] right-[44%]" height="6in" />
        <Star position="top-[60%] right-[20%]" height="6in" />
      </div>
    </section>
  );
}
