import styled from 'styled-components';

import { WithCssGeneratorFunction } from '../../core/types';
import { runCSSGeneratorFunction } from '../../core/helpers';

const Wrapper = styled.label<WithCssGeneratorFunction>`
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: ${({ theme: { typography } }) => typography.label.fontSize};
    line-height: ${({ theme: { typography } }) => typography.label.lineHeight};

    .RequiredIndicator {
        font-weight: bold;
        margin-left: 2px;
    }

    .TooltipWrapper {
        margin-left: 5px;
    }

    ${runCSSGeneratorFunction}
`;

export { Wrapper };
