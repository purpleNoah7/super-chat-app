import { Height } from "@/constants/Constants";
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { BlurView } from "expo-blur";

export const Loading = () => {
  return (
    <BlurView
      intensity={50}
      style={{
        alignItems: "center",
        height: Height,
        justifyContent: "center",
        gap: 20,
        position: "absolute",
        width: "100%",
        zIndex: 1000000,
      }}
      tint="systemMaterialDark"
    >
      <View style={{}}>
        <ActivityIndicator size={"small"} color={"#0a7ea4"} />
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            color: "#0a7ea4",
          }}
        >
          Loading...
        </Text>
      </View>
    </BlurView>
  );
};
