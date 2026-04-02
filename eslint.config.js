const playwright = require('eslint-plugin-playwright');
const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');
const prettier = require('eslint-config-prettier/flat');

module.exports = [
  {
    ignores: [
      'blob-report/**',
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
  {
    files: ['playwright.config.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.node,
    },
  },
  {
    files: ['tests/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    ...playwright.configs['flat/recommended'],
  },
  prettier,
];
