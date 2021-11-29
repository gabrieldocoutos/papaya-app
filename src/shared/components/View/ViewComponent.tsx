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
} from "styled-system";
import { SafeAreaView as CustomSafeAreaView } from "react-native-safe-area-context";

export const View = styled.View<ColorProps & SpaceProps & LayoutProps & FlexboxProps>`
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
`;

export const SafeAreaView = styled(CustomSafeAreaView)<
  ColorProps & SpaceProps & LayoutProps & FlexboxProps
>`
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
`;
