import ArrowRight from "@/assets/dashboard/ArrowRight";
import { Project } from "@/types/dashboard";
import Link from "next/link";

export default function ProjectRef({
  id,
  title,
  description,
  status,
}: Project) {
  return (
    <Link
      href={`/dashboard/${id}`}
      className="flex flex-col gap-8 bg-dropdown border-[1px] border-[rgba(108,101,131,0.32)] rounded-lg p-12 w-full group"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-white font-semibold">{title}</h2>
        <div className="transition-transform duration-300 ease-out group-hover:translate-x-2">
          <ArrowRight />
        </div>
      </div>
      <p className="text-p text-sm">{description}</p>
      <p className="text-p text-sm font-medium">
        Status:{" "}
        <span
          className={
            status === "pending"
              ? "text-yellow-600"
              : status === "finished"
              ? "text-green-600"
              : "text-blue-600"
          }
        >
          {status.charAt(0).toUpperCase() +
            status.substring(1).split("_").join(" ")}
        </span>
      </p>
    </Link>
  );
}
