/* eslint-disable camelcase */
import * as React from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";
import { ThemeProvider, useTheme } from "styled-components/native";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { Text } from "shared/components";
import { HomeScreen, SignUpScreen } from "screens";
import { RootStackParamList } from "shared/types";
import { theme } from "shared/configuration";
import * as translations from "shared/i18n";

const { homeScreen, signUpScreen } = translations;

i18n.translations = {
  en: { ...homeScreen.en, ...signUpScreen.en },
  "pt-BR": { ...homeScreen["pt-br"], ...signUpScreen["pt-BR"] },
};

i18n.locale = Localization.locale;
// i18n.locale = "pt-BR";
i18n.fallbacks = true;

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

// eslint-disable-next-line react/display-name
const HeaderComponent = () => () =>
  (
    <Text fontSize={20} fontFamily="Regular_Italic">
      papaya
    </Text>
  );

function App() {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Navigator = () => {
    const theme = useTheme();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerTitle: HeaderComponent(),
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: theme.colors.screenBackgroundColor,
              },
              headerShadowVisible: true,
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
