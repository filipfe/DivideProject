"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderWrapper({
  children,
}: {
  children: JSX.Element[];
}) {
  const [down, setDown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const cb = () => setDown(window.scrollY > 100);
    window.addEventListener("scroll", cb);
    return () => window.removeEventListener("scroll", cb);
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header
      className={`flex items-center justify-between min-h-[5rem] padding fixed left-0 right-0 z-30 top-0 transition-all ${
        down
          ? "shadow-primarySmall md:min-h-[5rem] bg-background/60 backdrop-blur-md"
          : "md:min-h-[6rem] bg-transparent"
      }`}
    >
      {children}
    </header>
  );
}
