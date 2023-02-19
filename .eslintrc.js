const base = require('./src');
const jest = require('./src/jest');

module.exports = {
  ...base,
  ...jest,
  plugins: [...base.plugins, ...jest.plugins],

};
