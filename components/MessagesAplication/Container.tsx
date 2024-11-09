import { FlatList, ScrollView, View } from "react-native";
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
      <FlatList
        style={{ flex: 1, paddingBottom: 100 }}
        contentContainerStyle={{
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: backgroundColor,
          flexDirection: 'column-reverse',
        }}
        inverted
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MessagesContainer
            message={item}
            isSendMessages={item.uid === user?.uid}
          />
        )}
      />
      <InputMessages
        message={inputMessage}
        setMessages={setInputMessage}
        onSend={sendMessage}
      />
    </View>
  );
};
