import styled, { DefaultTheme } from 'styled-components';
import { StyledWrapperProps } from './types';

function getBackgroundColor({ inline, type, theme: { palettes } }: StyledWrapperProps & { theme: DefaultTheme }) {
    if (inline) {
        return 'transparent';
    }

    switch (type) {
        case 'error':
            return palettes.error.light.bgColor;

        case 'info':
            return palettes.info.light.bgColor;

        case 'success':
            return palettes.success.light.bgColor;

        default:
            return palettes.warning.light.bgColor;
    }
}

function getColor({ type, theme: { palettes } }: StyledWrapperProps & { theme: DefaultTheme }) {
    switch (type) {
        case 'error':
            return palettes.error.dark.bgColor;

        case 'info':
            return palettes.info.dark.bgColor;

        case 'success':
            return palettes.success.dark.bgColor;

        default:
            return palettes.warning.dark.bgColor;
    }
}

const Wrapper = styled.div<StyledWrapperProps>`
    align-items: baseline;
    background-color: ${getBackgroundColor};
    border-left: ${({ inline }) => (inline ? '' : '5px solid')};
    border-color: ${getColor};
    border-radius: ${({ theme: { shapes } }) => `${shapes.borderRadius} 0 0 ${shapes.borderRadius}`};
    color: ${getColor};
    display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
    font-family: ${({ theme: { typography } }) => typography.body.fontFamily};
    font-size: ${({ theme: { typography } }) => typography.body.fontSize};
    line-height: ${({ theme: { typography } }) => typography.body.lineHeight};
    padding: ${({ inline, theme: { spacing } }) => (inline ? '' : spacing(3))};

    .Title {
        font-weight: bold;
        font-size: ${({ theme: { typography } }) => typography.subHeadline2.fontSize};
        line-height: ${({ theme: { typography } }) => typography.subHeadline2.lineHeight};
        margin-bottom: ${({ theme: { spacing } }) => spacing(1)};
    }

    > svg {
        margin-right: ${({ theme: { spacing } }) => spacing(2)};
    }
`;

export { Wrapper };
