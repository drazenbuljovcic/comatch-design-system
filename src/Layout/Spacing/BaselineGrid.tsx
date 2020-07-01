/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

import BaselineGridExample from './Images/BaselineGridExample.png';

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
        width: 839px;
        height: 362px;
    }
`;
function BaselineGrid() {
    return (
        <Wrapper>
            <h3>Baseline grid 5dp (displayed pixels)</h3>
            <p>
                All components align to a 5dp square baseline grid for mobile, tablet, and desktop. We treat this as a
                variable which we name <b>‘b’</b> where <b>b=5dp</b> and we use it to define all the other measurements
                related to spacing as a <b>multiple of that b.</b>
            </p>
            <img src={BaselineGridExample} alt="BaselineGridExample" />
            <p>Baseline grid example</p>
        </Wrapper>
    );
}

export default BaselineGrid;
