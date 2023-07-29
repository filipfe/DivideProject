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
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>({
    id: "",
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
        emailRedirectTo: "http://localhost:3000/auth/callback",
      },
    });
    toast.remove(loadingToast);
    error
      ? toast.error(error.message)
      : toast.success("Verification link has been sent!");
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(error?.message);
  }

  async function logOut() {
    await supabase.auth.signOut();
    setIsLogged(false);
    setUser({ id: "", email: "" });
  }

  useEffect(() => {
    async function fetchSession() {
      const { data } = await supabase.auth.getSession();
      data.session && logIn(data.session.user);
      setIsLoading(false);
    }
    fetchSession();
  }, []);

  return {
    isLoading,
    isLogged,
    user,
    signInWithEmail,
    signInWithGoogle,
    logOut,
  };
}
