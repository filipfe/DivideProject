import { fb, logo } from "@/assets/general";
import Image from "next/image";
import HashLink from "../Header/components/HashLink";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[2.5in] bg-banner padding pt-8 pb-6 flex flex-col justify-between">
      <div className="flex items-center justify-center gap-8 text-sm font-medium">
        <HashLink to="services">Services</HashLink>
        <HashLink to="work">Our work</HashLink>
        <HashLink to="opinions">Relationship</HashLink>
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Image width={48} height={48} src={logo} alt="DivideProject logo" />
        <HashLink to="contact">
          <PrimaryButton>Hire us now</PrimaryButton>
        </HashLink>
        <Link
          className="w-12 h-12 bg-black rounded-xl flex items-center justify-center"
          href="https://www.facebook.com/profile.php?id=100081338363679"
          target="_blank"
        >
          <Image width={24} height={24} src={fb} alt="Facebook" />
        </Link>
      </div>
      <div className="flex justify-center">
        <small>&copy; 2023 - DivideProject</small>
      </div>
    </footer>
  );
}
