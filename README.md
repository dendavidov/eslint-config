[![npm version](https://img.shields.io/npm/v/@dendavidov/eslint-config.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config)
[![Downloads](https://img.shields.io/npm/dm/@dendavidov/eslint-config.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config?ref=badge_shield)
[![CodeQL](https://github.com/dendavidov/eslint-config/actions/workflows/codeql.yml/badge.svg)](https://github.com/dendavidov/eslint-config/actions/workflows/codeql.yml)
[![checks](https://github.com/dendavidov/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/dendavidov/eslint-config/actions/workflows/test.yml)

# @dendavidov/eslint-config

Opinionated eslint-config for TypeScript-based Node.js services.

## Installation

```bash
npm i -D @dendavidov/eslint-config
```

## Usage

Add .eslintrc.json in the root of your project
```json
{
  "extends": "@dendavidov/eslint-config"
}
```
Add script to package.json -> scripts:
```
{
  ...
  "scripts": {
    ...
    "lint": "eslint './src/**/*.{ts,tsx}'"
  },
  ...
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://dendavidov.mit-license.org/)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config?ref=badge_large)
