export type User = {
    email: string
}

export type AuthContextType = {
    user: User;
    isLogged: boolean;
    signInWithEmail: (email: string) => void;
}