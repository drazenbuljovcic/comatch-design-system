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
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <HelperText>Test</HelperText>
    </PageWrapper>
);
