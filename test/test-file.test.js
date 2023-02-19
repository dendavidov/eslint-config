// eslint-disable-next-line @typescript-eslint/no-var-requires
const { testFunc } = require('./test-file');
describe('test-file', function () {
  it('returns correct value', () => {
    expect(testFunc(1)).toBe(3);
  });
});
