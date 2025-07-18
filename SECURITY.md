# Security Policy

## Project Overview

`@dendavidov/eslint-config` is an ESLint flat configuration package for TypeScript-based Node.js projects. As a development tool that influences code quality and potentially CI/CD processes, we take security seriously to protect our users and the broader JavaScript/TypeScript ecosystem.

## Supported Versions

![npm version badge](https://img.shields.io/npm/v/@dendavidov/eslint-config?label=current%20npm%20version)

We provide security updates for the **current major version only** (v2.x.x).

**Node.js Requirement**: `≥22.0.0`

We follow semantic versioning and recommend always using the latest version for the most up-to-date security fixes. Security patches are released as patch versions (e.g., 2.1.3).

## Security Scope

This security policy covers:

**In Scope:**
- Vulnerabilities in the ESLint configuration rules that could lead to security bypasses
- Supply chain security issues in our dependencies
- Malicious code injection through configuration
- npm package integrity issues
- Dependency confusion attacks
- Vulnerabilities that could affect build processes or CI/CD pipelines

**Out of Scope:**
- Issues with ESLint itself (report to [ESLint's security team](https://eslint.org/docs/latest/contribute/report-bugs#reporting-security-vulnerabilities))
- Vulnerabilities in underlying Node.js runtime
- Issues with specific IDE integrations
- Performance issues that don't have security implications *(note: Regular Expression Denial of Service **(ReDoS)** is a security concern and **is** in scope)*
- False positives in ESLint rules

## Reporting a Vulnerability

### For Security Issues (Private Reporting)

If you discover a security vulnerability, please report it **privately** to protect our users while we develop a fix.

**Email**: [mail@dendavidov.com](mailto:mail@dendavidov.com)

**Please include:**
- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Any suggested mitigations
- Your contact information (if you'd like to be credited)

**Please DO NOT:**
- Create public GitHub issues for security vulnerabilities
- Discuss the vulnerability in public forums
- Share exploit code publicly before we've had time to respond

### For General Bugs

For non-security issues, please use our [GitHub Issues](https://github.com/dendavidov/eslint-config/issues).

## Response Process

We are committed to the following response timeline:

| Stage | Target Timeline |
|-------|----------------|
| **Initial Response** | Within 48 hours |
| **Vulnerability Confirmation** | Within 5 business days |
| **Security Advisory (if needed)** | Within 7 business days |
| **Fix Development** | Varies by complexity |
| **Patched Release** | See severity-based table below |

> We assign **CVSS v3.1 base scores** ([calculator](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator)) to all confirmed vulnerabilities and use these scores to determine priority and timelines.

### Patch release target by severity

| Severity | Patch Target |
|----------|--------------|
| Critical | 14 business days |
| High     | 30 business days |
| Medium   | 60 business days |
| Low      | Best effort |

### Our Response Process:

1. **Acknowledgment**: We'll confirm receipt of your report within 48 hours
2. **Initial Assessment**: We'll evaluate the severity and impact
3. **Investigation**: We'll reproduce and analyze the vulnerability
4. **Fix Development**: We'll develop and test a security patch
5. **Coordinated Disclosure**: We'll release the fix and update release notes with vulnerability details
6. **Credit**: We'll credit you in our release notes (if desired)

## Disclosure Policy

We follow a **coordinated disclosure** approach:

- **Embargo Period**: We request a 90-day embargo to develop and deploy fixes
- **Release Notes**: Security fixes will be clearly marked in release notes with vulnerability details
- **npm Security**: Critical vulnerabilities will be reported to npm security team
- **CVE Assignment**: We'll request CVE assignment for significant vulnerabilities


## Security Measures We Implement

### Package Distribution Security
- All releases are published to npm with appropriate access controls
- Package integrity is maintained through npm's built-in checksums
- We monitor for unauthorized package modifications

### Dependency Management
- Regular dependency updates using Dependabot
- Security scanning of all dependencies
- Minimal dependency footprint to reduce attack surface

### Development Process
- All changes require pull request reviews
- Automated security scanning in CI/CD
- Signed commits for maintainer contributions
- Protected main branch with required status checks

### Supply Chain Protection
- npm two-factor authentication (2FA) required for all maintainers
- Package signing when available
- Regular audits of package metadata

## Known Security Considerations

### ESLint Configuration Risks
- **Rule Injection**: Malicious rules could potentially execute code during linting
- **Path Traversal**: Incorrectly configured file patterns could access unintended files
- **Performance Attacks**: Complex regex patterns could cause ReDoS (Regular Expression Denial of Service)

### Mitigation Strategies
- We only use well-established, trusted ESLint plugins
- File patterns are carefully reviewed and tested
- Performance testing is included in our CI/CD pipeline
- Regular security audits of rule configurations

## Security Resources

- **ESLint Security**: [ESLint Security Policy](https://eslint.org/docs/latest/contribute/report-bugs#reporting-security-vulnerabilities)
- **Node.js Security**: [Node.js Security Reporting](https://nodejs.org/en/security/)
- **npm Security**: [npm Security Advisories](https://github.com/advisories?query=ecosystem%3Anpm)

## Acknowledgments

We appreciate the security research community and will acknowledge contributors in our release notes. If you prefer to remain anonymous, please let us know in your report.

## Questions?

If you have questions about this security policy or want to report a non-security issue, please:

- Check our [documentation](https://github.com/dendavidov/eslint-config/blob/main/README.md)
- Search [existing issues](https://github.com/dendavidov/eslint-config/issues)
- Contact us at [mail@dendavidov.com](mailto:mail@dendavidov.com)

---

**Last Updated**: 2025-07-17  
**Policy Version**: 1.0 