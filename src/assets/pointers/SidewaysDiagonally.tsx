"use client";

import { LegacyRef, forwardRef } from "react";

const SidewaysDiagonally = forwardRef((_, ref: LegacyRef<SVGPathElement>) => {
  return (
    <svg
      width="159"
      height="30"
      viewBox="0 0 159 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={ref}
        d="M159 29H42.5903C39.0407 29 35.5919 27.8196 32.7866 25.6447L1.00001 1"
        stroke="url(#paint0_linear_13_32)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13_32"
          x1="188.665"
          y1="46.5"
          x2="180.008"
          y2="72.1326"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="0.0001" stop-opacity="0" />
          <stop offset="1" stop-color="#46386D" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default SidewaysDiagonally;
