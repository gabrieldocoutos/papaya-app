import React from "react";
import { Dimensions } from "react-native";
import { SafeAreaView, View, Pressable, TextInput } from "shared/components";
import { Formik } from "formik";

const SignUpScreen = () => {
  return (
    <SafeAreaView
      flex={1}
      justifyContent="flex-start"
      paddingX={Dimensions.get("screen").width * 0.08}
      flexDirection="column"
      bg="#eee"
    >
      <Formik initialValues={{ email: "" }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View flexDirection="column" mt={20}>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              label="E-mail"
              mb={12}
            />
            <Pressable onPress={handleSubmit} label="Submit" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export { SignUpScreen };
