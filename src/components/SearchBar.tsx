"use client";

import { search } from "@/assets/general";
import { TypeAnimation } from "react-type-animation";

export default function SearchBar({
  sequence,
}: {
  sequence: (string | number)[];
}) {
  return (
    <div
      style={{ backgroundImage: `url(${search.src})` }}
      className="bg-[1.4rem_center] bg-no-repeat relative pl-14 py-3 px-6 text-[#B8B5C3] font-semibold text-sm w-max"
    >
      <TypeAnimation sequence={sequence} repeat={Infinity} />
      <div className="absolute inset-0 bg-transparent border-[#393446] border-[1px] rounded-2xl  z-10" />
      <div className="absolute inset-0 bg-neutral rounded-2xl -z-10" />
    </div>
  );
}
