import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    h3 {
        margin: 0 0 20px 0;
        font-size: 32px;
    }
    p {
        margin: 0 0 10px 0;
        font-size: 18px;
    }
`;

function BreakpointsVocabulary() {
    return (
        <Wrapper>
            <h3>Breakpoints / vocabulary for developers</h3>
            <p>
                <b>XXL</b>
            </p>
            <p>Window width ≥ 1280</p>
            <p>
                <b>XL</b>
            </p>
            <p>1279 ≤ Window width ≥ 1025</p>
            <p>
                <b>L</b>
            </p>
            <p>1024 ≤ Window width ≥ 800</p>
            <p>
                <b>M</b>
            </p>
            <p>799 ≤ Window width ≥ 600</p>
            <p>
                <b>S</b>
            </p>
            <p>599 ≤ Window width ≥ 480</p>
            <p>
                <b>XS</b>
            </p>
            <p>479 ≤ Window width ≥ 320</p>
        </Wrapper>
    );
}

export default BreakpointsVocabulary;
