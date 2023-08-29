import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import HeaderWrapper from "./components/HeaderWrapper";
import { Dict } from "@/dictionaries/dictionaries";

export default function Header({ dict }: { dict: Dict["navigation"] }) {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar dict={dict} />
    </HeaderWrapper>
  );
}
