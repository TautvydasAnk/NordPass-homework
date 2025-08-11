import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import playwright from 'eslint-plugin-playwright';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  playwright.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^']],
        },
      ],
      'simple-import-sort/exports': 'error',
      'playwright/expect-expect': 'off',
      'playwright/no-conditional-in-test': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
          argsIgnorePattern: '^_$',
          varsIgnorePattern: '^_$',
        },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: true,
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
          overrides: {
            constructors: 'off',
            accessors: 'explicit',
            methods: 'no-public',
            properties: 'off',
            parameterProperties: 'explicit',
          },
        },
      ],
    },
  },
  {
    ignores: ['eslint.config.mjs', 'playwright.config.ts'],
  }
);
