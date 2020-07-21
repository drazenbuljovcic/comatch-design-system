import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ComponentProps = {
    name: ReactNode;
    colors: [string, { bgColor: string; contrast: string }][];
};

const FontStyling = css`
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    .name {
        font-weight: bold;
    }
`;

const ColorEntry = styled.li<{ bgColor: string; contrast: string }>`
    ${FontStyling}

    background-color: ${({ bgColor }) => bgColor};
    color: ${({ contrast }) => contrast};
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const ColorsList = styled.ul`
    ${FontStyling}

    border-radius: ${({ theme: { shapes } }) => shapes.borderRadius};
    box-shadow: ${({ theme: { shadows } }) => shadows[1]};
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
`;

const Name = styled.h3`
    ${FontStyling}

    letter-spacing: 1.17px;
    margin-bottom: 15px;
`;

const Wrapper = styled.div`
    font-family: ${({ theme: { typography } }) => typography.body.fontFamily};
    font-size: ${({ theme: { typography } }) => typography.body.fontSize};
    line-height: ${({ theme: { typography } }) => typography.body.lineHeight};
`;

function Palette({ colors, name }: ComponentProps) {
    return (
        <Wrapper>
            <Name>{name}</Name>
            <ColorsList>
                {colors.map(([colorName, { bgColor, contrast }]) => (
                    <ColorEntry key={colorName} bgColor={bgColor} contrast={contrast}>
                        <span>{colorName}</span>
                        <span>{bgColor}</span>
                    </ColorEntry>
                ))}
            </ColorsList>
        </Wrapper>
    );
}

export { Wrapper as StyledPalette };
export default Palette;
