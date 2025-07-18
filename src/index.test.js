const config = require('./index.js');
const flatConfig = config.default || config;

describe('@dendavidov/eslint-config (flat config)', () => {
  it('should export a flat config array', () => {
    expect(Array.isArray(flatConfig)).toBe(true);
    expect(flatConfig.length).toBeGreaterThan(0);
  });

  it('should include TypeScript, Prettier, Jest, and Security plugins', () => {
    const main = flatConfig[0];
    expect(main.plugins).toHaveProperty('@typescript-eslint');
    expect(main.plugins).toHaveProperty('prettier');
    expect(main.plugins).toHaveProperty('jest');
    expect(main.plugins).toHaveProperty('security');
  });

  it('should apply Prettier, TypeScript, and Security recommended rules', () => {
    const main = flatConfig[0];
    expect(main.rules).toHaveProperty('prettier/prettier', 'error');
    const ruleKeys = Object.keys(main.rules);
    expect(ruleKeys).toEqual(
      expect.arrayContaining([
        '@typescript-eslint/ban-ts-comment',
        'prettier/prettier',
        'no-var',
        'security/detect-bidi-characters',
      ]),
    );
  });

  it('should include Jest rules for test files', () => {
    const testConfig = flatConfig.find(
      (c) => Array.isArray(c.files) && c.files.some((f) => f.includes('test')),
    );
    expect(testConfig).toBeDefined();
    expect(testConfig.plugins).toHaveProperty('jest');
    expect(testConfig.languageOptions.globals).toHaveProperty('describe');
    expect(testConfig.rules).toHaveProperty('jest/no-conditional-expect');
    expect(testConfig.files).toEqual(
      expect.arrayContaining(['**/__tests__/**/*', '**/*.{spec,test}.*']),
    );
    expect(testConfig.languageOptions.globals).toHaveProperty('describe');
    expect(testConfig.languageOptions.globals).toHaveProperty('it');
  });
});
