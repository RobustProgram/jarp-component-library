module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'testing-library',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
  },
  overrides: [
    {
      files: '*.slice.ts',
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'react/prop-types': 0,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },

    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'webpack.config.js',
    '.eslintrc.js',
    '*.scss',
    '*.svg',
    'dist/',
    '*.stories.tsx',
  ],
};
