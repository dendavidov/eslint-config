const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const jestPlugin = require('eslint-plugin-jest');
const securityPlugin = require('eslint-plugin-security');
const { importX } = require('eslint-plugin-import-x');

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
      'import-x': importX,
    },
    rules: {
      // use flat config recommended rules from @typescript-eslint
      ...tseslint.configs['flat/eslint-recommended'].rules,
      ...tseslint.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',

      // Import rules (eslint-plugin-import-x)
      'import-x/no-unresolved': 'error',
      'import-x/named': 'error',
      'import-x/default': 'error',
      'import-x/namespace': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/order': [
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
      // ESLint 10 removed FileEnumerator; import-x cannot enforce this until it ships a replacement (rule is a no-op on v10).
      'import-x/no-unused-modules': 'off',
      'import-x/no-relative-parent-imports': 'off',
      'import-x/no-relative-packages': 'warn',
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'import-x/parsers': {
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
