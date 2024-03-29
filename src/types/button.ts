import { MouseEvent } from "react"

export type ButtonProps = {
    children: JSX.Element | string | (string | JSX.Element)[],
    className?: string,
    type?: "button" | "submit" | "reset"
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    asChild?: boolean;
    disabled?: boolean;
}