import React from "react";
import { Text } from "shared/components/Text/TextComponent";

const Logo = ({ size = 30 }: LogoProps) => {
  return (
    <Text fontSize={size} color="primary" fontFamily="Regular_Italic">
      papaya
    </Text>
  );
};

type LogoProps = {
  size?: number;
};

export { Logo };
