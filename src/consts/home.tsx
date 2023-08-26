import { defaultUser } from "@/assets/home/home";
import {
  bezcv,
  flippify,
  pricing,
  smarttipz,
} from "@/assets/projects/projects";
import { LineOfCode } from "@/components/Home/Modal/LineOfCode";
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
      "Collaborating with this team was a game-changer for our business. Their innovative approach to web development boosted our online presence and exceeded our expectations.",
    column: 1,
    user: {
      fullName: "Oliver Andersen",
      image: defaultUser,
      position: "CEO of Stellar Solutions Ltd.",
    },
  },
  {
    content:
      "As a marketer, I highly recommend their UI/UX design services. The seamless user experience they created improved our website's performance and increased customer engagement.",
    column: 2,
    user: {
      fullName: "Sophia Lopez",
      image: defaultUser,
      position: "Marketing Director at Zenith Industries",
    },
  },
  {
    content:
      "Their front-end development expertise is unmatched. They delivered pixel-perfect designs and responsive websites that enhanced our user interactions and improved conversion rates.",
    column: 2,
    user: {
      fullName: "Adam Rossi",
      image: defaultUser,
      position: "CTO of Nextron Tech",
    },
  },
  {
    content:
      "I'm really impressed with the quality of work that DivideProject provides. They have an incredible eye for design and their attention to detail is second to none.",
    column: 1,
    user: {
      fullName: "Lucas Kowalski",
      image: defaultUser,
      position: "CEO of XYZ",
    },
  },
  {
    content:
      "Their attention to detail and mastery of design principles set them apart. Collaborating with their team brought our creative vision to life, resulting in visually stunning websites.",
    column: 3,
    user: {
      fullName: "Maximilian Müller",
      image: defaultUser,
      position: "Creative Director at PixelPerfekt Agency",
    },
  },
  {
    content:
      "Back-end development was a critical aspect of our product, and their team delivered flawlessly. Their robust solutions ensured the scalability and security our business needed.",
    column: 3,
    user: {
      fullName: "Isabella Weber",
      image: defaultUser,
      position: "Co-Founder of Techno Innovations",
    },
  },
];

export const services: Service[] = [
  {
    title: "UI/UX Design",
    desc: "Elevate user experiences with stunning UI/UX designs that captivate and engage.",
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
    desc: "Build visually impressive and responsive websites with user-friendly interface.",
    decorator: (
      <div className="hidden lg:flex flex-col gap-3 text-transparent bg-clip-text bg-[linear-gradient(180deg,#5B4A77_14.28%,rgba(47,34,69,0)_94.35%)]">
        {linesOfCode.map(
          (line, index) =>
            index > 7 && <LineOfCode text={line} index={index + 1} key={line} />
        )}
      </div>
    ),
  },
  {
    title: "Back-End Development",
    desc: "Create scalable and secure systems that handle complex operations.",
    decorator: (
      <div className="hidden lg:flex flex-col gap-3 text-transparent bg-clip-text bg-[linear-gradient(180deg,#5B4A77_14.28%,rgba(47,34,69,0)_94.35%)]">
        {linesOfCode.map(
          (line, index) =>
            index > 2 && <LineOfCode text={line} index={index + 1} key={line} />
        )}
      </div>
    ),
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
    title: "SmartTipz - online video platform for sharing and watching content",
    desc: "Choose from the normal and business account. Explore videos and earn on uploading content through tipping system.",
    thumbnail: smarttipz,
    link: "/",
  },
  {
    title: "SmartTipz - online video platform for sharing and watching content",
    desc: "Tailored pricing solutions designed to fit the client needs. Choose from the four distinct layouts based on the given style guide.",
    thumbnail: pricing,
    link: "https://dpricing.netlify.app/",
  },

  {
    title: "Flippify - our ultimate educational app for flashcards and notes",
    desc: "Discover a whole new way of learning with Flippify. Seamlessly flip through interactive flashcards and access concise, organized notes on the go. Whether you're a student, professional, or lifelong learner, Flippify empowers you to master any subject with ease.",
    thumbnail: flippify,
    link: "https://expo.dev/accounts/divideproject/projects/flippify/builds/b21bbb1a-91aa-48f4-a386-ffe7a2a81dac",
  },
];
