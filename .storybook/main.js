module.exports = {
    stories: ['../src/**/stories/*.stories.tsx'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-a11y/register'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loaders: [
                { loader: require.resolve('babel-loader') },
                { loader: require.resolve('react-docgen-typescript-loader') },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
