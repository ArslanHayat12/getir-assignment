module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
  roots: ['test/'],

  collectCoverageFrom: ['**/*.js'],
  transformIgnorePatterns: [],
};
