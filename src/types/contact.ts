import { Dispatch, SetStateAction } from "react"

export type FormData = {
    first_name: string,
    last_name: string;
    email: string,
    message: string
}

export type FAQ = {
    id: number,
    question: string,
    answer: string
}

export type InputProps = {
    label?: string,
}

export type QuestionIndexState = {
    activeQuestionIndex: number | null,
    setActiveQuestionIndex: Dispatch<SetStateAction<number | null>>
}