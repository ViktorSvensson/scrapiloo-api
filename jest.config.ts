import type {Config} from "@jest/types";
export const config: Config.InitialOptions = {
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  testRegex: "(/src/.*\\.(test|spec))\\.(jsx?|tsx?)$",
  testEnvironment: "node",
  maxWorkers: 1,
};
export default config;
