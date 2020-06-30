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
    width: 600px;
    height: 761px;
    border: solid 1px #979797;
`;
const Header = styled.div`
    width: 600px;
    height: 60px;
    background-color: #0095b3;
`;

const Grid = styled.div`
    display: flex;

    > div:first-child {
        margin-left: 60px;
    }
    > div:last-child {
        margin-right: 60px;
    }
`;
const GridColumn = styled.div`
    width: 63px;
    height: 761px;
    background-color: rgba(224, 32, 32, 0.1);
    margin: -60px 10px 0 10px;
`;
function MGrid() {
    return (
        <Wrapper>
            <p>
                <b>M</b> 800 &lt; Window width &gt; 600
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
                </Grid>
            </GridWrapper>
        </Wrapper>
    );
}

export default MGrid;
