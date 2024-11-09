import { Width } from "@/constants/Constants";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Message } from "@/hooks/Firebase/useFirebaseStore";

export const Messages = ({
  send,
  message,
}: {
  send?: boolean;
  message?: any;
}) => {
  return (
    <ThemedView
      lightColor={send ? "#0a7ea4" : "#687076"}
      darkColor={send ? "#fff" : "#9BA1A6"}
      style={{
        minHeight: 60,
        width: Width / 1.2,
        borderRadius: 20,
        borderBottomRightRadius: !send ? 20 : 0,
        borderBottomLeftRadius: !send ? 0 : 20,
        alignItems: send ? "flex-end" : "flex-start",
        paddingHorizontal: 15,
        paddingTop: 2,
      }}
    >
      <ThemedText
        lightColor="white"
        darkColor={send ? "black" : "white"}
        style={{
          fontWeight: "600",
        }}
      >
        {message?.createdBy}
      </ThemedText>
      <ThemedText
        lightColor="white"
        darkColor={send ? "black" : "white"}
        style={{
          fontWeight: "400",
        }}
      >
        {message?.text}
      </ThemedText>
    </ThemedView>
  );
};
