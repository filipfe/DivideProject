import { Project } from "../../../../types/projects";
import SecondaryButton from "../../../SecondaryButton";

export default function ProjectRef({
  title = "One of our latest projects",
  desc = "Lorem ipsum dolor sit amet consectetur. Eget enim adipiscing arcu lobortis tincidunt dictum elit. orem ipsum ",
}: Project) {
  return (
    <div className={`flex flex-col gap-6`}>
      <div className="service-header h-[1.6in]" />
      <div className="flex flex-col gap-2 relative z-10">
        <h3 className="text-primary font-semibold text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-[#C4BAD3] sm:text-sm text-[.8rem] leading-relaxed sm:leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      <SecondaryButton>See our magic</SecondaryButton>
    </div>
  );
}
