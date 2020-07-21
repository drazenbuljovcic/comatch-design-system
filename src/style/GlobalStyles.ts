import { createGlobalStyle } from 'styled-components';

import defaultTheme from './theme';
import RobotoFontFamily from './fonts/Roboto';

export default createGlobalStyle`
    ${RobotoFontFamily}

    select:-moz-focusring {
        /* This will remove the focus dotted outline appearing */
        /* only on Firefox achieving cross browser uniformity */
        color: transparent;
        text-shadow: 0 0 0 #000;
    }

    hr,
    input[type='search'] {
        box-sizing: border-box;
    }

    body {
        font-size: ${defaultTheme.typography.body.fontSize};
        line-height: ${defaultTheme.typography.body.lineHeight};
    }

    h1 {
        font-size: ${defaultTheme.typography.headline1.fontSize};
        line-height: ${defaultTheme.typography.headline1.lineHeight};
    }

    h2 {
        font-size: ${defaultTheme.typography.headline2.fontSize};
        line-height: ${defaultTheme.typography.headline2.lineHeight};
    }

    h3 {
        font-size: ${defaultTheme.typography.subHeadline1.fontSize};
        line-height: ${defaultTheme.typography.subHeadline1.lineHeight};
    }

    h4 {
        font-size: ${defaultTheme.typography.subHeadline2.fontSize};
        line-height: ${defaultTheme.typography.subHeadline2.lineHeight};
    }

    label {
        font-size: ${defaultTheme.typography.label.fontSize};
        line-height: ${defaultTheme.typography.label.lineHeight};
    }

    html,
    body,
    #root {
        background-color: ${defaultTheme.palettes.greyScale.lighter.bgColor};
        color: ${defaultTheme.palettes.greyScale.darker.bgColor};
        font-family: ${defaultTheme.typography.body.fontFamily};
    }
`;
