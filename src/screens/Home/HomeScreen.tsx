import React from "react";
import { Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "shared/types/navigatorTypes";
import { View, Text, SafeAreaView, Pressable } from "shared/components";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "i18n-js";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;
type Props = {
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={["#FF6243", "#ff5430", "#f14c26"]} style={{ flex: 1 }}>
      <SafeAreaView
        flex={1}
        justifyContent="space-between"
        paddingX={Dimensions.get("screen").width * 0.08}
        flexDirection="column"
      >
        <View />
        <View flexDirection="column" width={"100%"}>
          <Text
            width={"100%"}
            textAlign="center"
            fontSize={80}
            color="white"
            fontFamily="Regular_Italic"
            mb={20}
          >
            {i18n.t("home.title")}
          </Text>
          <Text color="white" textAlign="center">
            {i18n.t("home.subtitle")}
          </Text>
        </View>
        <View flexDirection="column" mb={30}>
          <Pressable
            label={i18n.t("home.signUpButton")}
            mb={12}
            onPress={() => navigation.navigate("SignUp")}
          />
          <Pressable
            label={i18n.t("home.signInButton")}
            variant="secondary"
            mb={12}
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
