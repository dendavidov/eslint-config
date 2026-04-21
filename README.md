[![npm version](https://img.shields.io/npm/v/@dendavidov/eslint-config.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config)
[![Downloads](https://img.shields.io/npm/dm/@dendavidov/eslint-config.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config?ref=badge_shield)
[![CodeQL](https://github.com/dendavidov/eslint-config/actions/workflows/codeql.yml/badge.svg)](https://github.com/dendavidov/eslint-config/actions/workflows/codeql.yml)
[![checks](https://github.com/dendavidov/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/dendavidov/eslint-config/actions/workflows/test.yml)

# @dendavidov/eslint-config

Opinionated ESLint flat config for TypeScript-based Node.js projects.

- **ESLint 9+ flat config**
- **Node.js 24.x required** (`engines.node`); this repo pins an exact patch in `.nvmrc` / `Dockerfile` for CI
- **TypeScript, Prettier, Jest, and Security rules out of the box**
- **Jest globals automatically available in test files**
- **`eslint-plugin-import`** with **`eslint-import-resolver-typescript`** (and node) so `import/no-unresolved` respects `tsconfig.json` / path aliases where configured

## Installation

Add a single dev dependency — **ESLint is bundled** as a normal dependency of `@dendavidov/eslint-config`, so you do not install `eslint`, plugins, or parsers yourself; they come in transitively.

```bash
pnpm add -D @dendavidov/eslint-config
# or: npm i -D @dendavidov/eslint-config
```

Run the CLI with `npx eslint` or `pnpm exec eslint` (or a `lint` script that calls `eslint`), which resolves the binary from your install tree. Your project pins one package version; ESLint’s semver is chosen by this config’s `dependencies`.

## Usage

Create `eslint.config.js` in the root of your project:

**CommonJS:**
```js
const config = require('@dendavidov/eslint-config');
module.exports = config;
```

**ESM:**
```js
import config from '@dendavidov/eslint-config';
export default config;
```

Or extend with your own rules:
```js
import config from '@dendavidov/eslint-config';

export default [
  ...config,
  {
    rules: {
      // Your custom rules
    }
  }
];
```

Add script to package.json:
```json
{
  "scripts": {
    "lint": "eslint './src/**/*.{ts,tsx,js,jsx}'"
  }
}
```

## Node.js Version

This config requires **Node.js 24.x** (see `engines.node` on npm). Development of this package uses a **pinned patch** in `.nvmrc` (and `Dockerfile`) so CI and Dependabot stay aligned.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://dendavidov.mit-license.org/)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config?ref=badge_large)
