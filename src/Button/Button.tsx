import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ComponentProps {
    children?: ReactNode;
}

const Wrapper = styled.button``;

function Button({ children }: ComponentProps) {
    return <Wrapper>{children}</Wrapper>;
}

export { Button };
