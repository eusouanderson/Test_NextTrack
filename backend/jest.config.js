import { defaults } from 'jest-config';

export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testMatch: ['**/?(*.)+(test|spec).ts?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', 
    },
  },
};
