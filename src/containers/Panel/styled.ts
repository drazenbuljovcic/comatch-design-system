import styled from 'styled-components';
import { StyledPaper } from '../Paper';

const Title = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    font-family: ${({ theme: { typography } }) => typography.subHeadline1.fontFamily};
    font-size: ${({ theme: { typography } }) => typography.subHeadline1.fontSize};
    line-height: ${({ theme: { typography } }) => typography.subHeadline1.lineHeight};
    justify-content: space-between;
    padding: 0;

    /* Will allow for the rotation of icons when needed */
    svg {
        margin-right: 10px;
        overflow: hidden;
        transform: rotate(0deg);
        transition: all 250ms ease-out;
        will-change: transform;
    }
`;

const Content = styled.div`
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    margin: 0;
    transition: all 250ms;
`;

const Wrapper = styled(StyledPaper)`
    padding: 15px;

    &.isOpen {
        ${Title} {
            padding-bottom: 15px;

            svg {
                transform: rotate(180deg);
            }
        }

        ${Content} {
            max-height: 100%;
            opacity: 1;
            margin-top: 10px;
        }
    }

    ${({ theme: { breakpoints } }) => `
        ${breakpoints.lg} {
            padding: 20px;

            &.isOpen {
                ${Title} {
                    padding-bottom: 20px;
                }
            }
        }
    `}
`;

export { Content, Title, Wrapper };
