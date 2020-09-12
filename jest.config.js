import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig';

export const preset = 'jest-preset-angular';
export const testMatch = ['**/+(*.)+(spec).+(ts)'];
export const setupFilesAfterEnv = ['<rootDir>/test.ts'];
export const moduleNameMapper = pathsToModuleNameMapper(
  compilerOptions.paths || {},
  {
    prefix: '<rootDir>/',
  }
);
