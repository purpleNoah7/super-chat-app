import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const useFirebaseAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [userNameGuest, setUserNameGuest] = useState("");
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  GoogleSignin.configure({
    webClientId: process.env.REACT_APP_FIREBASE_WEB_CLIENT_ID,
  });

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const authGuest = async () => {
    setLoading(true);
    try {
      await auth().signInAnonymously();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);

    try {
      await auth().signOut();
      setUserNameGuest("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const dataGoogle = await GoogleSignin.signIn();
      const idtoken = dataGoogle.data?.idToken ?? null;
      if (dataGoogle.type === "cancelled") {
        alert("Google sign in cancelled");
      }
      const googleCredentials = auth.GoogleAuthProvider.credential(idtoken);
      return auth().signInWithCredential(googleCredentials);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    initializing,
    signOut,
    authGuest,
    loading,
    signInWithGoogle,
    userNameGuest,
  };
};
