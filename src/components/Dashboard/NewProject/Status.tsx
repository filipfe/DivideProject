import { Project } from "@/types/dashboard";
import { HTMLProps } from "react";

export default function Status({
  status,
  ...props
}: Pick<Project, "status"> & HTMLProps<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={`${
        status === "pending"
          ? "text-yellow-600"
          : status === "finished"
          ? "text-green-500"
          : "text-[#7856FF]/80"
      } ${props.className}`}
    >
      {status.charAt(0).toUpperCase() +
        status.substring(1).split("_").join(" ")}
    </span>
  );
}
