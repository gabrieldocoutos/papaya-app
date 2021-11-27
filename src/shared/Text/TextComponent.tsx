import React from 'react';
import styled from 'styled-components/native';
import {color, ColorProps, space, SpaceProps} from 'styled-system';

const StyledText = styled.Text<ColorProps&SpaceProps>`
  ${color};
  ${space};
`;

const Text = ({children, color = 'primary', ...rest}: TextComponent) =>
  <StyledText color={color} {...rest} >{children}</StyledText>;

interface TextComponent extends ColorProps, SpaceProps {
  children: string
}


export {Text};
