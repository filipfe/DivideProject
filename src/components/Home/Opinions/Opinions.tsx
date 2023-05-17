"use client";

import { opinions } from "@/consts/home";
import Control from "react-control-js";
import OpinionRef from "./OpinionRef";
import SearchBar from "@/components/SearchBar";
import Star from "@/components/Star";
import { useState } from "react";
import SecondaryButton from "@/components/SecondaryButton";

export default function Opinions() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="padding py-[1in] flex flex-col items-center gap-16 relative overflow-hidden">
      <div className="flex flex-col items-center gap-8">
        <Control
          ease="ease-out"
          opacity={1}
          onScroll
          y={40}
          element={
            <SearchBar
              sequence={[
                "What values do I get from them?",
                4000,
                "What would be my profit?",
                4000,
                "",
              ]}
            />
          }
        />
        <Control
          ease="ease-out"
          opacity={1}
          onScroll
          y={40}
          element={
            <h2 className="text-3xl md:text-4xl xl:text-5xl w-full max-w-[8in] text-center leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent">
              Relationship built on trust
            </h2>
          }
        />
      </div>
      <div className="flex flex-col gap-8 xl:grid grid-cols-3 xl:max-w-[85%]">
        <div className="flex flex-col gap-8">
          {opinions
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
          {opinions
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
          {opinions
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
      <Star position="top-[20%] left-[2rem]" />
      <Star position="bottom-[30%] hidden sm:flex left-[8%]" />
      <Star position="top-[20%] hidden sm:flex right-[2rem]" />
      <Star position="top-[40%] left-[30%]" height="6in" />
      <Star position="top-[60%] right-[20%]" height="6in" />
      <div
        className={`absolute left-0 right-0 bottom-0 w-full h-full flex items-center justify-center transition-all ${
          showMore ? "max-h-[.5in]" : "max-h-[2in]"
        }`}
      >
        <SecondaryButton
          rotate={showMore}
          className="hover:opacity-100 opacity-60 transition-opacity"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show less" : "Show more"}
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
