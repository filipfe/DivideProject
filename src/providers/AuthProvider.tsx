"use client";

import useAuth from "@/hooks/useAuth";
import { AuthContextType } from "@/types/auth";
import { Children } from "@/types/general";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider({ children }: Children) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
