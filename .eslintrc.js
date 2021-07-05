module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "no-unused-vars": 2,
    "no-undef": 2,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2017,
  },
};
