import React from 'react';
import styled from 'styled-components';

import BreakpointsVocabulary from './BreakpointsVocabulary';
import Grids from './Grids';

const Wrapper = styled.div`
    h1 {
        font-size: 72px;
    }
    padding: 100px;
    > div:not(:first-child) {
        margin-top: 100px;
    }
`;
function Page() {
    return (
        <Wrapper>
            <h1>Breakpoints and grids</h1>
            <BreakpointsVocabulary />
            <Grids />
        </Wrapper>
    );
}

export default Page;
