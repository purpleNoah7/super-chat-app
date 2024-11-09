import { ScrollView, View } from "react-native";
import { MessagesContainer } from "./MessagesContainer";
import { InputMessages } from "./InputMessages";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useFirebaseStore } from "@/hooks/Firebase/useFirebaseStore";
import { useFirebaseAuth } from "@/hooks/Firebase/useFirebaseAuth";
import { useState } from "react";

export const ContainerMessages = () => {
  const backgroundColor = useThemeColor(
    { light: "#fff", dark: "#151718" },
    "background"
  );
  const { messages, sendMessage } = useFirebaseStore();
  const { user } = useFirebaseAuth();
  const [inputMessage, setInputMessage] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
          backgroundColor: backgroundColor,
        }}
      >
        {messages.map((message, index) => {
          return (
            <MessagesContainer
              key={index}
              message={message}
              isSendMessages={messages.uid === user?.uid}
            />
          );
        })}
      </ScrollView>
      <InputMessages
        message={inputMessage}
        setMessages={setInputMessage}
        onSend={sendMessage}
      />
    </View>
  );
};
