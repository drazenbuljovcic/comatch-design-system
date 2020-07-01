/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

import MarginExample from './Images/MarginExample.png';
import PaddingExample from './Images/PaddingExample.png';

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
        width: 408px;
        height: 371px;
    }
`;
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 100px 0 0;
    width: 408px;
    p {
        font-size: 14px !important;
    }
`;

function PaddingMargin() {
    return (
        <Wrapper>
            <h3>Padding &amp; Margin</h3>
            <p>
                Padding refers to the space between UI elements or to place elements within another UI element, for
                example cards. It’s an alternative spacing method to keylines, measured in increments of 5dp.
                <br />
                <br />
                Padding should be used in combination with the responsive layout grid to place elements consistently
                across a design.
            </p>
            <ImageWrapper>
                <ImageBlock>
                    <img src={PaddingExample} alt="PaddingExample" />
                    <p>All components have a 3b=15px padding, and a 2b=10px margin on all sides. </p>
                </ImageBlock>
                <ImageBlock>
                    <img src={MarginExample} alt="MarginExample" />
                    <p>This makes sure that when placed next to each other the gutter between components is 4b=20px.</p>
                </ImageBlock>
            </ImageWrapper>
        </Wrapper>
    );
}

export default PaddingMargin;
