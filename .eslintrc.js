module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    'vue/html-self-closing': 'off', //<input></input>
    'vue/no-parsing-error': [
      2,
      {
        //<input></input>
        'x-invalid-end-tag': false,
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off',
    'no-unexpected-multiline': 'error',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     // singleQuote: true,
    //     semi: true,
    //     useTabs: false,
    //     tabWidth: 2,
    //     trailingComma: 'all',
    //     printWidth: 80,
    //     bracketSpacing: true,
    //     arrowParens: 'avoid',
    //     endOfLine: 'auto',
    //   },
    // ],
    'prettier/prettier': 0,
  },
};
