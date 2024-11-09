import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { ContainerMessages } from "@/components/MessagesAplication/Container";
import { useFirebaseAuth } from "@/hooks/Firebase/useFirebaseAuth";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { Loading } from "@/components/Loading";
export default function HomeScreen() {
  const { user, loading, signInWithGoogle, authGuest } = useFirebaseAuth();
  return (
    <View style={{ flex: 1, backgroundColor:'white' }}>
      {loading ? <Loading /> : null}
      
      {!user ? (
        <ThemedView
          darkColor="#151718"
          lightColor="#fff"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              gap: 10,
              height: 100,
            }}
          >
            <ThemedText
              lightColor="#11181C"
              darkColor="#ECEDEE"
              maxFontSizeMultiplier={1}
              style={{
                fontSize: 42,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Welcome to the
            </ThemedText>
            <ThemedText
              darkColor="#fff"
              lightColor="#0a7ea4"
              style={{ fontSize: 42, fontWeight: "800" }}
            >
              Super
              <ThemedText
                darkColor="#fff"
                lightColor="#fff"
                style={{
                  fontSize: 42,
                  fontWeight: "800",
                  backgroundColor: "#0a7ea4",
                  paddingHorizontal: 20,
                }}
              >
                Chat
              </ThemedText>
            </ThemedText>
          </View>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Icon}
            style={{ marginTop: 20 }}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {
              signInWithGoogle();
            }}
            disabled={loading}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 20,
            }}
            onPress={() => {
              authGuest();
            }}
          >
            <ThemedText style={{ color: "gray" }}>Enter as a guest</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      ) : (
        <ContainerMessages />
      )}
    </View>
  );
}
