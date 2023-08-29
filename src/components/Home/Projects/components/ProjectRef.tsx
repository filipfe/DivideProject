import Image from "next/image";
import { Project } from "../../../../types/projects";
import SecondaryButton from "../../../SecondaryButton";
import Link from "next/link";

type Props = {
  button: {
    text: string;
    disabled: boolean;
  };
};

export default function ProjectRef({
  title = "One of our latest projects",
  desc = "Lorem ipsum dolor sit amet consectetur. Eget enim adipiscing arcu lobortis tincidunt dictum elit. orem ipsum ",
  thumbnail,
  link,
  button,
}: Project & Props) {
  return (
    <article className={`flex flex-col gap-6`}>
      <figure className="service-header h-[3in] rounded-xl overflow-hidden relative">
        {thumbnail && (
          <Image
            fill
            sizes="(min-width: 1280px) 50vw, 85vw"
            className="object-cover"
            src={thumbnail}
            alt={title}
            title={title}
          />
        )}
        <figcaption className="absolute -z-10 opacity-0">{title}</figcaption>
      </figure>
      <div className="flex flex-col gap-2 relative z-10">
        <h3 className="text-primary font-semibold text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-[#C4BAD3] sm:text-sm text-[.8rem] leading-relaxed sm:leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      {button.disabled ? (
        <SecondaryButton disabled asChild>
          {button.text}
        </SecondaryButton>
      ) : (
        <Link target="_blank" href={link}>
          <SecondaryButton asChild>{button.text}</SecondaryButton>
        </Link>
      )}
    </article>
  );
}
