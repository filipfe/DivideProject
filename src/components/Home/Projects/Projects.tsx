import PrimaryButton from "@/components/PrimaryButton";
import ProjectsList from "./components/ProjectsList";
import SearchBar from "@/components/SearchBar";

export default function Projects() {
  return (
    <section
      className="padding py-[1in] flex flex-col items-center relative"
      id="work"
    >
      <div className="w-full xl:max-w-[90%] flex flex-col xl:grid grid-cols-[4fr_5fr] gap-16 xl:gap-32">
        <div className="flex flex-col gap-8 xl:sticky top-[25vh] h-max">
          <SearchBar
            sequence={[
              "What kind of project would be ideal?",
              4000,
              "What do I want to achieve?",
              4000,
              "",
            ]}
          />
          <h2 className="text-[2rem] md:text-4xl xl:text-5xl w-full max-w-[8in] leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent">
            Quick journey of our latest projects
          </h2>
          <p className="text-[#C4BAD3] font-medium text-sm md:text-base leading-relaxed">
            Hop on a visual tour of our latest projects, showcasing our
            expertise in web development and design. Discover innovation and
            quality in every step of our journey.
          </p>
          <div className="w-max">
            <PrimaryButton>View all work</PrimaryButton>
          </div>
        </div>
        <ProjectsList />
      </div>
    </section>
  );
}
