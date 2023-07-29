import { AuthContextType, User } from "@/types/auth";
import {
  createClientComponentClient,
  User as SupabaseUser,
} from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useAuth(): AuthContextType {
  const supabase = createClientComponentClient();
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    email: "",
  });

  function logIn(user: SupabaseUser) {
    setIsLogged(true);
    setUser(user as User);
  }

  async function signInWithEmail(email: string) {
    const loadingToast = toast.loading("Loading...");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://www.divideproject.com/auth/callback",
      },
    });
    toast.remove(loadingToast);
    error
      ? toast.error(error.message)
      : toast.success("Verification link has been sent!");
  }

  useEffect(() => {
    async function fetchSession() {
      const { data } = await supabase.auth.getSession();
      data.session && logIn(data.session.user);
    }
    fetchSession();
  }, []);

  return {
    isLogged,
    user,
    signInWithEmail,
  };
}
