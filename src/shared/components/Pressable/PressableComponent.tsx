import React, { Fragment } from "react";
import {
  GestureResponderEvent,
  PressableProps as RnPressableProps,
  PressableStateCallbackType,
} from "react-native";
import styled from "styled-components/native";
import { space, SpaceProps, layout, LayoutProps, border, BorderProps } from "styled-system";
import { LinearGradient } from "expo-linear-gradient";

import { Text } from "../Text/TextComponent";

const pressedStyle = ({ pressed }: PressableStateCallbackType) => ({
  opacity: pressed ? 0.8 : 1,
});

const Pressable = ({ variant = "primary", label, ...props }: PressableProps) => {
  return (
    <StyledPressable style={pressedStyle} {...variantStyles[variant]["pressableStyles"]} {...props}>
      {() => (
        <Fragment>
          {variant === "secondary" && (
            <LinearGradient
              // Background Linear Gradient
              colors={["#FF6243", "#f14c26"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 42,
                borderRadius: 6,
              }}
            />
          )}
          <Text {...variantStyles[variant]["textStyles"]} textAlign="center">
            {label}
          </Text>
        </Fragment>
      )}
    </StyledPressable>
  );
};

type BasePressableProps = SpaceProps & LayoutProps & BorderProps;

const StyledPressable = styled.Pressable<BasePressableProps>`
  height: 44px;
  border-radius: 6px;
  border: 1px solid transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
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
      borderColor: "white",
    },
  },
};

interface PressableProps extends Omit<RnPressableProps, "onPress">, BasePressableProps {
  variant?: "primary" | "secondary";
  label: string;
  onPress(event: React.FormEvent<HTMLFormElement> | GestureResponderEvent | undefined): void;
}

export { Pressable };
