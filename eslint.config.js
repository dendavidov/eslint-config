'use strict';

/**
 * This repository’s ESLint flat config (ESLint 9+).
 * Extends the published package in `src/index.js` with overrides for CommonJS in this repo.
 */
const base = require('./src/index.js');

module.exports = [
  {
    ignores: ['**/node_modules/**', '**/pnpm-lock.yaml', '**/.git/**'],
  },
  ...base,
  {
    files: ['eslint.config.js', 'src/**/*.js', 'scripts/**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'import/order': 'off',
    },
  },
  {
    files: ['src/**/*.test.js'],
    rules: {
      'security/detect-non-literal-fs-filename': 'off',
    },
  },
];
