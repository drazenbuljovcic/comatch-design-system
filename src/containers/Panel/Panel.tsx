import React, { memo, useRef } from 'react';
import classnames from 'classnames';

import useToggle from '../../core/hooks/useToggle';
import CollapseIndicator from '../../core/svg/collapse-indicator.svg';

import { ComponentProps } from './types';
import { Content, Title, Wrapper } from './styled';

function Panel(props: ComponentProps) {
    const { children, className, open = false, generateCss, id, title } = props;
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isOpen, toggleOpenState] = useToggle(open);

    return (
        <Wrapper
            id={id}
            className={classnames('Panel', className, { isOpen })}
            generateCss={generateCss}
            ref={wrapperRef}
        >
            <Title
                onClick={() => {
                    toggleOpenState();
                }}
            >
                <div>{title}</div>
                <CollapseIndicator />
            </Title>

            <Content>{children}</Content>
        </Wrapper>
    );
}

export { Wrapper as StyledPanel };
export default memo(Panel);
