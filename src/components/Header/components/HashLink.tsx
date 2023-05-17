import { MouseEvent } from "react";

type HashLinkProps = {
  children: JSX.Element | string | (JSX.Element | string)[];
  to: string;
  className?: string;
  icon?: JSX.Element;
};

export default function HashLink({ children, to, className }: HashLinkProps) {
  const handleNavigate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(to);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button onClick={handleNavigate} className="">
      {children}
    </button>
  );
}
