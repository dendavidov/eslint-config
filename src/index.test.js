const fs = require('fs');
const os = require('os');
const path = require('path');
const { ESLint } = require('eslint');
const config = require('./index.js');
const flatConfig = config.default || config;

describe('@dendavidov/eslint-config (flat config)', () => {
  it('should export a flat config array', () => {
    expect(Array.isArray(flatConfig)).toBe(true);
    expect(flatConfig.length).toBeGreaterThan(0);
  });

  it('should include TypeScript, Prettier, Jest, Security, and Import plugins', () => {
    const main = flatConfig[0];
    expect(main.plugins).toHaveProperty('@typescript-eslint');
    expect(main.plugins).toHaveProperty('prettier');
    expect(main.plugins).toHaveProperty('jest');
    expect(main.plugins).toHaveProperty('security');
    expect(main.plugins).toHaveProperty('import');
  });

  it('should apply Prettier, TypeScript, Security, and Import rules', () => {
    const main = flatConfig[0];
    expect(main.rules).toHaveProperty('prettier/prettier', 'error');
    expect(main.rules).toHaveProperty('import/no-unresolved', 'error');
    expect(main.rules).toHaveProperty('import/order');
    const ruleKeys = Object.keys(main.rules);
    expect(ruleKeys).toEqual(
      expect.arrayContaining([
        '@typescript-eslint/ban-ts-comment',
        'prettier/prettier',
        'no-var',
        'security/detect-bidi-characters',
        'import/no-unresolved',
        'import/order',
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

  it('should include import settings with TypeScript resolver', () => {
    const main = flatConfig[0];
    expect(main.settings).toHaveProperty('import/resolver');
    expect(main.settings['import/resolver']).toHaveProperty('typescript');
    expect(main.settings['import/resolver']).toHaveProperty('node');
    expect(main.settings['import/parsers']).toHaveProperty('@typescript-eslint/parser');
  });

  describe('integration usage', () => {
    const tempDirs = [];
    const configFilePath = path.join(__dirname, 'index.js');

    const createTempProject = () => {
      const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'eslint-config-'));
      tempDirs.push(cwd);

      const srcDir = path.join(cwd, 'src');
      const testDir = path.join(cwd, '__tests__');

      fs.mkdirSync(srcDir, { recursive: true });
      fs.mkdirSync(testDir, { recursive: true });

      fs.writeFileSync(
        path.join(cwd, 'tsconfig.json'),
        JSON.stringify(
          {
            compilerOptions: {
              target: 'ES2022',
              module: 'ESNext',
              moduleResolution: 'Bundler',
              allowImportingTsExtensions: true,
            },
            include: ['src/**/*', '__tests__/**/*'],
          },
          null,
          2,
        ),
      );

      fs.writeFileSync(
        path.join(srcDir, 'example.ts'),
        'export const answer: number = 42;\n\nexport function add(a: number, b: number) {\n  return a + b;\n}\n',
      );

      fs.writeFileSync(
        path.join(testDir, 'example.test.ts'),
        'import { add } from "../src/example";\n\ndescribe("math", () => {\n  it("works", () => {\n    expect(add(1, 1)).toBe(2);\n  });\n});\n',
      );

      return cwd;
    };

    afterAll(() => {
      for (const dir of tempDirs) {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    });

    it('lints a TypeScript project without throwing errors', async () => {
      const cwd = createTempProject();
      const eslint = new ESLint({
        cwd,
        overrideConfigFile: configFilePath,
        overrideConfig: flatConfig,
        errorOnUnmatchedPattern: false,
      });

      const results = await eslint.lintFiles(['src/**/*.ts']);

      expect(results).toHaveLength(1);
      expect(results[0].errorCount).toBe(0);
      expect(results[0].warningCount).toBe(0);
    });

    it('applies test overrides with Jest globals and rules', async () => {
      const cwd = createTempProject();
      const eslint = new ESLint({
        cwd,
        overrideConfigFile: configFilePath,
        overrideConfig: flatConfig,
        errorOnUnmatchedPattern: false,
      });

      const testFilePath = path.join(cwd, '__tests__', 'example.test.ts');
      const testConfig = await eslint.calculateConfigForFile(testFilePath);

      expect(testConfig.plugins).toHaveProperty('jest');
      expect(testConfig.languageOptions?.globals).toHaveProperty('describe');
      expect(testConfig.languageOptions?.globals).toHaveProperty('it');

      const results = await eslint.lintFiles(['__tests__/**/*.ts']);

      expect(results).toHaveLength(1);
      expect(results[0].errorCount).toBe(0);
      expect(results[0].warningCount).toBe(0);
    });
  });
});
