"use client";

import { LegacyRef, forwardRef } from "react";

const TopSideways = forwardRef((_, ref: LegacyRef<SVGPathElement>) => {
  return (
    <svg
      width="103"
      height="189"
      viewBox="0 0 103 189"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={ref}
        d="M1 189V17C1 8.16344 8.16344 1 17 1H103"
        stroke="url(#paint0_linear_14_33)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_33"
          x1="-301"
          y1="210.815"
          x2="-299.515"
          y2="-5.84894"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.338346" stop-opacity="0" />
          <stop offset="1" stop-color="#46386D" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default TopSideways;
