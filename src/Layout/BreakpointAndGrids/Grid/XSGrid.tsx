/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 100px;
    p {
        font-size: 18px;
        margin: 0 0 10px 0;
    }
`;
const GridWrapper = styled.div`
    margin-top: 50px;
    width: 320px;
    height: 797px;
    border: solid 1px #979797;
`;
const Header = styled.div`
    width: 320px;
    height: 60px;
    background-color: #0095b3;
`;

const Grid = styled.div`
    display: flex;

    > div:first-child {
        margin-left: 16px;
    }
    > div:last-child {
        margin-right: 16px;
    }
`;
const GridColumn = styled.div`
    width: 57px;
    height: 797px;
    background-color: rgba(224, 32, 32, 0.1);
    margin: -60px 10px 0 10px;
`;
function XSGrid() {
    return (
        <Wrapper>
            <p>
                <b>XS</b> 479 &lt; Window width &lt; 320
            </p>
            <GridWrapper>
                <Header />
                <Grid>
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                </Grid>
            </GridWrapper>
        </Wrapper>
    );
}

export default XSGrid;
