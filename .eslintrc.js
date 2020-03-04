const path = require('path');

module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:jest/all',
    ],
    globals: {
        window: true,
        document: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['react-hooks', 'jest'],
    rules: {
        'import/prefer-default-export': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',

        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-wrap-multilines': 'off',

        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-strict-equal': 'warn',
        'jest/no-hooks': [
            'error',
            {
                allow: ['afterEach', 'afterAll'], // We want global teardown available but not global setup
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, 'src')],
            },
            webpack: {
                config: {
                    resolve: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    },
                },
            },
        },
        react: {
            version: 'detect',
        },
    },
};
