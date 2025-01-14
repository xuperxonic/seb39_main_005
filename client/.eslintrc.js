module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }, //import 시 확장자명은 사용하지 않는다.
    ],
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }, //jsx사용가능한 확장자 설정
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
