import { Configuration } from 'webpack';

const externals: Configuration['externals'] = {
    react: 'react',
    styledComponents: 'styled-components',
};

export default externals;
