import styled from 'styled-components';
import { runCSSGeneratorFunction, WithCssGeneratorFunction } from '../../core';

const Wrapper = styled.img<WithCssGeneratorFunction & { avatar: boolean }>`
    ${({ avatar, theme: { spacing } }) => `
        ${avatar ? 'border-radius: 50%; width: 50px; height: 50px;' : `margin: ${spacing(4)};`}
    `}
    ${runCSSGeneratorFunction}
`;

export { Wrapper };
