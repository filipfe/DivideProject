"use client";

import HashLink from "@/components/Header/components/HashLink";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

export default function CTA() {
  const { isLogged } = useContext(AuthContext);
  return (
    <div className="mt-4 flex flex-col sm:flex-row relative z-10 self-stretch sm:self-center mx-auto max-w-[3in] w-full sm:max-w-none sm:items-center gap-4 sm:gap-6 sm:w-max">
      <Link href={isLogged ? "/dashboard" : "/sign-in"}>
        <PrimaryButton>{isLogged ? "Dashboard" : "Sign in"}</PrimaryButton>
      </Link>
      <HashLink to="work">
        <SecondaryButton>View our work</SecondaryButton>
      </HashLink>
    </div>
  );
}
