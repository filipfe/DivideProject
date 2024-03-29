import { fb, logo } from "@/assets/general";
import Image from "next/image";
import HashLink from "../Header/components/HashLink";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { Dict } from "@/dictionaries/dictionaries";

export default function Footer({ dict }: { dict: Dict["navigation"] }) {
  return (
    <footer className="min-h-[2.5in] bg-banner padding pt-8 pb-6 flex flex-col gap-8 items-center justify-between relative z-40">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap w-full">
        <Image width={48} height={48} src={logo} alt="DivideProject logo" />
        <div className="flex items-center justify-center gap-8 text-sm font-medium">
          <HashLink to="services">{dict.services}</HashLink>
          <HashLink to="work">{dict.work}</HashLink>
          <HashLink to="opinions">{dict.opinions}</HashLink>
        </div>
        <Link
          className="w-12 h-12 bg-black rounded-xl flex items-center justify-center"
          href="https://www.facebook.com/profile.php?id=100081338363679"
          target="_blank"
        >
          <Image width={24} height={24} src={fb} alt="Facebook" />
        </Link>
      </div>
      <div className="self-center">
        <HashLink to="contact">
          <PrimaryButton asChild>{dict.primary}</PrimaryButton>
        </HashLink>
      </div>
      <div className="flex justify-center">
        <small>&copy; 2023 - DivideProject</small>
      </div>
    </footer>
  );
}
