'use strict';

/**
 * Repo-only ESLint config. The published rules in `src/index.js` assume TS/ESM-style
 * projects; this repo uses CommonJS, so we relax a few rules for our own files.
 */
const base = require('./src/index.js');

module.exports = [
  ...base,
  {
    files: ['eslint.config.js', '.eslintrc.js', 'src/**/*.js', 'scripts/**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'import-x/order': 'off',
    },
  },
  {
    files: ['src/**/*.test.js'],
    rules: {
      'security/detect-non-literal-fs-filename': 'off',
    },
  },
];
