import { useState, useEffect, useContext } from "react";
import PrimaryButton from "../../PrimaryButton";
import HashLink from "./HashLink";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProvider";
import PlusIcon from "@/assets/dashboard/PlusIcon";
import navigate from "@/utils/navigate";

const lineStyle = "h-[3px] w-full transition rounded-xl";

const Navbar = () => {
  const { isLogged } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`bg-[#000000] absolute inset-0 w-screen h-screen md:hidden transition-opacity ${
          active
            ? "opacity-40 z-10 md:-z-50 md:pointer-events-none"
            : "opacity-0 -z-50 pointer-events-none"
        }`}
      />
      <div
        className={`flex flex-col md:flex-row items-end bg-background md:bg-transparent gap-4 md:gap-8 pt-[1.4in] md:pt-0 text-sm font-medium z-50 absolute px-[8vw] md:px-0 top-0 md:relative left-full transition-transform ${
          active && "-translate-x-full md:translate-x-0"
        } md:left-auto h-screen md:h-full md:items-center w-max`}
      >
        {isLogged ? (
          <>
            <Link
              className={`transition-colors ${
                pathname === "/" ? "text-white" : "text-p hover:text-white"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`transition-colors ${
                pathname === "/dashboard"
                  ? "text-white"
                  : "text-p hover:text-white"
              }`}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <PrimaryButton
              onClick={() => push("/dashboard/new-project")}
              className="fill-white"
            >
              <PlusIcon /> New project
            </PrimaryButton>
          </>
        ) : (
          <>
            <HashLink to="services">Services</HashLink>
            <HashLink to="work">Our work</HashLink>
            <HashLink to="opinions">Relationship</HashLink>
            <Link href="/sign-in">
              <PrimaryButton>Sign in</PrimaryButton>
            </Link>
          </>
        )}
      </div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className="burger flex flex-col relative z-50 md:hidden h-5 w-8 justify-between cursor-pointer"
      >
        <div
          className={`transition-all bg-primary ${lineStyle} ${
            active
              ? "absolute top-[50%] translate-y-[-50%] rotate-45 max-w-full"
              : "max-w-[60%]"
          }`}
        />
        <div
          className={`transition-opacity bg-primary ${lineStyle} ${
            active ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`transition-all bg-primary ${lineStyle} ${
            active
              ? "absolute top-[50%] translate-y-[-50%] -rotate-45 max-w-full"
              : "max-w-[60%] ml-auto"
          }`}
        />
      </div>
    </>
  );
};

export default Navbar;
