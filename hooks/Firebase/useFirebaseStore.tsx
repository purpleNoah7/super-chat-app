import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { useFirebaseAuth } from "./useFirebaseAuth";

export interface Message {
  uid: string;
  text: string;
  photoUrl: string;
  createdAt: [];
  createdBy: string;
}

export const useFirebaseStore = () => {
  const [messages, setMessages] = useState<
    Message[] | FirebaseFirestoreTypes.DocumentData[]
  >([]);
  const { user } = useFirebaseAuth();
  useEffect(() => {
    const subscriber = firestore()
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((documentSnapshot) => {
        setMessages(documentSnapshot.docs.map((doc) => doc.data()));
      });

    return () => subscriber();
  }, []);

  const sendMessage = async (message: string) => {
    try {
      const newMessage = {
        uid: user?.uid,
        text: message,
        photoUrl: user?.photoURL,
        createdAt: firestore.FieldValue.serverTimestamp(),
        createdBy: user?.displayName ? user?.displayName : 'Guest',
      };
      await firestore().collection("messages").add(newMessage);
    } catch (error) {
      console.error(error);
    }
  };

  return { messages, sendMessage };
};
