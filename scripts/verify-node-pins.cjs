'use strict';

/**
 * Ensures `.nvmrc` and `Dockerfile` FROM use the same Node patch.
 * Dependabot updates the Docker `node` image; mirror that version into `.nvmrc` in the same PR.
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function fail(message) {
  console.error(message);
  process.exit(1);
}

const nvmrcPath = path.join(root, '.nvmrc');
const dockerPath = path.join(root, 'Dockerfile');

const nvmrc = fs.readFileSync(nvmrcPath, 'utf8').trim().replace(/^v/, '');
if (!/^\d+\.\d+\.\d+$/.test(nvmrc)) {
  fail(`.nvmrc must be a pinned semver patch (e.g. 24.15.0), got "${nvmrc}"`);
}

const dockerfile = fs.readFileSync(dockerPath, 'utf8');
const fromMatch = dockerfile.match(/^FROM\s+node:([0-9]+(?:\.[0-9]+)*)/im);
if (!fromMatch) {
  fail('Dockerfile: expected a line like FROM node:x.y.z');
}
if (fromMatch[1] !== nvmrc) {
  fail(
    `Dockerfile node tag (${fromMatch[1]}) must match .nvmrc (${nvmrc})`,
  );
}

console.log(`Node pins aligned: ${nvmrc}`);
