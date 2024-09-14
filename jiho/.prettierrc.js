module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,

  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '@/(.*)$', '^[./](.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
