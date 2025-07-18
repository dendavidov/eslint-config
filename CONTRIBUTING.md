# Contributing to @dendavidov/eslint-config

Thanks for your interest in contributing! This is a small ESLint configuration package, so contributions are typically minimal, but all help is appreciated.

## Getting Started

### Prerequisites
- Node.js 22.0.0 or higher
- npm

### Setup
1. Fork and clone the repository
2. Run `npm install`
3. Make your changes
4. Test with `npm test`

## What to Contribute

### Welcome Changes
- Bug fixes in ESLint rules or configuration
- Documentation improvements
- TypeScript definition updates
- Security rule enhancements

### Before Contributing
- Check if an issue already exists for your change
- For significant changes, open an issue first to discuss

## Development

### Scripts
- `npm test` - Run tests
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting

### Making Changes
1. Create a feature branch: `git checkout -b fix/your-change`
2. Make your changes in the `src/` directory
3. Ensure tests pass: `npm test`
4. Commit using [conventional commits](https://www.conventionalcommits.org/):
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `test:` for tests

### Example Commits
```bash
fix: correct TypeScript parser configuration
docs: update installation instructions
feat: add new security rule for XSS prevention
```

## Pull Requests

1. Ensure all tests pass
2. Follow the existing code style
3. Include a clear description of your changes
4. Reference any related issues

## Questions?

- Open an [issue](https://github.com/dendavidov/eslint-config/issues) for bugs or feature requests
- Email [mail@dendavidov.com](mailto:mail@dendavidov.com) for security issues

## Code of Conduct

Please be respectful and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

This project uses automated releases via semantic-release based on conventional commits. 