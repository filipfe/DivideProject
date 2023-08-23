"use client";

import { Children } from "@/types/general";
import { useSearchParams } from "next/navigation";
import { Fragment, useLayoutEffect } from "react";

export default function ScrollProvider({ children }: Children) {
  const searchParams = useSearchParams();
  const id = searchParams.get("section");
  const element = document.getElementById(id || "") as HTMLDivElement;
  console.log(element);
  useLayoutEffect(() => {
    if (!element) return;
    element.scrollIntoView({ behavior: "instant" });
  }, [element]);

  return <Fragment>{children}</Fragment>;
}
