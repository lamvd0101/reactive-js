module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['prettier', 'simple-import-sort', 'react-hooks'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@zpc*/**/src/*'],
                message: 'Please import from out folder of the package.',
              },
            ],
          },
        ],
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};
