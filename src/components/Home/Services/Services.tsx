"use client";

import SearchBar from "@/components/SearchBar";
import { services } from "@/consts/home";
import Control from "react-control-js";
import ServiceRef from "./ServiceRef";

export default function Services() {
  return (
    <section className="padding py-[1in] flex flex-col items-center relative">
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
                  "How do they affect my business?",
                  4000,
                  "How am I going to profit from them?",
                  4000,
                  "",
                ]}
              />
            }
          />
          <div className="flex justify-between gap-4">
            <h2 className="text-3xl md:text-4xl xl:text-5xl w-full max-w-[8in] leading-tight sm:leading-tight md:leading-tight xl:leading-tight bg-[linear-gradient(46.93deg,#FFFFFF_21.95%,#3B2398_179.76%)] font-bold bg-clip-text text-transparent">
              Services with attention to detail
            </h2>
            <p className="font-medium text-[#B8B5C3] leading-relaxed mt-4 max-w-[4in]">
              Our team offers a range of services to help you create the digital
              experience you want.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 xl:grid grid-cols-3">
          {services.map((service) => (
            <ServiceRef {...service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
