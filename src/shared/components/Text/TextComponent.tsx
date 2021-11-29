import React from "react";
import styled from "styled-components/native";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  FontFamilyProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
} from "styled-system";

type BaseTextProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  FontFamilyProps &
  TypographyProps &
  LayoutProps;

const StyledText = styled.Text<BaseTextProps>`
  ${color};
  ${space};
  ${fontSize}
  ${fontFamily}
  ${typography}
  ${layout}
`;

const buildFontWeight = (fontWeight: TextProps["fontFamily"]) => {
  switch (fontWeight) {
    case "Thin":
    case "Thin_Italic":
      return 100;
    case "Light":
    case "Light_Italic":
      return 300;
    case "Regular":
    case "Regular_Italic":
      return 400;
    case "Bold":
    case "Bold_Italic":
      return 700;
    case "Black":
    case "Black_Italic":
      return 900;
  }
};

const Text = ({
  children,
  color = "primary",
  fontFamily = "Regular",
  fontSize = 16,
  ...props
}: TextProps) => {
  const font = `Lato_${buildFontWeight(fontFamily) + fontFamily}`;
  return (
    <StyledText fontFamily={font} color={color} fontSize={fontSize} {...props}>
      {children}
    </StyledText>
  );
};

export interface TextProps extends BaseTextProps {
  children: string;
  fontFamily?:
    | "Thin"
    | "Thin_Italic"
    | "Light"
    | "Light_Italic"
    | "Regular"
    | "Regular_Italic"
    | "Bold"
    | "Bold_Italic"
    | "Black"
    | "Black_Italic";
}

export { Text };
