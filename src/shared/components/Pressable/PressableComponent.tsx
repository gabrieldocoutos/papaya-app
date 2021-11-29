import React from "react";
import { PressableProps as RnPressibleProps, PressableStateCallbackType } from "react-native";
import styled from "styled-components/native";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  TypographyProps,
  layout,
  LayoutProps,
} from "styled-system";
import { Text } from "shared/components";

const Pressable = ({ variant = "primary", label, textProps = {}, ...props }: PressableProps) => {
  const isPrimary = variant === "primary";

  return <StyledPressable {...props}>{() => <Text>{label}</Text>}</StyledPressable>;
};

const StyledPressable = styled.Pressable<ColorProps & SpaceProps & LayoutProps>`
  ${color};
  ${space};
  ${layout};
  background-color: white;
  padding: 12px;
  border-radius: 6px;
  ${(props) => console.log(props) || (props.pressed && "opacity: 0.8;")}
`;

interface PressableProps extends RnPressibleProps {
  variant?: "primary" | "secondary";
  label: string;
  textProps: TypographyProps;
}

export { Pressable };
