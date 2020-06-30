/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 100px;
    p {
        font-size: 18px;
        margin: 0 0 50px 0;
    }
`;
const GridWrapper = styled.div`
    width: 1261px;
    height: 727px;
    border: solid 1px #979797;
`;
const Header = styled.div`
    width: 1261px;
    height: 60px;
    background-color: #0095b3;
`;

const Grid = styled.div`
    display: flex;

    > div:first-child {
        margin-left: 118px;
    }
    > div:last-child {
        margin-right: 118px;
    }
`;
const GridColumn = styled.div`
    width: 67px;
    height: 727px;
    background-color: rgba(224, 32, 32, 0.1);
    margin: -60px 10px 0 10px;
`;
function XXLGrid() {
    return (
        <Wrapper>
            <p>
                <b>XXL</b> window width ≥ 1280
            </p>
            <GridWrapper>
                <Header />
                <Grid>
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                    <GridColumn />
                </Grid>
            </GridWrapper>
        </Wrapper>
    );
}

export default XXLGrid;
