module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: 1,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "linebreak-style": 0,
    avoidEscape: true,
  },
};
