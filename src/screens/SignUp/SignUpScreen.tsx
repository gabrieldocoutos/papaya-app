import React from "react";
import { ScrollView } from "react-native";
import { Formik } from "formik";
import i18n from "i18n-js";
import { View, Pressable, TextInput, Text } from "shared/components";
import SignUpIcon from "./SignUpIcon";
import { useTheme } from "styled-components/native";

const SignUpScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={{ flex: 1, flexGrow: 1, backgroundColor: theme.colors.screenBackgroundColor }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          birthdate: "",
          confirm_password: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View flexDirection="column" mt={20} mb={50} alignItems="center">
            <SignUpIcon width={200} height={200} />
            <Text fontFamily="Bold" textAlign="center" color="secondary" mb={40}>
              Preencha seu cadastro e comece a ter resultados!
            </Text>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              label={i18n.t("signUp.form.email.label")}
              mb={12}
              placeholder={i18n.t("signUp.form.email.placeholder")}
            />
            <TextInput
              onChangeText={handleChange("first_name")}
              onBlur={handleBlur("first_name")}
              value={values.first_name}
              label={i18n.t("signUp.form.first_name.label")}
              mb={12}
              placeholder={i18n.t("signUp.form.first_name.placeholder")}
            />
            <TextInput
              onChangeText={handleChange("last_name")}
              onBlur={handleBlur("last_name")}
              value={values.last_name}
              label={i18n.t("signUp.form.last_name.label")}
              mb={12}
              placeholder={i18n.t("signUp.form.last_name.placeholder")}
            />
            <TextInput
              onChangeText={handleChange("birthdate")}
              onBlur={handleBlur("birthdate")}
              value={values.birthdate}
              label={i18n.t("signUp.form.birthdate.label")}
              mb={12}
              placeholder={i18n.t("signUp.form.birthdate.placeholder")}
            />
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              label={i18n.t("signUp.form.password.label")}
              mb={12}
              placeholder={i18n.t("signUp.form.password.placeholder")}
            />
            <TextInput
              onChangeText={handleChange("confirm_password")}
              onBlur={handleBlur("confirm_password")}
              value={values.confirm_password}
              label={i18n.t("signUp.form.confirm_password.label")}
              mb={12}
              placeholder={i18n.t("signUp.form.confirm_password.placeholder")}
            />
            <Pressable
              onPress={handleSubmit}
              label={i18n.t("signUp.form.submitButton")}
              variant="secondary"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export { SignUpScreen };
