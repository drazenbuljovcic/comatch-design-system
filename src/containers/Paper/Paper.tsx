import React, { memo } from 'react';
import classnames from 'classnames';

import { ComponentProps } from './types';
import { Wrapper } from './styled';

function Paper({ children, className, generateCss, id }: ComponentProps) {
    return (
        <Wrapper id={id} className={classnames('Paper', className)} generateCss={generateCss}>
            {children}
        </Wrapper>
    );
}

export { Wrapper as StyledPaper };
export default memo(Paper);
