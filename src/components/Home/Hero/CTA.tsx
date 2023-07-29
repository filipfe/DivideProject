"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

export default function CTA() {
  const { isLogged } = useContext(AuthContext);
  return (
    <Link href={isLogged ? "/dashboard" : "/sign-in"}>
      <PrimaryButton>{isLogged ? "Dashboard" : "Sign in"}</PrimaryButton>
    </Link>
  );
}
