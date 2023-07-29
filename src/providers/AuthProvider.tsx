"use client";

import Logo from "@/components/Header/components/Logo";
import Loader from "@/components/Loader";
import useAuth from "@/hooks/useAuth";
import { AuthContextType } from "@/types/auth";
import { Children } from "@/types/general";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider({ children }: Children) {
  const auth = useAuth();
  const { isLoading } = auth;
  return isLoading ? (
    <div className="flex flex-col gap-4 items-center justify-center fixed inset-0 bg-background h-screen">
      <div className="animate-pulse">
        <Logo />
      </div>
      <Loader />
    </div>
  ) : (
    <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
  );
}
