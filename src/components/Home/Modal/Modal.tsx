"use client";

import TopSideways from "../../../assets/pointers/TopSideways";
import { linesOfCode } from "../../../consts/home";
import Pointer from "../../Pointer";
import BoxGrid from "./BoxGrid";
import Control from "react-control-js";

export default function Modal() {
  return (
    <div className="relative mt-8 self-stretch w-full max-w-[12in] mx-auto">
      <Control
        className="min-w-full"
        ease="ease-out"
        opacity={1}
        y={40}
        element={
          <div className="bg-[linear-gradient(345.04deg,#0E0D17_78.2%,#351D95_137.99%)] backdrop-blur-md pb-[1in] opacity-50 modal rounded-3xl min-h-[2in] flex flex-col items-stretch">
            <div className="flex items-center gap-2 px-6 py-4 rounded-full modal-header h-max">
              <div className="bg-primary h-3 w-3 rounded-full" />
              <div className="bg-primary h-3 w-3 rounded-full" />
              <div className="bg-primary h-3 w-3 rounded-full" />
            </div>
            <div className="lg:grid grid-cols-[max-content_1fr] gap-16 px-6 py-4">
              <div className="hidden lg:flex flex-col gap-3 text-transparent bg-clip-text bg-[linear-gradient(180deg,#5B4A77_14.28%,rgba(47,34,69,0)_94.35%)]">
                {linesOfCode.map((line, index) => (
                  <LineOfCode text={line} index={index + 1} key={line} />
                ))}
              </div>
              <BoxGrid />
            </div>
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

type LineOfCodeProps = {
  index: number;
  text: string;
};

export const LineOfCode = ({ index, text }: LineOfCodeProps) => {
  return (
    <div className="flex items-center">
      <h4 className="font-medium w-[3ch]">{index}</h4>
      <h4 className="text-sm font-medium">{text}</h4>
    </div>
  );
};
