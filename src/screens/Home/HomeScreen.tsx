import React from "react";
import { Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "shared/types/navigatorTypes";
import { View, Text, SafeAreaView, Pressable } from "shared/components";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;
type Props = {
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView
      flex={1}
      justifyContent="space-between"
      paddingX={Dimensions.get("screen").width * 0.08}
      flexDirection="column"
      bg="primary"
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
          papaya
        </Text>
        <Text color="white" fontSize={12} textAlign="center">
          Seus resultados dependem de você, mas nós podemos ajudar.
        </Text>
      </View>
      <View flexDirection="column" mb={30}>
        <Pressable label="Criar uma nova conta" mb={12} />
        <Pressable label="Acessar minha conta" variant="secondary" mb={12} />
      </View>
    </SafeAreaView>
  );
};
