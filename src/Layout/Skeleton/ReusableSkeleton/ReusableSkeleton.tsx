import React from 'react';

import { Rectangle, Circle } from './styled';

type ComponentProps = {
    variant: string;
    height: number;
    width: number;
    animation?: string;
    margin?: string;
};

function ReusableSkeleton({ height, width, variant }: ComponentProps) {
    if (variant === 'rect') {
        return <Rectangle height={height} width={width} />;
    }
    if (variant === 'circle') {
        return <Circle height={height} width={width} margin="" />;
    }
    return <>...</>;
}

export default ReusableSkeleton;
