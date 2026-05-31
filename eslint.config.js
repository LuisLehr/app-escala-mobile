const { defineConfig } = require('eslint-define-config');
const angularEslintPlugin = require('@angular-eslint/eslint-plugin');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');

module.exports = defineConfig([
  {
    ignores: ["projects/**/*"],
  },
  {
    files: ["*.ts"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json", // O caminho correto para seu tsconfig
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@angular-eslint': angularEslintPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Page", "Component"]
        }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case"
        }
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase"
        }
      ],
      '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    },
  },
  {
    files: ["*.html"],
    languageOptions: {
      parserOptions: {}
    },
    rules: {}
  }
]);
