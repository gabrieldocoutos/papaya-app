import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";
import styled, { ThemeProvider } from "styled-components/native";
import { color, ColorProps } from "styled-system";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={{ colors: { primary: "green" } }}>
        <MyFirstView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <MyFirstText
            color="primary"
            style={{ fontFamily: "Lato_900Black", fontSize: 40 }}
          >
            Lato Black
          </MyFirstText>
        </MyFirstView>
      </ThemeProvider>
    );
  }
}

const MyFirstView = styled.View({
  backgroundColor: "red",
});

const MyFirstText = styled.Text<ColorProps>(color);
