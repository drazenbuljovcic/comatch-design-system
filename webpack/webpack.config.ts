import { Configuration } from 'webpack';
import PATHS from './paths';

const config: Configuration = {
    mode: 'production',
    entry: PATHS.SRC_INDEX,
    output: {
        path: PATHS.BUILD,
        filename: 'design-system.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: '10000',
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                loader: require.resolve('file-loader'),
                // Exclude `js` files to keep "css" loader working as it injects
                // its runtime that would otherwise be processed through "file" loader.
                // Also exclude `html` and `json` extensions so they get processed
                // by webpacks internal loaders.
                exclude: [/\.(m|j|t)sx?$/, /\.html$/, /\.json$/],
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ],
    },
};

export default config;
