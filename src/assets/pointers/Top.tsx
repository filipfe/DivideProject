import { LegacyRef, forwardRef } from "react";

const Top = forwardRef((props, ref: LegacyRef<SVGPathElement>) => {
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
        d="M1 0V209"
        stroke="url(#paint0_linear_1_45)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_45"
          x1="2.34335"
          y1="261.25"
          x2="-5.9651"
          y2="260.981"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.259357" stopColor="#0C0818" stopOpacity="0.259259" />
          <stop offset="1" stopColor="#2D215C" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Top;
