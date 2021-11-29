import { Animated } from "react-native";
import styled, { css } from "styled-components/native";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
} from "styled-system";
import { SafeAreaView as CustomSafeAreaView } from "react-native-safe-area-context";

type ViewProps = ColorProps & SpaceProps & LayoutProps & FlexboxProps & BorderProps;

const BaseStyles = css<Pick<FlexboxProps, "flexDirection">>`
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  ${border};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
`;

export const View = styled.View<ViewProps>`
  ${BaseStyles};
`;

export const SafeAreaView = styled(CustomSafeAreaView)<ViewProps>`
  ${BaseStyles};
`;

export const AnimatedView = styled(Animated.View)<ViewProps>`
  ${BaseStyles};
`;
