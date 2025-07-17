[![npm version](https://img.shields.io/npm/v/@dendavidov/eslint-config.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config)
[![Downloads](https://img.shields.io/npm/dm/@dendavidov/eslint-config.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config?ref=badge_shield)
[![CodeQL](https://github.com/dendavidov/eslint-config/actions/workflows/codeql.yml/badge.svg)](https://github.com/dendavidov/eslint-config/actions/workflows/codeql.yml)
[![checks](https://github.com/dendavidov/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/dendavidov/eslint-config/actions/workflows/test.yml)

# @dendavidov/eslint-config

Opinionated ESLint flat config for TypeScript-based Node.js projects.

- **ESLint 9+ flat config**
- **Node.js 22.x LTS or higher required**
- **TypeScript, Prettier, Jest, and Security rules out of the box**

## Installation

```bash
npm i -D @dendavidov/eslint-config
```

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

This config requires **Node.js 22.x LTS or higher**.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://dendavidov.mit-license.org/)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config?ref=badge_large)
