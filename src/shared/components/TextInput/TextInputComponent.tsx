import React, { useRef } from "react";
import { TextInputProps as RNTextInputProps, Animated } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { color, ColorProps, SpaceProps, LayoutProps, BorderProps } from "styled-system";
import { Text } from "../Text/TextComponent";
import { View, AnimatedView } from "../View/ViewComponent";

const TextInput = ({
  label,
  value,
  onChangeText,
  onBlur = () => {},
  onFocus = () => {},
  placeholder,
  ...props
}: TextInputProps) => {
  const theme = useTheme();

  const borderColor = useRef(new Animated.Value(0)).current;
  const currentColor = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.lightGray, theme.colors.primary],
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
        {...props}
      >
        <StyledTextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={(e) => {
            onFocus(e);
            Animated.timing(borderColor, {
              toValue: 1,
              duration: 400,
              useNativeDriver: false,
            }).start();
          }}
          onBlur={(e) => {
            onBlur(e);
            Animated.timing(borderColor, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }).start();
          }}
          color="secondary"
          placeholder={placeholder}
        />
      </AnimatedView>
    </View>
  );
};

const StyledTextInput = styled.TextInput<ColorProps>`
  ${color};
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
