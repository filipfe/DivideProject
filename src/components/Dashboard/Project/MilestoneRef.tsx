import { Milestone } from "@/types/dashboard";
import Link from "next/link";

export default function MilestoneRef({
  description,
  link,
  category,
  created_at,
}: Milestone) {
  return (
    <div className="flex flex-col gap-6 bg-dropdown border-[1px] border-[rgba(108,101,131,0.32)] rounded-lg p-10 w-full group">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="flex items-center gap-2 font-medium text-white text-sm">
          Category:{" "}
          <span className="text-[#7856FF]">
            {category === "design"
              ? "Design"
              : category === "backend"
              ? "Back-End"
              : "Front-End"}
          </span>
        </span>
        {created_at && (
          <p className="text-sm text-white font-medium flex items-center gap-2">
            <span>{new Date(created_at).toLocaleDateString("default")}</span>
          </p>
        )}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-start gap-4">
          <div className="h-4 w-4 rounded-full bg-[#7856FF]/80" />
          <p className="text-p font-medium">{description}</p>
        </div>
      </div>
      {link && (
        <p className="font-medium text-white text-sm">
          Update available at:{" "}
          <Link className="text-blue-400 underline" href={link}>
            {link}
          </Link>
        </p>
      )}
    </div>
  );
}
