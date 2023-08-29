import PrimaryButton from "@/components/PrimaryButton";
import SearchBar from "@/components/SearchBar";
import HashLink from "@/components/Header/components/HashLink";
import { Dict } from "@/dictionaries/dictionaries";
import ProjectRef from "./components/ProjectRef";
import { thumbnails } from "@/consts/home";

export default function Projects({ dict }: { dict: Dict["projects"] }) {
  return (
    <section
      className="padding py-[1in] flex flex-col items-center relative z-10 bg-background"
      id="work"
    >
      <div className="w-full xl:max-w-[90%] flex flex-col xl:grid grid-cols-[4fr_5fr] gap-16 xl:gap-32">
        <div className="flex flex-col gap-8 xl:sticky top-[25vh] h-max">
          <SearchBar
            sequence={[dict.searchBar[0], 4000, dict.searchBar[1], 4000, ""]}
          />
          <h2 className="text-[2rem] md:text-4xl xl:text-5xl w-full max-w-[10in] leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent">
            {dict.title}
          </h2>
          <p className="text-[#C4BAD3] font-medium text-sm md:text-base leading-relaxed">
            {dict.paragraph}
          </p>
          <HashLink to="contact" className="w-max">
            <PrimaryButton asChild>{dict.primary}</PrimaryButton>
          </HashLink>
        </div>
        <div className="flex flex-col gap-16">
          {dict.projectList.map((project, index) => (
            <ProjectRef
              {...project}
              thumbnail={thumbnails[index]}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
