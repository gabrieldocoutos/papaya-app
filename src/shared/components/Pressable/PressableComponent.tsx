import React from "react";
import { PressableProps as RnPressibleProps, PressableStateCallbackType } from "react-native";
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
import { Text } from "shared/components";

const pressedStyle = ({ pressed }: PressableStateCallbackType) => ({
  opacity: pressed ? 0.8 : 1,
});

const Pressable = ({ variant = "primary", label, ...props }: PressableProps) => {
  return (
    <StyledPressable style={pressedStyle} {...variantStyles[variant]["pressableStyles"]} {...props}>
      {() => (
        <Text {...variantStyles[variant]["textStyles"]} textAlign="center">
          {label}
        </Text>
      )}
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable<ColorProps & SpaceProps & LayoutProps & BorderProps>`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  ${color};
  ${space};
  ${layout};
  ${border};
`;

const variantStyles = {
  primary: {
    textStyles: {
      color: "primary",
    },
    pressableStyles: {
      backgroundColor: "white",
    },
  },
  secondary: {
    textStyles: {
      color: "white",
    },
    pressableStyles: {
      backgroundColor: "primary",
      borderColor: "white",
    },
  },
};

interface PressableProps
  extends RnPressibleProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    BorderProps {
  variant?: "primary" | "secondary";
  label: string;
}

export { Pressable };
