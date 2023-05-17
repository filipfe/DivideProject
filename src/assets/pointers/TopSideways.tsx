"use client";

import { LegacyRef, forwardRef } from "react";

const TopSideways = forwardRef((props, ref: LegacyRef<SVGPathElement>) => {
  return (
    <svg
      width="103"
      height="451"
      viewBox="0 0 103 451"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={ref}
        d="M1 531V17C1 8.16344 8.16344 1 17 1H103"
        stroke="url(#paint0_linear_1_58)"
        className="opacity-0"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_58"
          x1="-301"
          y1="592.5"
          x2="-289.198"
          y2="-18.1088"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.338346" stopOpacity="0" />
          <stop offset="1" stopColor="#2D215C" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default TopSideways;
