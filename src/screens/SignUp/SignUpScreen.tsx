import React from "react";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import i18n from "i18n-js";
import { SafeAreaView, View, Pressable, TextInput } from "shared/components";

const SignUpScreen = () => {
  return (
    <SafeAreaView
      flex={1}
      justifyContent="flex-start"
      paddingX={Dimensions.get("screen").width * 0.08}
      flexDirection="column"
      bg="screenBackgroundColor"
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
          <View flexDirection="column" mt={20}>
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
    </SafeAreaView>
  );
};

export { SignUpScreen };
