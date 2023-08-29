"use client";

import SearchBar from "@/components/SearchBar";
import { serviceDecorators } from "@/consts/home";
import Control from "react-control-js";
import ServiceRef from "./ServiceRef";
import Star from "@/components/Star";
import { Dict } from "@/dictionaries/dictionaries";

export default function Services({ dict }: { dict: Dict["services"] }) {
  return (
    <section
      className="px-[8vw] md:px-[12vw] py-[1in] flex flex-col items-center relative overflow-x-hidden"
      id="services"
    >
      <div className="w-full xl:max-w-[85%] flex flex-col gap-16 ">
        <div className="flex flex-col gap-8">
          <Control
            ease="ease-out"
            opacity={1}
            onScroll
            y={40}
            element={
              <SearchBar
                sequence={[
                  dict.searchBar.first,
                  4000,
                  dict.searchBar.second,
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
            className="min-w-full"
            element={
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <h2
                  className={`text-[2rem] md:text-4xl xl:text-5xl w-full flex-1 flex-grow justify-self-stretch min-w-[16ch] ${
                    dict.lang === "pl" ? "max-w-[20ch]" : "max-w-[8in]"
                  } leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent`}
                >
                  {dict.title}
                </h2>
                <p className="font-medium text-sm min-w-0 md:text-base flex-grow-0 text-[#B8B5C3] max-w-[4in] leading-relaxed mt-4">
                  {dict.paragraph}
                </p>
              </div>
            }
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap justify-center 2xl:justify-normal 2xl:grid grid-cols-3 relative">
          {dict.serviceList.map((service, index) => {
            const translate = {
              ...((index === 0 || index === 2) && {
                x: index === 0 ? -40 : 40,
              }),
              ...(index === 1 && { y: 40 }),
            };
            return (
              <Control
                className="md:w-[calc(50%-16px)] 2xl:w-auto"
                ease="ease-out"
                opacity={1}
                onScroll
                viewPort={0.7}
                {...translate}
                element={
                  <ServiceRef
                    {...service}
                    decorator={serviceDecorators[index]}
                    key={service.title + "ref"}
                  />
                }
                key={service.title}
              />
            );
          })}
        </div>
      </div>
      <div className="fixed inset-0 top-[15vh] -z-10">
        <Star position="top-[20%] left-[2rem] delay-500" />
        <Star position="bottom-[30%] hidden sm:flex left-[8%] delay-500" />
        <Star position="top-[20%] hidden sm:flex right-[2rem]" />
        <Star position="top-[40%] left-[30%] delay-500" height="6in" />
        <Star position="top-[60%] right-[20%]" height="6in" />
      </div>
    </section>
  );
}
