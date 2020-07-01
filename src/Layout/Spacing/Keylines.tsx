/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

import KeylinesExample from './Images/KeylinesExample.png';

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

function Keylines() {
    return (
        <Wrapper>
            <h3>Keylines</h3>
            <p>
                Keylines enable the consistent placement of elements outside of the layout grid. They are vertical lines
                that show where elements are placed in a design that doesn’t align to the grid. Keylines are determined
                by each element’s distance from the edge of the screen, measured in increments of 5dp.
                <br />
                <br />
                Keylines should be used in combination with the responsive layout grid to place elements consistently
                across a design.
            </p>
            <img src={KeylinesExample} alt="KeylinesExample" />
            <p>Example of a 70px keyline</p>
        </Wrapper>
    );
}

export default Keylines;
