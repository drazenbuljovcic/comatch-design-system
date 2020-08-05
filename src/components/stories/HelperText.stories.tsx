import React from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../../core/storybook';
import { HelperText } from '..';

const HelperWrapper = styled.div`
    display: flex;
    text-align: center;

    > div {
        margin-right: 100px;
    }
`;

export default {
    title: 'Components/Helper Text',
    component: HelperText,
};

export const Intro = () => (
    <PageWrapper>
        <h1>HelperText</h1>
        <p>Helper text is used to complement other components and to provide information within the component</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default</h3>
        <HelperText>Test</HelperText>
    </PageWrapper>
);

export const WithLevel = () => (
    <PageWrapper>
        <HelperWrapper>
            <div>
                <h3>Info</h3>
                <HelperText level="info">Test</HelperText>
            </div>
            <div>
                <h3>Success</h3>
                <HelperText level="success">Test</HelperText>
            </div>
            <div>
                <h3>Warning</h3>
                <HelperText level="warning">Test</HelperText>
            </div>
            <div>
                <h3>Error</h3>
                <HelperText level="error">Test</HelperText>
            </div>
        </HelperWrapper>
    </PageWrapper>
);
