import styled from 'styled-components';
import { PageWrapper as DefaultPageWrapper } from '../../../core/storybook';
import defaultTheme from '../../theme';

const { typography: themeTypography } = defaultTheme;

const PageWrapper = styled(DefaultPageWrapper)`
    p {
        font-size: ${({ theme: { typography } }) => typography.headline2.fontSize};
        margin-bottom: 75px;
    }

    p.note {
        font-size: ${({ theme: { typography } }) => typography.subHeadline1.fontSize};
        margin: 0 0 10px;
    }
`;

const Table = styled.table`
    border-collapse: collapse;
    border-color: inherit;
    border-spacing: 0;
    margin-top: 50px;

    th,
    td {
        text-align: -webkit-center;
        border-bottom: 1pt solid #c0c0c0;
        padding: 15px;
    }

    th:nth-child(even),
    td:nth-child(even) {
        background-color: ${({ theme: { palettes } }) => palettes.greyScale.main.bgColor};
    }
`;

const TableRow = styled.tr<{ typographyEntry: keyof typeof themeTypography }>`
    td:nth-child(2),
    td:nth-child(3),
    td span:last-of-type {
        font-weight: bold;
    }

    * + span {
        margin-left: 5px;
    }

    ${({ typographyEntry, theme }) => {
        const { [typographyEntry]: typography } = theme.typography;

        return `
            td:first-child {
                font-size: ${theme.typography.body.fontSize};
            }

            td:last-child {
                font-size: ${typography.fontSize};
            }
        `;
    }}
`;

const FontHeadlineWrapper = styled.div<{ bold?: boolean }>`
    display: inline-block;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    font-size: 48px;
    position: relative;
    text-align: center;
    width: 80px;

    .indicator {
        border-top: 1px solid ${({ theme: { palettes } }) => palettes.greyScale.dark.bgColor};
        font-weight: normal;
        font-size: ${({ theme: { typography } }) => typography.body.fontSize};
        padding-top: 10px;
    }

    & + & {
        margin-left: 20px;
    }
`;

export { FontHeadlineWrapper, PageWrapper, Table, TableRow };
