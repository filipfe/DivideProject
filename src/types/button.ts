export type ButtonProps = {
    children: JSX.Element | string | (string | JSX.Element)[],
    className?: string,
    type?: "button" | "submit" | "reset"
    onClick?: () => void,
}