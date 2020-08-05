import styled from 'styled-components';
import { runCSSGeneratorFunction, WithCssGeneratorFunction } from '../../core';

const Wrapper = styled.img<WithCssGeneratorFunction & { avatar: boolean }>`
    border: solid 1px;
    border-color: ${({ theme: { palettes } }) => palettes.greyScale.main.bgColor};

    ${({ avatar, theme: { spacing } }) =>
        avatar ? 'border-radius: 50%; width: 100px; height: 100px;' : `margin: ${spacing(4)};`}

    ${runCSSGeneratorFunction}
`;

export { Wrapper };
