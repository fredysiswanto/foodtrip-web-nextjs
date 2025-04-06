import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import tsEslintParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import eslintConfigPrettier from "eslint-config-prettier";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  { ignores: ["dist", "node_modules", ".next"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsEslintParser,
    },
    plugins: {
      "react-hooks": reactHooks,
      react: reactPlugin,
      "unused-imports": unusedImports,
    },
    settings: {
      "import/internal-regex": "^~/",
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      react: {
        version: "detect",
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      jsxA11y.flatConfigs.recommended,
      importPlugin.flatConfigs.recommended,
      eslintConfigPrettier,
      ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "prettier",
      ),
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",

      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "react/no-danger": "error",

      "no-console": "error",
      "no-empty-pattern": "off",

      "linebreak-style": 0,

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "import/no-unresolved": [
        "error",
        {
          ignore: [
            "\\.(png|svg|jpg|jpeg|gif|webp|ico|bmp|tiff|mp4|mp3|woff|woff2|eot|ttf|otf)$",
          ],
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
    },
    overrides: [
      {
        files: [
          "**/__tests__/**/*.[jt]s?(x)",
          "**/?(*.)+(spec|test).[jt]s?(x)",
        ],
        extends: ["plugin:testing-library/react"],
      },
    ],
  },
);
