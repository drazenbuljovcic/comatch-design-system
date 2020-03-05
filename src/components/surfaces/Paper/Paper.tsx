import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ComponentProps {
    children?: ReactNode;
}

const Wrapper = styled.div`
    background: green;
`;

function Paper({ children }: ComponentProps) {
    return <Wrapper>{children}</Wrapper>;
}

export { Paper, Wrapper as StyledPaper };
