const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const jestPlugin = require('eslint-plugin-jest');
const securityPlugin = require('eslint-plugin-security');
const importPlugin = require('eslint-plugin-import');

/** @type {import('@eslint/eslintrc').FlatConfig[]} */
module.exports = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      jest: jestPlugin,
      security: securityPlugin,
      import: importPlugin,
    },
    rules: {
      // use flat config recommended rules from @typescript-eslint
      ...tseslint.configs['flat/eslint-recommended'].rules,
      ...tseslint.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',

      // Import rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unused-modules': 'warn',
      'import/no-relative-parent-imports': 'off',
      'import/no-relative-packages': 'warn',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },
  {
    files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
    languageOptions: {
      globals: { ...jestPlugin.environments.globals.globals },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'jest/no-conditional-expect': 'error',
      'jest/no-identical-title': 'error',
      'jest/no-interpolation-in-snapshots': 'error',
      'jest/no-jasmine-globals': 'error',
      'jest/no-mocks-import': 'error',
      'jest/valid-describe-callback': 'error',
      'jest/valid-expect': 'error',
      'jest/valid-expect-in-promise': 'error',
      'jest/valid-title': 'warn',
    },
  },
];
