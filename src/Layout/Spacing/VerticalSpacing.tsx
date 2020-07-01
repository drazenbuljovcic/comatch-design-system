/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

import VerticalSpacingExample from './Images/KeylinesExample.png';

const Wrapper = styled.div`
    h3 {
        font-size: 32px;
    }
    p {
        font-size: 18px;
    }
    p:last-child {
        font-size: 12px;
        color: #777777;
    }
    img {
        margin: 50px 0 0 0;
        width: 488px;
        height: 359px;
    }
`;

function VerticalSpacing() {
    return (
        <Wrapper>
            <h3>Vertical spacing</h3>
            <p>
                Vertical spacing refers to the height of a standard element, such as a navigation bar or list item. The
                heights of these elements should align to the 5dp grid and thus their dimensions are multiples of b.
            </p>
            <img src={VerticalSpacingExample} alt="VerticalSpacingExample" />
            <p>Example of vertical spacing</p>
        </Wrapper>
    );
}

export default VerticalSpacing;
