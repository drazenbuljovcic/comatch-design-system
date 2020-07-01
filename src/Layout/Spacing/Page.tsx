import React from 'react';
import styled from 'styled-components';

import BaselineGrid from './BaselineGrid';
import Keylines from './Keylines';
import PaddingMargin from './Padding&Margin';
import VerticalSpacing from './VerticalSpacing';

const Wrapper = styled.div`
    padding: 100px;

    h1 {
        font-size: 72px;
    }
    p {
        font-size: 18px;
    }
    > div:not(:first-child) {
        margin-top: 100px;
    }
`;
function Page() {
    return (
        <Wrapper>
            <h1>Spacing</h1>
            <p>
                Spacing methods use baseline grids, keylines, padding, margin and vertical spacing to affect components,
                containers and elements on a page.
            </p>
            <BaselineGrid />
            <Keylines />
            <PaddingMargin />
            <VerticalSpacing />
        </Wrapper>
    );
}

export default Page;
