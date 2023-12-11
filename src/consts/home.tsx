import {
  bezcv,
  flippify,
  greenroad,
  pricing,
  smarttipz,
} from "@/assets/projects/projects";
import { LineOfCode } from "@/components/Home/Modal/LineOfCode";
import { StaticImageData } from "next/image";

export const linesOfCode = [
  'import { Link, useSearchParams } from "react-router-dom";',
  'import FilledButton from "../../components/FilledButton";',
  'import InvoiceInfo from "../../components/points/InvoiceInfo";',
  "import {",
  "PaymentDataType,",
  "initialPaymentData,",
  "packages,",
  '} from "../../constants/points";',
  'import BuyerInfo from "../../components/points/BuyerInfo";',
  'import { useMemo, useState } from "react";',
];

export const serviceDecorators: JSX.Element[] = [
  <div className="grid grid-cols-2 gap-4 h-full">
    <div className="col-span-2 service-fore-hovered shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
    <div className="service-header" />
    <div className="service-header" />
  </div>,
  <div className="hidden lg:flex flex-col gap-3 text-transparent bg-clip-text bg-[linear-gradient(180deg,#5B4A77_14.28%,rgba(47,34,69,0)_94.35%)]">
    {linesOfCode.map(
      (line, index) =>
        index > 7 && <LineOfCode text={line} index={index + 1} key={line} />
    )}
  </div>,
  <div className="hidden lg:flex flex-col gap-3 text-transparent bg-clip-text bg-[linear-gradient(180deg,#5B4A77_14.28%,rgba(47,34,69,0)_94.35%)]">
    {linesOfCode.map(
      (line, index) =>
        index > 2 && <LineOfCode text={line} index={index + 1} key={line} />
    )}
  </div>,
];

export const thumbnails: StaticImageData[] = [
  bezcv,
  smarttipz,
  greenroad,
  pricing,
  flippify,
];
