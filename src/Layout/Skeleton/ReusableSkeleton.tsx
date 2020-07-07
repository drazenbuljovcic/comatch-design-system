import React from 'react';
import styled from 'styled-components';

type ComponentProps = {
    variant?: 'circle' | 'rect';
    height: number;
    width: number;
};

const Wrapper = styled.div<Required<ComponentProps>>`
    background-color: #d2d5d7;

    ${({ variant, height, width }) => `
        ${variant === 'circle' ? 'border-radius: 50%;' : ''}
        height: ${height}px;
        width: ${width}px;
    `}
`;

function Skeleton({ variant = 'rect', ...rest }: ComponentProps) {
    return <Wrapper variant={variant} {...rest} />;
}

export default Skeleton;
