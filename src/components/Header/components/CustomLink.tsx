import Link from "next/link";
import { usePathname } from "next/navigation";

type CustomLinkProps = {
  children: JSX.Element | string | (JSX.Element | string)[];
  to: string;
  className?: string;
  icon?: JSX.Element;
};

const CustomLink = ({ children, to, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(to);
  return (
    <Link
      href={to}
      className={`relative text-p flex items-center after:transition-all font-medium after:absolute after:h-[2px] after:-bottom-1 after:rounded-full after:w-full after:block after:right-0 ${
        isActive
          ? "after:max-w-[50%]"
          : "hover:after:max-w-[50%] after:max-w-[0%]"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
