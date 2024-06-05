module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    'vue/multi-word-component-names': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为内置模块引入
            '^@?\\w',
            '^~/',
            // 父级导入. 把 `..` 放在最后.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // 同级导入. 把同一个文件夹.放在最后
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // 带有副作用导入，比如import 'a.css'这种.
            '^\\u0000',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error', // 导出
    'import/order': 'off',
  },
};
