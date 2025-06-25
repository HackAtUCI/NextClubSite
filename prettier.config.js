/**
 * @type {import("prettier").Config}
 */
const config = {
    semi: true,
    singleQuote: false,
    singleAttributePerLine: true,
    printWidth: 80,
    tabWidth: 4,
    trailingComma: "es5",
    useTabs: false,
    arrowParens: "always",
    plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
