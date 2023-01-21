import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
function AuthProviderContext({ children }) {
  const [userLogin, setUserLogin] = useState(null);
  const auth = getAuth(app);
  // Google sign
  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserLogin(user);
        console.log("login success");
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
      });
  };
  // Manage User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogin(user);
      } else {
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserLogin(null);
        toast.success("Log Out Success");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const authInfo = { signInGoogle, userLogin, logout };
  // console.log(userLogin);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviderContext;
