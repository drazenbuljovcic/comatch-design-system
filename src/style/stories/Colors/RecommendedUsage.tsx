import React from 'react';
import styled from 'styled-components';

type ComponentProps = {
    color: string;
    notes: string;
};

const Color = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    border: 1px solid;
    border-color: ${({ theme: { palettes } }) => palettes.greyScale.main.bgColor};
    border-radius: ${({ theme: { shapes } }) => shapes.borderRadius};
    box-shadow: ${({ theme: { shadows } }) => shadows[1]};
    height: 30px;
    overflow: hidden;
    width: 30px;
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    color: ${({ theme: { palettes } }) => palettes.greyScale.darker.bgColor};
    font-family: ${({ theme: { typography } }) => typography.body.fontFamily};
    font-size: ${({ theme: { typography } }) => typography.body.fontSize};
    line-height: ${({ theme: { typography } }) => typography.body.lineHeight};
    margin: 25px;

    .Value {
        font-weight: bold;
        margin: 0 30px;
    }
`;

function RecommendedUsage({ color, notes }: ComponentProps) {
    return (
        <Wrapper>
            <Color color={color} />
            <div className="Value">{color}</div>
            <div className="Notes">{notes}</div>
        </Wrapper>
    );
}

export default RecommendedUsage;
