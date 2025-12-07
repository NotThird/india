/**
 * ESLint Configuration
 *
 * Purpose: Enforce code quality standards for Astro and TypeScript files.
 */
module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      // Define the configuration for `.astro` files
      files: ['*.astro'],
      // Allows Astro components to be parsed
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // Astro-specific rules can be added here
      },
    },
    {
      // Define the configuration for TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    // Project-wide rules
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
