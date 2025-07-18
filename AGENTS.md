# AGENTS.md

## Project Overview

This is `@dendavidov/eslint-config` - an opinionated ESLint flat configuration package specifically designed for TypeScript-based Node.js projects. The package provides a ready-to-use ESLint configuration that enforces coding standards and integrates seamlessly with modern development tools.

**Key Characteristics:**
- **Target Environment**: Node.js 22.x LTS or higher
- **Configuration Format**: ESLint 9+ flat config (modern approach)
- **Language Focus**: TypeScript with JavaScript support
- **Integration**: Prettier for code formatting, Jest for testing
- **Distribution**: Published to npm as a public package

## Architecture and Technical Decisions

### Configuration Structure
The main configuration (`src/index.js`) exports an array of flat config objects:
1. **Main Config**: Applies to all `.ts`, `.tsx`, `.js`, `.jsx` files with TypeScript, Prettier, and Jest plugins
2. **Test Config**: Additional Jest-specific rules for test files (`**/__tests__/**/*`, `**/*.{spec,test}.*`)

### Key Dependencies
- `@typescript-eslint/eslint-plugin` & `@typescript-eslint/parser`: TypeScript support
- `eslint-plugin-prettier` & `eslint-config-prettier`: Prettier integration
- `eslint-plugin-jest`: Jest testing framework support
- `eslint-plugin-import`: Import/export linting

### Design Philosophy
- **Opinionated**: Enforces consistent coding standards without excessive configuration
- **Modern**: Uses ESLint 9+ flat config format (not legacy `.eslintrc`)
- **Comprehensive**: Covers TypeScript, formatting, and testing in one package
- **Minimal Dependencies**: Only includes essential plugins

## Development Guidelines

### Code Standards
1. **Node.js Compatibility**: All code must be compatible with Node.js 22+
2. **Module Format**: Use CommonJS (`module.exports`, `require()`) for main config
3. **TypeScript Definitions**: Include comprehensive `.d.ts` files for TypeScript users
4. **Testing**: All features must have Jest tests with meaningful assertions

### File Structure Rules
```
src/
├── index.js          # Main ESLint flat config export
├── index.d.ts        # TypeScript definitions
└── index.test.js     # Jest tests for configuration validation
```

### Configuration Principles
- **Flat Config Only**: Never use legacy `.eslintrc` format
- **Plugin Integration**: Ensure proper plugin loading and rule application
- **Extensibility**: Users should be able to extend/override rules easily
- **Performance**: Keep rule set focused and avoid redundant rules

## Critical Constraints

### ESLint Version Requirements
- **Minimum**: ESLint 9.31.0+ (for flat config support)
- **Breaking Change**: This package does NOT support legacy ESLint configurations
- **Migration**: Users upgrading from ESLint <9 need configuration migration

### Node.js Version Policy
- **Supported**: Node.js 22.x LTS and higher only
- **Engine Enforcement**: `package.json` enforces this via `engines.node`
- **Rationale**: Leverages modern Node.js features and ESM support

### Package Distribution
- **Registry**: npm public registry only
- **Scope**: Uses `@dendavidov` scoped package name
- **Versioning**: Follow semantic versioning strictly
- **Files**: Only include essential files (`src/index.js`, `src/index.d.ts`, `LICENSE`, `README.md`)

## Common Tasks and Patterns

### Adding New Rules
When adding rules to the configuration:
1. Consider impact on existing users
2. Test with common TypeScript/Node.js patterns
3. Ensure rules don't conflict with Prettier
4. Add corresponding tests in `src/index.test.js`

### Testing Configuration Changes
```javascript
// Always validate these aspects:
- Flat config array structure
- Plugin availability and loading
- Rule activation and severity
- File pattern matching for test configs
```

### Integration Testing
The package should work seamlessly in:
- Pure TypeScript projects
- Mixed TypeScript/JavaScript projects
- Projects with Jest testing
- Projects using Prettier

## Maintenance Philosophy

### Release Strategy
- **Patch**: Bug fixes, rule refinements
- **Minor**: New non-breaking rules, dependency updates
- **Major**: Breaking changes, ESLint major version updates

### Dependency Management
- Keep dependencies minimal and focused
- Regular updates for security and compatibility
- Pin major versions to prevent breaking changes
- Test dependency updates thoroughly

### User Experience Priorities
1. **Zero Configuration**: Should work out-of-the-box
2. **Clear Errors**: Helpful error messages for misconfigurations
3. **Documentation**: Comprehensive README with examples
4. **Backwards Compatibility**: Within major versions

## Anti-Patterns to Avoid

### Configuration Anti-Patterns
- ❌ Don't mix flat config with legacy `.eslintrc` patterns
- ❌ Don't include rules that conflict with Prettier
- ❌ Don't make Node.js version assumptions beyond stated requirements
- ❌ Don't include overly opinionated style rules (let Prettier handle formatting)

### Code Anti-Patterns
- ❌ Don't use ES modules in main config (CommonJS for compatibility)
- ❌ Don't hardcode file paths or make filesystem assumptions
- ❌ Don't include development dependencies in main package
- ❌ Don't create circular dependencies between rules

### Distribution Anti-Patterns
- ❌ Don't include test files in npm package
- ❌ Don't include development configuration files
- ❌ Don't bundle dependencies unnecessarily
- ❌ Don't forget to test package installation in clean environments

## Context for AI Agents

When working on this codebase:

1. **Primary Goal**: Maintain a stable, opinionated ESLint configuration that "just works"
2. **User Base**: JavaScript/TypeScript developers who want consistent linting without configuration overhead
3. **Compatibility**: Always consider impact on existing users when making changes
4. **Quality**: This is a foundational tool - reliability is paramount
5. **Simplicity**: Resist feature creep - keep focused on core ESLint configuration

### Key Success Metrics
- Package installs and works immediately with `eslint.config.js`
- Zero configuration needed for common TypeScript/Node.js projects
- Compatible with major IDEs (VS Code, WebStorm, etc.)
- Fast linting performance
- Clear, actionable lint error messages

Remember: This package is infrastructure that other developers depend on. Changes should be deliberate, well-tested, and backward-compatible whenever possible. 