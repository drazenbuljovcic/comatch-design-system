import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { HelperText } from '..';

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

export const Info = () => (
    <PageWrapper>
        <HelperText level="info">Test</HelperText>
    </PageWrapper>
);

export const Warning = () => (
    <PageWrapper>
        <HelperText level="warning">Test</HelperText>
    </PageWrapper>
);

export const Success = () => (
    <PageWrapper>
        <HelperText level="success">Test</HelperText>
    </PageWrapper>
);

export const Error = () => (
    <PageWrapper>
        <HelperText level="error">Test</HelperText>
    </PageWrapper>
);
