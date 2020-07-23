import styled from 'styled-components';

import { WithCssGeneratorFunction } from '../../core/types';
import { runCSSGeneratorFunction } from '../../core/helpers';
import { MessageLevel } from './types';

const Wrapper = styled.div<WithCssGeneratorFunction & { level?: MessageLevel }>`
    color: ${({ level, theme: { palettes } }) => {
        switch (level) {
            case 'success':
                return palettes.success.dark;

            case 'error':
                return palettes.error.dark;

            case 'warning':
                return palettes.warning.dark;

            case 'info':
                return palettes.info.dark;

            case 'inherit':
                return 'inherit';

            default:
                return palettes.greyScale.dark.bgColor;
        }
    }};
    font-family: inherit;
    font-size: ${({ theme: { typography } }) => typography.label.fontSize};
    line-height: ${({ theme: { typography } }) => typography.label.lineHeight};

    ${runCSSGeneratorFunction}
`;

export { Wrapper };
