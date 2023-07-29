"use client";

import { FormEvent, useContext, useState } from "react";
import Input from "../Home/Contact/components/Input";
import PrimaryButton from "../PrimaryButton";
import GoogleButton from "./GoogleButton";
import { AuthContext } from "@/providers/AuthProvider";

export default function Form() {
  const { signInWithEmail } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    signInWithEmail(email);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        name="sign-in"
        id="sign-in-email"
        value={email}
        label="Email"
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="relative flex flex-col items-center">
        <span className="py-2 px-4 text-[#373347] bg-background sm:bg-dropdown absolute select-none">
          or
        </span>
        <div className="h-[1px] rounded-full bg-[#373347] my-4 self-stretch w-full" />
      </div>
      <GoogleButton />
      <div className="self-end mt-4">
        <PrimaryButton onClick={handleSubmit}>Sign in</PrimaryButton>
      </div>
    </form>
  );
}
