import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@lib/(.*)$": "<rootDir>/lib/$1",
    "^@providers/(.*)$": "<rootDir>/components/Providers/$1",
    "^@api/(.*)$": "<rootDir>/api/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@pages/(.*)$": "<rootDir>/components/pages/$1",
    "^@interfaces/(.*)$": "<rootDir>/interfaces/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default createJestConfig(customJestConfig);
