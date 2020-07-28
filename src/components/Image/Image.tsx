import React, { memo } from 'react';

import { buildComponentIdAndClassNameFromProps } from '../../core/helpers';
import { ComponentProps } from './types';
import { Wrapper } from './styled';

function Image({ alt, avatar = false, generateCss, src, ...rest }: ComponentProps) {
    return (
        <Wrapper
            {...buildComponentIdAndClassNameFromProps(rest, 'Image')}
            alt={alt}
            avatar={avatar}
            generateCss={generateCss}
            src={src}
        />
    );
}

export { Wrapper as StyledImage };
export default memo(Image);
