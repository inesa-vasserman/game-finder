import jsPlugin from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import unicornPlugin from 'eslint-plugin-unicorn';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

const defaultIgnores = [
  '**/bower_components/**',
  'coverage/**',
  '{tmp,temp}/**',
  '**/*.min.js',
  'vendor/**',
  'dist/**',
  'build/**',
  'tap-snapshots/*.{cjs,js}',
];

// console.log(reactHooksPlugin.configs['recommended-latest'])

// configuration objects that apply to file types
console.log(reactHooksPlugin);

export default defineConfig([
  {
    name: 'ignores',
    ignores: defaultIgnores,
  },
  {
    name: 'base-js',
    // glob patterns: https://developers.tetrascience.com/docs/common-glob-pattern
    files: ['**/*.{js,jsx}'],
    plugins: {
      js: jsPlugin,
    },
    extends: ['js/recommended', stylisticPlugin.configs.customize({
      indent: 2,
      semi: true,
      jsx: true,
    })],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    name: 'unicorn',
    files: ['**/.js'],
    extends: [unicornPlugin.configs.recommended],
  },
  {
    name: 'react',
    files: ['**/*.jsx'],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
    ],
    // customise your config and rules:
    // NOTE: see: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    rules: {
      'react/button-has-type': 'error',
    },
  },
  {
    files: ['**/*.jsx'],
    ...reactHooksPlugin.configs.flat.recommended,
  },
  {
    files: ['**/*.jsx'],
    ...jsxA11yPlugin.flatConfigs.strict,
  },
]);
