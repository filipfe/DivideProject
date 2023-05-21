"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const timer = useRef<number>(null!);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeIndex = () => setActiveIndex((prev) => (prev > 1 ? 0 : prev + 1));

  useEffect(() => {
    timer.current = window.setTimeout(changeIndex, 200);
    return () => {
      window.clearTimeout(timer.current);
    };
  }, [activeIndex]);

  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((index) => (
        <div
          className={`rounded-full transition-transform h-2 w-2 border-[3px] border-p ${
            activeIndex === index ? "scale-110" : "scale-100"
          }`}
          key={index}
        />
      ))}
    </div>
  );
}
