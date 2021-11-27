import React from 'react';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  FontFamilyProps,
}
  from 'styled-system';

// export const Lato_100Thin: number;
// export const Lato_100Thin_Italic: number;
// export const Lato_300Light: number;
// export const Lato_300Light_Italic: number;
// export const Lato_400Regular: number;
// export const Lato_400Regular_Italic: number;
// export const Lato_700Bold: number;
// export const Lato_700Bold_Italic: number;
// export const Lato_900Black: number;
// export const Lato_900Black_Italic: number;

const StyledText = styled.Text<ColorProps&SpaceProps&FontSizeProps&FontFamilyProps>`
  ${color};
  ${space};
  ${fontSize}
  ${fontFamily}
`;

const buildFontWeight = (fontWeight: TextComponent['fontFamily']) => {
  switch (fontWeight) {
    case 'Thin':
    case 'Thin_Italic':
      return 100;
    case 'Light':
    case 'Light_Italic':
      return 300;
    case 'Regular':
    case 'Regular_Italic':
      return 400;
    case 'Bold':
    case 'Bold_Italic':
      return 700;
    case 'Black':
    case 'Black_Italic':
      return 900;
  }
};


const Text = ({children, color = 'primary', fontFamily = 'Regular', fontSize = 16, ...rest}: TextComponent) => {
  const font = `Lato_${buildFontWeight(fontFamily) + fontFamily}`;
  return <StyledText fontFamily={font} color={color} fontSize={fontSize} {...rest} >{children}</StyledText>;
};


interface TextComponent extends ColorProps, SpaceProps, FontSizeProps {
  children: string
  fontFamily?:
    'Thin' |
    'Thin_Italic' |
    'Light' |
    'Light_Italic' |
    'Regular' |
    'Regular_Italic' |
    'Bold' |
    'Bold_Italic' |
    'Black' |
    'Black_Italic'
}


export {Text};
