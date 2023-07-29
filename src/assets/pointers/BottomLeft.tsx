"use client";

import { LegacyRef, forwardRef } from "react";

const BottomLeft = forwardRef((_, ref: LegacyRef<SVGPathElement>) => {
  return (
    <svg
      width="118"
      height="123"
      viewBox="0 0 118 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={ref}
        d="M117 0V37.5C117 46.3366 109.837 53.5 101 53.5H73.5C64.6634 53.5 57.5 60.6634 57.5 69.5V106C57.5 114.837 50.3366 122 41.5 122H0.5"
        stroke="url(#paint0_linear_17_36)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17_36"
          x1="-39.5"
          y1="152.5"
          x2="22.3015"
          y2="-108.542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#46386D" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default BottomLeft;
