import React from "react";
import { Dimensions } from "react-native";
import { Text, SafeAreaView } from "shared/components";

const SignUpScreen = () => {
  return (
    <SafeAreaView
      flex={1}
      justifyContent="flex-start"
      paddingX={Dimensions.get("screen").width * 0.08}
      flexDirection="column"
      bg="#eee"
    >
      <Text>SignUp Screen</Text>
    </SafeAreaView>
  );
};

export { SignUpScreen };
