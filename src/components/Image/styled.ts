import styled from 'styled-components';
import { runCSSGeneratorFunction, WithCssGeneratorFunction } from '../../core';

const Wrapper = styled.img<WithCssGeneratorFunction & { avatar: boolean }>`
    ${runCSSGeneratorFunction}
`;

export { Wrapper };
