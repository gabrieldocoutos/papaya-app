import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      lightGray: string;
      screenBackgroundColor: string;
    };
  }
}
