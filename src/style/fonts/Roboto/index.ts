import { css } from 'styled-components';

import thin from './Roboto-Thin.ttf';
import thinItalic from './Roboto-ThinItalic.ttf';
import light from './Roboto-Light.ttf';
import lightItalic from './Roboto-LightItalic.ttf';
import regular from './Roboto-Regular.ttf';
import regularItalic from './Roboto-Italic.ttf';
import medium from './Roboto-Medium.ttf';
import mediumItalic from './Roboto-MediumItalic.ttf';
import bold from './Roboto-Bold.ttf';
import boldItalic from './Roboto-BoldItalic.ttf';
import black from './Roboto-Black.ttf';
import blackItalic from './Roboto-BlackItalic.ttf';

const Thin = css`
    @font-face {
        font-family: 'Roboto';
        src: url(${thin}) format('truetype');
        font-style: normal;
        font-weight: 100;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${thinItalic}) format('truetype');
        font-style: italic;
        font-weight: 100;
    }
`;

const Light = css`
    @font-face {
        font-family: 'Roboto';
        src: url(${light}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${lightItalic}) format('truetype');
        font-style: italic;
        font-weight: 300;
    }
`;

const Regular = css`
    @font-face {
        font-family: 'Roboto';
        src: url(${regular}) format('truetype');
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${regularItalic}) format('truetype');
        font-style: italic;
        font-weight: 400;
    }
`;

const Medium = css`
    @font-face {
        font-family: 'Roboto';
        src: url(${medium}) format('truetype');
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${mediumItalic}) format('truetype');
        font-style: italic;
        font-weight: 500;
    }
`;

const Bold = css`
    @font-face {
        font-family: 'Roboto';
        src: url(${bold}) format('truetype');
        font-style: normal;
        font-weight: bold;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${boldItalic}) format('truetype');
        font-style: italic;
        font-weight: bold;
    }
`;

const Black = css`
    @font-face {
        font-family: 'Roboto';
        src: url(${black}) format('truetype');
        font-style: normal;
        font-weight: 900;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${blackItalic}) format('truetype');
        font-style: italic;
        font-weight: 900;
    }
`;

export { Black, Bold, Light, Medium, Regular, Thin };
export default css`
    ${Thin}
    ${Light}
    ${Regular}
    ${Medium}
    ${Bold}
    ${Black}
`;
