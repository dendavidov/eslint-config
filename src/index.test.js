const config = require('./index');

describe('index', () => {
  it('has extends section', () => {
    expect(Array.isArray(config.extends)).toBeTruthy();
  });
});
