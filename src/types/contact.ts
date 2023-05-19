import { Dispatch, SetStateAction } from "react"

export type FormData = {
    full_name: string,
    email: string,
    budget: string,
    description: string
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

export type ContactField = {
    name: keyof FormData,
    label: string,
    isOptional: boolean
}