"use client";

import { LegacyRef, forwardRef } from "react";

const Top = forwardRef((_, ref: LegacyRef<SVGPathElement>) => {
  return (
    <svg
      width="2"
      height="209"
      viewBox="0 0 2 209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={ref}
        opacity="0.7"
        d="M1 209L1 0"
        stroke="url(#paint0_linear_13_28)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13_28"
          x1="2.34335"
          y1="-52.2499"
          x2="-5.9651"
          y2="-51.9813"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.40625" stopColor="#46386D" />
          <stop offset="1" stopColor="#0C0818" stopOpacity="0.259259" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Top;
