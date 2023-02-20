const config = require('./jest');

describe('jest', () => {
  it('has plugins section', () => {
    expect(Array.isArray(config.plugins)).toBeTruthy();
  });
});
