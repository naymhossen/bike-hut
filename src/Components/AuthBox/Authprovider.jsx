/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const AuthContext = createContext(null);



const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);


    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoding(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }


    const userInfo = { user, loding, createUser, userSignIn, logOut };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;