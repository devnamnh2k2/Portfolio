import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {}
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
      tailwindcss: eslintPluginTailwindcss
    },
    rules: {
      'prettier/prettier': 'error',
      '@next/next/no-img-element': 'off',
      'import/no-anonymous-default-export': 'off',
      arrowParens: 'always',
      semi: false,
      trailingComma: 'none',
      tabWidth: 2,
      endOfLine: 'auto',
      useTabs: false,
      singleQuote: true,
      printWidth: 120,
      jsxSingleQuote: true
    }
  }
]
export default eslintConfig
