import { dropdownArrow } from "@/assets/home/contact/contact";
import { FAQ_QUESTIONS } from "@/consts/contact";
import { FAQ, QuestionIndexState } from "@/types/contact";
import Image from "next/image";
import Control from "react-control-js";

export default function Dropdown({
  id,
  question,
  answer,
  activeQuestionIndex,
  setActiveQuestionIndex,
}: FAQ & QuestionIndexState) {
  const isActive = id === activeQuestionIndex;
  return (
    <Control
      ease="ease-out"
      opacity={1}
      x={-40}
      onScroll
      element={
        <button
          onClick={() => setActiveQuestionIndex(isActive ? null : id)}
          className="bg-dropdown border-[1px] border-[rgba(108,101,131,0.32)] overflow-hidden rounded-xl p-6 relative flex flex-col"
        >
          <div className="flex items-center justify-between relative z-10">
            <h3 className="text-p font-medium">{question}</h3>
            <Image
              width={16}
              height={16}
              src={dropdownArrow}
              title="Expand"
              alt="Dropdown Arrow"
            />
          </div>
          <div
            className={`transition-all overflow-hidden grid relative z-10 min-h-0 ${
              isActive ? "pt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <p className="text-p/60 text-sm font-medium text-left min-h-0">
              {answer}
            </p>
          </div>
          <div
            className={`bg-dropdown-active absolute inset-0 w-full h-full transition-opacity ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      }
    />
  );
}
