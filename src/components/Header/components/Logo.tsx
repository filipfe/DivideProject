import { logo } from "@/assets/general";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link className="font-medium text-white text-xl" href="/">
    <Image width={44} height={44} src={logo} alt="DivideProject" />
  </Link>
);

export default Logo;
