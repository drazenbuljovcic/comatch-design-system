import React, { ReactNode, memo } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from './types';
import defaultTheme from './theme';

function Provider({ children, theme = defaultTheme }: { children: ReactNode; theme?: Theme }) {
    return <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>;
}

export default memo(Provider);
