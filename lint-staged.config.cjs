// @ts-check

/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
    "**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],
};

module.exports = config;
