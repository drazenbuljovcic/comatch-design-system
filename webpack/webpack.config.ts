import { Configuration } from 'webpack';
import PATHS from './paths';
import moduleRules from './moduleRules';
import externalModules from './externals';

const config: Configuration = {
    mode: 'production',
    entry: PATHS.SRC_INDEX,
    output: {
        path: PATHS.BUILD,
        filename: 'index.js',
        library: 'ComatchDesignSystem',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [PATHS.SRC, 'node_modules'],
    },
    devtool: 'source-map',
    optimization: { runtimeChunk: true },
    module: { rules: moduleRules },
    externals: externalModules,
};

export default config;
