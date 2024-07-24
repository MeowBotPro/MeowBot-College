module.exports = {
    extends: "erb",
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-console": "off",
        semi: ["error", "never"],
        quotes: ["error", "double"],
        indent: ["error", 4],
        eqeqeq: "error",
        curly: "error",
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "comma-dangle": ["error", "always-multiline"],
        "no-trailing-spaces": "off",
        "space-before-blocks": "error",
        "keyword-spacing": ["error", { before: true, after: true }],
        "space-infix-ops": "error",
        "eol-last": ["error", "always"],
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "@typescript-eslint/no-var-requires": "off",
        "import/no-unresolved": "off",
        "max-len": "off",
        "no-non-null-assertion": "off",
        "linebreak-style": "off",
        "no-underscore-dangle": "off",
        "no-await-in-loop": "off",
        "no-param-reassign": "off",
        "no-undef": "off",
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
    settings: {
        "import/resolver": {
            // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            },
            webpack: {
                config: require.resolve("./.erb/configs/webpack.config.eslint.ts"),
            },
            typescript: {},
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
    },
};
