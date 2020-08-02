import styled from 'styled-components';
import { runCSSGeneratorFunction, WithCssGeneratorFunction } from '../../core';

const Wrapper = styled.img<WithCssGeneratorFunction & { avatar: boolean }>`
    ${({ avatar, theme: { spacing } }) => `
        ${avatar ? 'border-radius: 50%; width: 100px; height: 100px;' : `margin: ${spacing(4)};`}
    `}
    ${runCSSGeneratorFunction}
    border: solid 1px lightgray;
`;

export { Wrapper };
