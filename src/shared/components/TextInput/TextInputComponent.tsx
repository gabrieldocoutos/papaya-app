import React from "react";
import { TextInputProps as RNTextInputProps } from "react-native";
import styled from "styled-components/native";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from "styled-system";
import { Text } from "../Text/TextComponent";
import { View } from "../View/ViewComponent";

const TextInput = ({ label, value, onChangeText, onBlur, ...props }: TextInputProps) => {
  return (
    <View flexDirection="column" {...props}>
      <Text fontSize={14} mb={"6px"} fontFamily="Bold">
        {label}
      </Text>
      <StyledTextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 1,
        }}
        color="secondary"
      />
    </View>
  );
};

const StyledTextInput = styled.TextInput<ColorProps>`
  ${color};
  ${space};
  ${layout};
  ${border};
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 6px 0px 6px 16px;
  background-color: white;
`;

interface TextInputProps
  extends RNTextInputProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    BorderProps {
  label: string;
}

export { TextInput };
