module.exports = {
    extends: require.resolve('@reskript/config-lint/config/eslint'),
    rules: {
        'react/jsx-no-bind': [
            2, {
                allowArrowFunctions: true,
            },
        ],
    },
};
