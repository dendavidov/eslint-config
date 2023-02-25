module.exports = {
  extends: ['@commitlint/config-conventional'],
  // more rules: https://commitlint.js.org/#/reference-rules
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'test', 'build', 'chore', 'perf', 'refactor', 'docs', 'style', 'ci'],
    ],
    'subject-empty': [2, 'never'],
  },
};
