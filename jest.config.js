/** @type {import('ts-jest').JestConfigWithTsJest} **/


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // For path alias
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Handle TypeScript files
    "^.+.tsx?$": ["ts-jest",{}], 
  },
};
