"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import { Dict } from "@/dictionaries/dictionaries";

export default function FAQ({ dict }: { dict: Dict["contact"]["faq"] }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );

  return (
    <div className="flex flex-col gap-4">
      {dict.map((question) => (
        <Dropdown
          {...question}
          activeQuestionIndex={activeQuestionIndex}
          setActiveQuestionIndex={setActiveQuestionIndex}
          key={question.question}
        />
      ))}
    </div>
  );
}
