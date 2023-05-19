"use client";

import { FAQ_QUESTIONS } from "@/consts/contact";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function FAQ() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );

  return (
    <div className="flex flex-col gap-4">
      {FAQ_QUESTIONS.map((question) => (
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
