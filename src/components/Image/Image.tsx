import React, { memo } from 'react';

import { buildComponentIdAndClassNameFromProps } from '../../core/helpers';
import { ComponentProps } from './types';
import { Wrapper } from './styled';

function Image({ generateCss, ...rest }: ComponentProps) {
    return <Wrapper {...buildComponentIdAndClassNameFromProps(rest, 'Image')} generateCss={generateCss} />;
}

export { Wrapper as StyledImage };
export default memo(Image);
