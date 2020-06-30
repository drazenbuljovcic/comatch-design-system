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
    width: 800px;
    height: 715px;
    border: solid 1px #979797;
`;
const Header = styled.div`
    width: 800px;
    height: 60px;
    background-color: #0095b3;
`;

const Grid = styled.div`
    display: flex;

    > div:first-child {
        margin-left: 80px;
    }
    > div:last-child {
        margin-right: 80px;
    }
`;
const GridColumn = styled.div`
    width: 35px;
    height: 715px;
    background-color: rgba(224, 32, 32, 0.1);
    margin: -60px 10px 0 10px;
`;
function LGrid() {
    return (
        <Wrapper>
            <p>
                <b>L</b> 1024 &lt; Window width &gt; 800
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

export default LGrid;
