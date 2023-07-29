export type User = {
    id: string;
    email: string
}

export type AuthContextType = {
    user: User;
    isLogged: boolean;
    isLoading: boolean;
    signInWithEmail: (email: string) => void;
    signInWithGoogle: () => void;
    logOut: () => void
}