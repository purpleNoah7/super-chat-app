import { View } from "react-native";
import { Messages } from "./Messages";
import { Width } from "@/constants/Constants";
import { Message } from "@/hooks/Firebase/useFirebaseStore";

export const MessagesContainer = ({
  isSendMessages,
  message,
}: {
  isSendMessages?: boolean;
  message?: any;
}) => {
  return (
    <View
      style={{
        width: Width,
        alignItems: isSendMessages ? "flex-end" : "flex-start",
        marginBottom: 20,
        marginRight: 10,
        marginLeft: isSendMessages ? 0 : 20,
      }}
    >
      <Messages message={message} send={isSendMessages} />
    </View>
  );
};
