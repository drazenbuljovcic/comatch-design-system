import React, { memo } from 'react';

import { buildComponentIdAndClassNameFromProps } from '../../core';
import DefaultAvatar from '../../core/images/Placeholder.png';
import { ComponentProps } from './types';
import { Wrapper } from './styled';

function Image({ alt, avatar = false, generateCss, src, ...rest }: ComponentProps) {
    return (
        <Wrapper
            {...buildComponentIdAndClassNameFromProps(rest, 'Image')}
            alt={alt}
            avatar={avatar}
            generateCss={generateCss}
            src={avatar ? src || DefaultAvatar : src}
        />
    );
}

export { Wrapper as StyledImage };
export default memo(Image);
