"use client";

import Control from "react-control-js";
import OpinionRef from "./components/OpinionRef";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import SecondaryButton from "@/components/SecondaryButton";
import ArrowDown from "@/assets/dashboard/ArrowDown";
import { Dict } from "@/dictionaries/dictionaries";

export default function Opinions({ dict }: { dict: Dict["opinions"] }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      className="padding pt-[1in] pb-[2in] flex flex-col items-center gap-16 relative overflow-hidden"
      id="opinions"
    >
      <div className="flex flex-col items-center gap-8">
        <Control
          ease="ease-out"
          opacity={1}
          onScroll
          y={40}
          element={
            <SearchBar
              sequence={[dict.searchBar[0], 4000, dict.searchBar[1], 4000, ""]}
            />
          }
        />
        <Control
          ease="ease-out"
          opacity={1}
          onScroll
          y={40}
          element={
            <h2 className="text-[2rem] md:text-4xl xl:text-5xl w-full max-w-[10in] text-center leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent">
              {dict.title}
            </h2>
          }
        />
      </div>
      <div className="flex flex-col gap-8 xl:grid grid-cols-3 xl:max-w-[85%]">
        <div className="flex flex-col gap-8">
          {dict.opinionList
            .filter((opinion) => opinion.column === 1)
            .map((opinion) => (
              <Control
                ease="ease-out"
                opacity={1}
                onScroll
                y={40}
                element={<OpinionRef {...opinion} />}
                key={opinion.user.fullName}
              />
            ))}
        </div>
        <div className="flex flex-col gap-8 xl:mt-8">
          {dict.opinionList
            .filter((opinion) => opinion.column === 2)
            .map((opinion) => (
              <Control
                ease="ease-out"
                opacity={1}
                onScroll
                y={40}
                element={<OpinionRef {...opinion} />}
                key={opinion.user.fullName}
              />
            ))}
        </div>
        <div className="flex flex-col gap-8">
          {dict.opinionList
            .filter((opinion) => opinion.column === 3)
            .map((opinion) => (
              <Control
                ease="ease-out"
                opacity={1}
                onScroll
                y={40}
                element={<OpinionRef {...opinion} />}
                key={opinion.user.fullName}
              />
            ))}
        </div>
      </div>
      <div
        className={`absolute pb-[1in] left-0 right-0 bottom-0 w-full h-full flex items-center justify-center transition-all ${
          showMore ? "max-h-[.5in]" : "max-h-[3in]"
        }`}
      >
        <SecondaryButton
          className="transition-opacity"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show less" : "Show more"}
          <div
            className={`transition-transform ${
              showMore ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDown />
          </div>
        </SecondaryButton>
        <div
          className={`absolute inset-0 w-full h-full blur-md ${
            showMore
              ? "bg-transparent"
              : "bg-[linear-gradient(180deg,rgba(10,8,19,0.6)_0%,#0A0812_29.91%)]"
          }`}
        />
      </div>
    </section>
  );
}
