"use client";

import Control from "react-control-js";

export default function Title() {
  return (
    <Control
      ease="ease-out"
      opacity={1}
      onScroll
      y={40}
      element={
        <h2 className="text-[2rem] md:text-4xl xl:text-5xl w-full max-w-[6in] leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent">
          Let’s craft something nice{" "}
          <span className="relative inline-block text-primary min-w-max">
            <div className="text-shadow bg-text_shadow absolute -z-10 -left-1 -right-[.5ch] -top-2 -bottom-2" />
            together
          </span>
        </h2>
      }
    />
  );
}
