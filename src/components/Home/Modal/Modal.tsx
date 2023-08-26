"use client";

import TopSideways from "../../../assets/pointers/TopSideways";
import { linesOfCode } from "../../../consts/home";
import Pointer from "../../Pointer";
import BoxGrid from "./BoxGrid";
import Control from "react-control-js";
import { LineOfCode } from "./LineOfCode";

export default function Modal() {
  return (
    <div className="relative mt-8 self-stretch w-full max-w-[12in] mx-auto">
      <Control
        className="min-w-full"
        ease="ease-out"
        opacity={1}
        y={40}
        element={
          <div className="relative opacity-50">
            <div className="bg-[linear-gradient(65.29deg,#141127_15.4%,#110D21_104.13%)] backdrop-blur-md pb-[1in] rounded-3xl min-h-[2in] flex flex-col items-stretch relative">
              <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-[linear-gradient(97.71deg,#2F2466_-200.25%,#0B0A12_190.53%),linear-gradient(132.58deg,#52458B_9.03%,rgba(27,22,45,0)_54.87%)] h-max">
                <div className="bg-font h-[10px] w-[10px] rounded-full" />
                <div className="bg-font h-[10px] w-[10px] rounded-full" />
                <div className="bg-font h-[10px] w-[10px] rounded-full" />
              </div>
              <div className="lg:grid grid-cols-[max-content_1fr] gap-16 px-6 py-4">
                <div className="hidden lg:flex flex-col gap-3 text-transparent bg-clip-text bg-[linear-gradient(180deg,#5B4A77_14.28%,rgba(47,34,69,0)_94.35%)]">
                  {linesOfCode.map((line, index) => (
                    <LineOfCode text={line} index={index + 1} key={line} />
                  ))}
                </div>
                <BoxGrid />
              </div>
              <div className="bg-[linear-gradient(180deg,rgba(12,11,19,0)_10%,#0C0B13_100%,#0C0B13_100%)] h-full w-full absolute z-10"></div>
            </div>
            <div className="bg-[linear-gradient(190deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-[22px] h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
          </div>
        }
      />
      <Pointer
        pointerPosition="absolute -left-[4rem] z-10 -top-[4rem] hidden md:block"
        dotPosition="top-[-3px] right-[-3px]"
        svg={<TopSideways />}
        delay={2200}
      />
      <Pointer
        pointerPosition="absolute -right-[4rem] z-10 -top-[4rem] scale-x-[-1] hidden md:block"
        dotPosition="top-[-3px] right-[-3px]"
        svg={<TopSideways />}
        delay={800}
      />
    </div>
  );
}
