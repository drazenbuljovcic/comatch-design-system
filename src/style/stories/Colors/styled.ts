import styled from 'styled-components';
import { PageWrapper as DefaultPageWrapper } from '../../../core/storybook';
import { StyledPalette } from './Palette';

const PageWrapper = styled(DefaultPageWrapper)`
    .Palettes {
        display: flex;
        flex-wrap: wrap;

        ${StyledPalette} {
            flex: calc(50% - 50px) 0;
            margin: 25px;
        }
    }
`;

export { PageWrapper };
