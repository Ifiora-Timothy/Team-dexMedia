module.exports = {
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json"
    },
    rules: {
      // Add your custom rules here
    }
  }
  