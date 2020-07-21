import React, { memo } from 'react';
import classnames from 'classnames';

import { CardProps as ComponentProps } from './types';
import { CardWrapper } from './styled';

function Card({ as, children, content, className, generateCss, id, subTitle, title }: ComponentProps) {
    return (
        <CardWrapper {...(as && { as })} id={id} className={classnames('Card', className)} generateCss={generateCss}>
            <div className="Title">{title}</div>
            {!!subTitle && <div>{subTitle}</div>}
            {(!!children || !!content) && <div className="Content">{children || content}</div>}
        </CardWrapper>
    );
}

export { CardWrapper as StyledCard };
export default memo(Card);
