'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.join(__dirname, '..');
const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'eslint-config-package-'));
const packageDirectory = path.join(temporaryDirectory, 'package');
const consumerDirectory = path.join(temporaryDirectory, 'consumer');
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    stdio: options.capture ? 'pipe' : 'inherit',
    ...options,
  });

  if (result.status !== 0) {
    if (options.capture) {
      process.stderr.write(result.stdout || '');
      process.stderr.write(result.stderr || '');
    }
    throw new Error(`${command} ${args.join(' ')} failed`);
  }

  return result.stdout;
}

try {
  fs.mkdirSync(packageDirectory);
  fs.mkdirSync(consumerDirectory);

  const packOutput = run(
    npm,
    ['pack', '--json', '--ignore-scripts', '--pack-destination', packageDirectory],
    { capture: true },
  );
  const [{ filename, files }] = JSON.parse(packOutput);
  const packagedPaths = new Set(files.map((file) => file.path));

  for (const requiredPath of [
    'src/index.js',
    'src/index.d.ts',
    'README.md',
    'LICENSE',
    'package.json',
  ]) {
    if (!packagedPaths.has(requiredPath)) {
      throw new Error(`npm package is missing ${requiredPath}`);
    }
  }

  fs.writeFileSync(
    path.join(consumerDirectory, 'package.json'),
    JSON.stringify({ name: 'eslint-config-consumer', private: true }, null, 2),
  );
  fs.writeFileSync(
    path.join(consumerDirectory, 'eslint.config.js'),
    "module.exports = require('@dendavidov/eslint-config');\n",
  );
  fs.writeFileSync(
    path.join(consumerDirectory, 'tsconfig.json'),
    JSON.stringify({ compilerOptions: { strict: true }, include: ['example.ts'] }),
  );
  fs.writeFileSync(
    path.join(consumerDirectory, 'example.ts'),
    'const answer: number = 42;\nconsole.log(answer);\n',
  );

  const tarball = path.join(packageDirectory, filename);
  run(npm, ['install', '--ignore-scripts', '--no-audit', '--no-fund', tarball], {
    cwd: consumerDirectory,
  });

  run(process.execPath, ['node_modules/eslint/bin/eslint.js', 'example.ts'], {
    cwd: consumerDirectory,
  });

  console.log('Packed package installs and lints in a clean consumer project.');
} finally {
  fs.rmSync(temporaryDirectory, { recursive: true, force: true });
}
