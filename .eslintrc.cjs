module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite-env.d.ts', 'main.tsx'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "@typescript-eslint", "check-file", "import", "prettier"],
  rules: {
    'prettier/prettier': 2,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/order": [
      2,
      {
        "groups": [
          "external",
          "builtin",
          "index",
          "sibling",
          "parent",
          "internal",
          "type"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always-and-inside-groups"
      }
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{jsx,tsx}": "PASCAL_CASE",
        "**/*.{js,ts,css,scss}": "CAMEL_CASE"
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "CAMEL_CASE"
      }
    ]
  },
}
