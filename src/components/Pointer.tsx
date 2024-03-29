"use client";

import { cloneElement, useLayoutEffect, useRef } from "react";

type PointerProps = {
  dotPosition: string;
  pointerPosition?: string;
  svg: JSX.Element;
  delay?: number;
};

const Pointer = ({
  pointerPosition = "",
  dotPosition = "",
  svg,
  delay = 1000,
}: PointerProps) => {
  const lineRef = useRef<SVGPathElement>(null!);
  const dotRef = useRef<HTMLDivElement>(null!);
  const SVGElement = () => cloneElement(svg, { ref: lineRef });

  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const length = line.getTotalLength();
    line.style.strokeDasharray = length.toString();
    line.style.strokeDashoffset = length.toString();
    line.style.opacity = "1";
    line.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
      duration: 2000,
      easing: "ease-in-out",
      iterations: Infinity,
      delay,
      composite: "replace",
    });
  }, [lineRef.current]);

  useLayoutEffect(() => {
    if (!dotRef.current) return;
    const dot = dotRef.current;
    dot.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1000,
      easing: "ease-in-out",
      iterations: Infinity,
      delay: delay + 500,
      composite: "replace",
      fill: "forwards",
      direction: "alternate",
    });
  }, [dotRef.current]);

  return (
    <div className={`absolute -z-10 ${pointerPosition}`}>
      <div
        ref={dotRef}
        className={`absolute overflow-hidden rounded-full opacity-0 ${dotPosition}`}
      >
        <div className="h-[6px] w-[6px] z-10 rounded-full bg-[#0C0818] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        <div className="h-[12px] w-[12px] rounded-full bg-[#46386D]/50" />
      </div>
      <SVGElement />
    </div>
  );
};

export default Pointer;
