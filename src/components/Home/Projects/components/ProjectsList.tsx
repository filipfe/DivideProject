import { projects } from "@/consts/home";
import ProjectRef from "./ProjectRef";

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-16">
      {projects.map((project) => (
        <ProjectRef {...project} key={project.title} />
      ))}
    </div>
  );
}
