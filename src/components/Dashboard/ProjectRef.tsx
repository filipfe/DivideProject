import ArrowRight from "@/assets/dashboard/ArrowRight";
import CustomIcon from "@/assets/dashboard/CustomIcon";
import DesktopIcon from "@/assets/dashboard/DesktopIcon";
import MobileIcon from "@/assets/dashboard/MobileIcon";
import { Project } from "@/types/dashboard";
import Link from "next/link";
import Status from "./NewProject/Status";

export default function ProjectRef({
  id,
  title,
  description,
  status,
  type,
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
      <div className="flex items-center gap-4 flex-wrap justify-between">
        <p className="text-p text-sm font-medium">
          Status: <Status status={status} />
        </p>
        {type === "website" ? (
          <DesktopIcon />
        ) : type === "mobile_app" ? (
          <MobileIcon />
        ) : (
          <CustomIcon />
        )}
      </div>
    </Link>
  );
}
