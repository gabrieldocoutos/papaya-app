import React from "react";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import { SafeAreaView, View, Pressable, TextInput } from "shared/components";

const SignUpScreen = () => {
  return (
    <SafeAreaView
      flex={1}
      justifyContent="flex-start"
      paddingX={Dimensions.get("screen").width * 0.08}
      flexDirection="column"
      bg="#fcfcfc"
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View flexDirection="column" mt={20}>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              label="E-mail"
              mb={12}
              placeholder="Escreva aqui o seu-email"
            />
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              label="Senha"
              mb={12}
              placeholder="Sua senha"
            />
            <Pressable onPress={handleSubmit} label="Submit" variant="secondary" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export { SignUpScreen };
