module.exports = {
  parser: '@typescript-eslint/parser',
  extnds: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    exmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {

  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};