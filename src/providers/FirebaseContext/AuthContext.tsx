"use client";
import { createContext, useContext, useEffect, useState} from "react";
import { AuthProviderProps, LogOutFunction, SignUpAndLoginFunction } from "../types/ContextType";
import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, 
    signOut, 
    User,
} from "firebase/auth";
import { auth as authFirebase } from "../../services/firebase";
import { FirebaseError } from "firebase/app";


export const contextAuth = createContext<SignUpAndLoginFunction | undefined>(
    undefined
);

export const useAuthContext = () => {
    const context = useContext(contextAuth);
    if (!context) throw new Error("There is not auth provider");
    return context;
};

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState<SignUpAndLoginFunction["loading"]>(true);

    const signUp: SignUpAndLoginFunction["signUp"] = async (auth) => {
        const { email, password } = auth;
        try {
            await createUserWithEmailAndPassword(authFirebase, email, password);

        } catch (error ) {

            if (error instanceof FirebaseError) {
             
                console.error('Código de error de Firebase:', error.code);
                console.error('Mensaje de error de Firebase:', error.message);
                throw new Error(error.message || 'Error desconocido');
            } else {
            
                console.error('Error desconocido:', error);
                throw new Error('Error desconocido');
            }
        }
    };

    const login: SignUpAndLoginFunction["login"] = async (auth) => {
        const { email, password } = auth;
        try {
            const credencial= await signInWithEmailAndPassword(authFirebase, email, password);
            console.log(credencial.user);
        } catch (error) {
            if (error instanceof FirebaseError) {
           
                console.error('Código de error de Firebase:', error.code);
                console.error('Mensaje de error de Firebase:', error.message);
                throw new Error(error.message || 'Error desconocido');
            } else {
             
                console.error('Error desconocido:', error);
                throw new Error('Error desconocido');
            }
        }
    };

    const logOut: LogOutFunction = () => {
        signOut(authFirebase);
    };

    useEffect(() => {

        const unsubcribe = onAuthStateChanged(authFirebase, (CurretUser) => {
            setUser(CurretUser);
            setLoading(false);
        })

        return () => unsubcribe();

    }, []);

    return (
        <contextAuth.Provider value={{ loading ,signUp, login, user, logOut }}>
            {children}
        </contextAuth.Provider>
    )
}