import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import bundleSize from 'rollup-plugin-bundle-size';
import cleaner from 'rollup-plugin-cleaner';
import { eslint } from 'rollup-plugin-eslint';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';

import packageJson from './package.json';

const globals = {
    classnames: 'ClassNames',
    moment: 'Moment',
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'StyledComponents',
};

export default {
    input: 'src/index.ts',
    external: [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.peerDependencies || {})],
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            globals,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
            globals,
        },
    ],
    plugins: [
        eslint({
            throwOnError: true,
            exclude: ['src/**/*.ttf', 'src/**/*.svg'],
        }),
        cleaner(),
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        url({
            include: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
            limit: Infinity,
        }),
        svgr(),
        bundleSize(),
    ],
};
