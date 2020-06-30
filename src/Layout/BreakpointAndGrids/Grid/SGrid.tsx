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
    width: 480px;
    height: 823px;
    border: solid 1px #979797;
`;
const Header = styled.div`
    width: 480px;
    height: 60px;
    background-color: #0095b3;
`;

const Grid = styled.div`
    display: flex;

    > div:first-child {
        margin-left: 24px;
    }
    > div:last-child {
        margin-right: 24px;
    }
`;
const GridColumn = styled.div`
    width: 93px;
    height: 823px;
    background-color: rgba(224, 32, 32, 0.1);
    margin: -60px 10px 0 10px;
`;
function SGrid() {
    return (
        <Wrapper>
            <p>
                <b>S</b> 599 &lt; Window width &gt; 480
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

export default SGrid;
