import { defaultUser } from "@/assets/home/home";
import { bezcv } from "@/assets/projects/projects";
import { Opinion } from "@/types/opinions";
import { Project } from "@/types/projects";
import { Service } from "@/types/services";

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

export const opinions: Opinion[] = [
  {
    content:
      "I'm really impressed with the quality of work that DivideProject provides. They have an incredible eye for design and their attention to detail is second to none.",
    column: 1,
    user: {
      fullName: "Lucas Kowalski",
      image: defaultUser,
      position: "CEO of bezCV",
    },
  },
  {
    content:
      "I'm really impressed with the quality of work that DivideProject provides. They have an incredible eye for design and their attention to detail is second to none.",
    column: 1,
    user: {
      fullName: "Lucas Kowalski",
      image: defaultUser,
      position: "CEO of bezCV",
    },
  },
  {
    content:
      "I'm really impressed with the quality of work that DivideProject provides. They have an incredible eye for design and their attention to detail is second to none.",
    column: 2,
    user: {
      fullName: "Lucas Kowalski",
      image: defaultUser,
      position: "CEO of bezCV",
    },
  },
  {
    content:
      "I'm really impressed with the quality of work that DivideProject provides. They have an incredible eye for design and their attention to detail is second to none.",
    column: 2,
    user: {
      fullName: "Lucas Kowalski",
      image: defaultUser,
      position: "CEO of bezCV",
    },
  },
  {
    content:
      "I'm really impressed with the quality of work that DivideProject provides. They have an incredible eye for design and their attention to detail is second to none.",
    column: 3,
    user: {
      fullName: "Lucas Kowalski",
      image: defaultUser,
      position: "CEO of bezCV",
    },
  },
  {
    content:
      "I'm really impressed with the quality of work that DivideProject provides. They have an incredible eye for design and their attention to detail is second to none.",
    column: 3,
    user: {
      fullName: "Lucas Kowalski",
      image: defaultUser,
      position: "CEO of bezCV",
    },
  },
];

export const services: Service[] = [
  {
    title: "Designing UI/UX",
    desc: "Lorem ipsum dolor sit amet consectetur. Vitae diam donec. Vitae diam donec.",
    decorator: (
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="col-span-2 service-fore-hovered shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        <div className="service-header" />
        <div className="service-header" />
      </div>
    ),
  },
  {
    title: "Front-End Development",
    desc: "Lorem ipsum dolor sit amet consectetur. Vitae diam donec. Vitae diam donec.",
    decorator: <></>,
  },
  {
    title: "Back-End Development",
    desc: "Lorem ipsum dolor sit amet consectetur. Vitae diam donec. Vitae diam donec.",
    decorator: <></>,
  },
];

export const projects: Project[] = [
  {
    title: "bezCV - online platform for recruiters and employees",
    desc: "Hire and seek recruiters, everything done by our team, from design to functionality.",
    thumbnail: bezcv,
    link: "https://bezcv.com",
  },
  {
    title: "bezCV - online platform for recruiters and employees",
    desc: "Hire and seek recruiters, everything done by our team, from design to functionality.",
    thumbnail: bezcv,
    link: "https://bezcv.com",
  },
  {
    title: "bezCV - online platform for recruiters and employees",
    desc: "Hire and seek recruiters, everything done by our team, from design to functionality.",
    thumbnail: bezcv,
    link: "https://bezcv.com",
  },
  {
    title: "bezCV - online platform for recruiters and employees",
    desc: "Hire and seek recruiters, everything done by our team, from design to functionality.",
    thumbnail: bezcv,
    link: "https://bezcv.com",
  },
];
