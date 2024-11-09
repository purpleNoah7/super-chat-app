import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const InputMessages = ({
  message,
  setMessages,
  onSend,
}: {
  message: string;
  setMessages: any;
  onSend: any;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "#0a7ea4",
        borderTopWidth: 5,
        borderBottomWidth: 5,
      }}
    >
      <TextInput
        multiline
        value={message}
        onChangeText={(text) => {
          setMessages(text);
        }}
        style={{
          padding: 10,
          width: "50%",
        }}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          onSend(message);
        }}
      >
        <View
          style={{
            backgroundColor: "#0a7ea4",
            width: 30,
            height: 30,
            marginRight: 10,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
