module.exports = {
    stories: ['../src/**/*.stories.[tj]sx'],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-docs',
        '@storybook/addon-knobs/register',
        // '@storybook/addon-viewport/register', // Breaks builds... Maybe revisit at a later stage
        '@storybook/addon-a11y/register',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.tsx?$/,
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.stories\.tsx?$/,
                loaders: [
                    {
                        loader: require.resolve('@storybook/source-loader'),
                        options: { parser: 'typescript' },
                    },
                ],
                enforce: 'pre',
            },
        );
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
