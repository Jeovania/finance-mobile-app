module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: { jest: true },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    camelcase: [2, { properties: 'always' }],
    complexity: ['error', { max: 5 }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
  },
}
