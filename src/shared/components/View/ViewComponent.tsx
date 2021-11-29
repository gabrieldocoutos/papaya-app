import { Animated } from "react-native";
import styled from "styled-components/native";
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

export const View = styled.View<ViewProps>`
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  ${border};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
`;

export const SafeAreaView = styled(CustomSafeAreaView)<ViewProps>`
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  ${border};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
`;

export const AnimatedView = styled(Animated.View)<ViewProps>`
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  ${border};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
`;
