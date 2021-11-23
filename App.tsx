import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Lato_900Black", fontSize: 40 }}>
          Lato Black
        </Text>
      </View>
    );
  }
}
