import styled from 'styled-components';

import { WithCssGeneratorFunction } from '../../core/types';
import { runCSSGeneratorFunction } from '../../core/helpers';
import { StyledPaper } from '../Paper';

const CardWrapper = styled(StyledPaper)`
    font-family: ${({ theme: { typography } }) => typography.body.fontFamily};
    font-size: ${({ theme: { typography } }) => typography.body.fontSize};
    line-height: ${({ theme: { typography } }) => typography.body.lineHeight};
    padding: 15px;

    .Title {
        color: ${({ theme: { palettes } }) => palettes.primary.main.bgColor};
        font-family: ${({ theme: { typography } }) => typography.subHeadline2.fontFamily};
        font-size: ${({ theme: { typography } }) => typography.subHeadline2.fontSize};
        font-weight: bold;
        line-height: ${({ theme: { typography } }) => typography.subHeadline2.lineHeight};
    }

    .Content {
        margin-top: 10px;
    }

    ${({ theme: { breakpoints } }) => `
        ${breakpoints.lg} {
            padding: 20px;
        }
    `}
`;

const DeckWrapper = styled.div<WithCssGeneratorFunction>`
    color: ${({ theme: { palettes } }) => palettes.greyScale.darker.bgColor};
    display: flex;
    flex-direction: column;
    font-family: ${({ theme: { typography } }) => typography.body.fontFamily};
    font-size: ${({ theme: { typography } }) => typography.body.fontSize};
    line-height: ${({ theme: { typography } }) => typography.body.lineHeight};

    .Title {
        font-family: ${({ theme: { typography } }) => typography.subHeadline1.fontFamily};
        font-size: ${({ theme: { typography } }) => typography.subHeadline1.fontSize};
        font-weight: bold;
        line-height: ${({ theme: { typography } }) => typography.subHeadline1.lineHeight};
    }

    .Control {
        color: ${({ theme: { palettes } }) => palettes.primary.main.bgColor};
    }

    > div {
        display: flex;
        justify-content: space-between;
    }

    ul {
        list-style: none;
        margin: 10px 0 0;
        padding: 0;
    }

    ${CardWrapper} + ${CardWrapper} {
        margin-top: 10px;
    }

    ${({ theme: { breakpoints } }) => `
        ${breakpoints.lg} {
            ${CardWrapper} + ${CardWrapper} {
                margin-top: 20px;
            }
        }
    `}

    ${runCSSGeneratorFunction}
`;

export { CardWrapper, DeckWrapper };
