import React, { useState } from "react";
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

const TextInput = ({
  label,
  value,
  onChangeText,
  onBlur = () => {},
  onFocus = () => {},
  ...props
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View flexDirection="column" {...props}>
      <Text fontSize={16} mb={"3px"} fontFamily="Bold">
        {label}
      </Text>
      <StyledTextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur(e);
        }}
        color="secondary"
        focused={isFocused}
      />
    </View>
  );
};

const StyledTextInput = styled.TextInput<ColorProps & { focused: Boolean }>`
  ${color};
  ${space};
  ${layout};
  ${border};
  border: 1px solid ${(props) => (props.focused ? "#FF6243" : "#ebebeb")};
  border-radius: 5px;
  padding-left: 16px;
  height: 44px;
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
