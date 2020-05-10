import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../../firebaseConfig";

export const useAuth = () => {
  const [data, setData] = useState({ email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);

  const initAuth = async () => {
    setIsLoggedIn(false);
    setIsError(false);

    !firebase.apps.length && firebase.initializeApp(firebaseConfig).firestore();
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setData({ email: user.email });
      } else {
        if (!firebase.auth().currentUser)
          firebase
            .auth()
            .getRedirectResult()
            .then((result) => {
              if (!result.credential) {
                firebase.auth().signInWithRedirect(provider);
              }
            })
            .catch((error) => {
              setIsError(true);
            });
      }
    });
  };

  useEffect(() => {
    initAuth();
  }, []);

  return { data, isLoggedIn, isError };
};
