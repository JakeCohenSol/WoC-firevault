// src/azure-sa/eslint.config.js
export default [
    {
      ignores: ['node_modules/**'],
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        // Add more rules here as needed
      },
    },
  ];
  