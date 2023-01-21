import React, { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
function AuthProviderContext({ children }) {
  const auth = getAuth(app);
  const signInGoogle = () => {
    console.log("asche");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
      });
  };
  const authInfo = { signInGoogle };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviderContext;
