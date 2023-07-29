"use client";

import GoogleIcon from "@/assets/sign-in/GoogleIcon";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export default function GoogleButton() {
  const { signInWithGoogle } = useContext(AuthContext);
  return (
    <div className="relative">
      <div className="bg-dropdown-active w-full h-[calc(28px+1em)] px-6 rounded-lg pointer-events-none border-[1px] border-[rgba(108,101,131,0.32)]" />
      <button
        onClick={signInWithGoogle}
        type="button"
        className="absolute w-full inset-0 z-10 bg-transparent border-none stroke-none outline-none text-white text-sm text-center flex items-center justify-center gap-2"
      >
        <GoogleIcon />
        Sign in with Google
      </button>
    </div>
  );
}
