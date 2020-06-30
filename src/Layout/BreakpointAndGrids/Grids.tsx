/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

import XXLGrid from './Grid/XXLGrid';
import XLGrid from './Grid/XLGrid';
import LGrid from './Grid/LGrid';
import MGrid from './Grid/MGrid';
import SGrid from './Grid/SGrid';
import XSGrid from './Grid/XSGrid';

const Wrapper = styled.div`
    h3 {
        font-size: 32px;
        margin: 0 0 20px 0;
    }
    p {
        margin: 0 0 70px 0;
        font-size: 18px;
    }
`;

function Grids() {
    return (
        <Wrapper>
            <h3>Grids</h3>
            <p>
                COMATCH grids follow a simple rule and formula.
                <br />
                <br />
                For <b>XXL, XL, L </b>is (Window width — 20%) / <b>12</b> with 20px distance between elements.
                <br />
                For <b>M</b> is (Window width — 20%) / <b>6</b> with 20px distance between elements.
                <br />
                For <b>S</b> and <b>XS</b> is (Window width — 10%) / <b>4</b> with 20px distance between elements.
            </p>
            <XXLGrid />
            <XLGrid />
            <LGrid />
            <MGrid />
            <SGrid />
            <XSGrid />
        </Wrapper>
    );
}

export default Grids;
