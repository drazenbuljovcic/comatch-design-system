import React from 'react';
import styled from 'styled-components';

import icons from './icons.png';

const Wrapper = styled.div`
    > :last-child {
        margin-top: 60px;
        width: 45%;
    }
`;
function Examples() {
    return (
        <Wrapper>
            <h3>Examples</h3>
            <p>To get more icons, get in touch with graphic designers from the marketing department.</p>
            <img src={icons} alt="icons" />
        </Wrapper>
    );
}

export default Examples;
