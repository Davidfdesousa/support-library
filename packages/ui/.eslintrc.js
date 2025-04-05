/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@support-library/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
