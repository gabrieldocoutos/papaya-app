import React, { useState, useRef } from "react";
import { TextInputProps as RNTextInputProps, Animated } from "react-native";
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
import { View, AnimatedView } from "../View/ViewComponent";

const TextInput = ({
  label,
  value,
  onChangeText,
  onBlur = () => {},
  onFocus = () => {},
  ...props
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = useRef(new Animated.Value(0)).current;
  const currentColor = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#eee", "#FF6243"],
  });

  return (
    <View flexDirection="column" {...props}>
      <Text fontSize={16} mb={"3px"} fontFamily="Bold">
        {label}
      </Text>
      <AnimatedView
        paddingLeft={16}
        borderWidth={1}
        height={44}
        borderRadius={"5px"}
        style={[{}, { borderColor: currentColor }]}
      >
        <StyledTextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus(e);
            Animated.timing(borderColor, {
              toValue: 1,
              duration: 400,
              useNativeDriver: false,
            }).start();
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur(e);
            Animated.timing(borderColor, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }).start();
          }}
          color="secondary"
          focused={isFocused}
        />
      </AnimatedView>
    </View>
  );
};

const StyledTextInput = styled.TextInput<ColorProps & BorderProps & { focused: Boolean }>`
  ${color};
  ${space};
  ${layout};
  ${border};
  width: 100%;
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
