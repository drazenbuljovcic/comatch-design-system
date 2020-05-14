import { Configuration } from 'webpack';
import path from 'path';

const ROOT = path.resolve(__dirname, '../');
export default function buildWebpackConfiguration(): Configuration {
    return {
        mode: 'production',
        entry: `${ROOT}/src/index.ts`,
        output: {
            path: `${ROOT}/dist`,
            filename: 'index.js',
            library: 'ComatchDesignSystem',
            libraryTarget: 'umd',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            modules: [`${ROOT}/src`, 'node_modules'],
        },
        devtool: 'cheap-module-source-map',
        optimization: { runtimeChunk: true },
        module: {
            strictExportPresence: true,
            rules: [
                { parser: { requireEnsure: false } },
                {
                    enforce: 'pre',
                    exclude: [/node_modules/],
                    loader: require.resolve('eslint-loader'),
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    options: { cache: true },
                },
                {
                    test: /\.(j|t)sx?$/,
                    exclude: /node_modules/,
                    loader: require.resolve('babel-loader'),
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
        externals: {
            react: 'react',
            styledComponents: 'styled-components',
        },
    };
}
