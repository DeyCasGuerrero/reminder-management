import { User as FirebaseUser } from "firebase/auth";
export type Auth = {
    email: string;
    password: string;
};
import { ReactNode } from "react";

export type LogOutFunction = () => void;

export type SignUpAndLoginFunction = {
    signUp: (auth: Auth) => void;
    login: (auth: Auth) => void;
    user: FirebaseUser | null;
    loading: boolean;
    logOut: LogOutFunction;
};

export type AuthProviderProps = {
    children: ReactNode;
};

