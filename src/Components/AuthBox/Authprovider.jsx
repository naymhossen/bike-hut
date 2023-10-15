/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
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



    const userInfo = { user, loding, createUser, userSignIn };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;