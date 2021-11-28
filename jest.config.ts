import { Config } from "@jest/types";

// By default, all files inside `node_modules`  not transformed. But some 3rd party
// modules are published as untranspiled, Jest will not understand the code in these modules.
// To overcome this, exclude these modules in the ignore pattern.
const untranspiledModulePatterns = [
  "(jest-)?react-native",
  "@react-native-community",
  "expo(nent)?",
  "@expo(nent)?/.*",
  "react-navigation",
  "@react-navigation/.*",
  "@unimodules/.*",
  "unimodules",
  "sentry-expo",
  "native-base",
  "react-native-svg",
  "@react-native",
  "react-native",
  "@expo-google-fonts/lato",
];

const config: Config.InitialOptions = {
  preset: "jest-expo",
  transformIgnorePatterns: [`node_modules/(?!${untranspiledModulePatterns.join("|")})`],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.config.ts",
  ],
};

export default config;
