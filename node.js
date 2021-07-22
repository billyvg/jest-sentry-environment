const createEnvironment = require('./createEnvironment');

// create + export a default environment
module.exports = createEnvironment({
  baseEnvironment: require('jest-environment-node'),
});
