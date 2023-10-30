/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
      // If user add or exist issue a JWT functionality
      if (currentUser) {
        const loggedUser = { email: currentUser.email };
        axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
        .then((res) => {
          console.log('Token Response',res.data);
        });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };

  const userInfo = { user, loding, createUser, userSignIn, logOut };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default Authprovider;
