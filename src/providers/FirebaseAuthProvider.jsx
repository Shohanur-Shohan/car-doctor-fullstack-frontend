import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //providers
  const googleProvider = new GoogleAuthProvider();

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update
  const updateCurrentUser = (displayName) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      // photoURL: photoURL,
    });
  };

  //google
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //signout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // console.log(user);

  //onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      //   setLoading(true);
      setUser(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //
  const authInfo = {
    createUser,
    loading,
    setLoading,
    user,
    setUser,
    logOut,
    updateCurrentUser,
    logInUser,
    handleGoogleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
FirebaseAuthProvider.propTypes = {
  children: PropTypes.element,
};
export default FirebaseAuthProvider;
