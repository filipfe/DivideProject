import Image from "next/image";
import { Project } from "../../../../types/projects";
import SecondaryButton from "../../../SecondaryButton";
import Link from "next/link";

export default function ProjectRef({
  title = "One of our latest projects",
  desc = "Lorem ipsum dolor sit amet consectetur. Eget enim adipiscing arcu lobortis tincidunt dictum elit. orem ipsum ",
  thumbnail,
  link,
}: Project) {
  return (
    <div className={`flex flex-col gap-6`}>
      <div className="service-header h-[2.5in] rounded-xl overflow-hidden relative">
        {thumbnail && (
          <Image
            fill
            sizes="(min-width: 1280px) 50vw, 85vw"
            className="object-cover opacity-75"
            src={thumbnail}
            alt={title}
            title={title}
          />
        )}
      </div>
      <div className="flex flex-col gap-2 relative z-10">
        <h3 className="text-primary font-semibold text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-[#C4BAD3] sm:text-sm text-[.8rem] leading-relaxed sm:leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      <Link target="_blank" href={link}>
        <SecondaryButton>See our magic</SecondaryButton>
      </Link>
    </div>
  );
}
