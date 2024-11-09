import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  Touchable,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useFirebaseAuth } from "@/hooks/Firebase/useFirebaseAuth";

export default function TabTwoScreen() {
  const { user, signOut } = useFirebaseAuth();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="settings" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
      {user ? (
        <TouchableOpacity onPress={() => signOut()}>
          <View
            style={{
              backgroundColor: "#0a7ea4",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sign out
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
    flexDirection: "column",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
