"use client";

import { useState, useEffect } from "react";
import PrimaryButton from "../../PrimaryButton";
import HashLink from "./HashLink";
import { usePathname } from "next/navigation";
import { Dict } from "@/dictionaries/dictionaries";

const lineStyle = "h-[3px] w-full transition rounded-xl";

const Navbar = ({ dict }: { dict: Dict["navigation"] }) => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`bg-[#000000] absolute inset-0 w-screen h-screen md:hidden transition-opacity ${
          active
            ? "opacity-40 z-10 md:-z-50 md:pointer-events-none"
            : "opacity-0 -z-50 pointer-events-none"
        }`}
      />
      <div
        className={`flex flex-col md:flex-row items-end bg-background md:bg-transparent gap-4 md:gap-8 pt-[1.4in] md:pt-0 text-sm font-medium z-50 absolute px-[8vw] md:px-0 top-0 md:relative left-full transition-transform ${
          active && "-translate-x-full md:translate-x-0"
        } md:left-auto h-screen md:h-full md:items-center w-max`}
      >
        <HashLink to="services">{dict.services}</HashLink>
        <HashLink to="work">{dict.work}</HashLink>
        <HashLink to="opinions">{dict.opinions}</HashLink>
        <HashLink to="contact">
          <PrimaryButton asChild>{dict.primary}</PrimaryButton>
        </HashLink>
      </div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className="burger flex flex-col relative z-50 md:hidden h-5 w-8 justify-between cursor-pointer"
      >
        <div
          className={`transition-all bg-primary ${lineStyle} ${
            active
              ? "absolute top-[50%] translate-y-[-50%] rotate-45 max-w-full"
              : "max-w-[60%]"
          }`}
        />
        <div
          className={`transition-opacity bg-primary ${lineStyle} ${
            active ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`transition-all bg-primary ${lineStyle} ${
            active
              ? "absolute top-[50%] translate-y-[-50%] -rotate-45 max-w-full"
              : "max-w-[60%] ml-auto"
          }`}
        />
      </div>
    </>
  );
};

export default Navbar;
