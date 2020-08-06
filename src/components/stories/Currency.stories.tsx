import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { Currency } from '..';

export default {
    title: 'Components/Currency',
    component: Currency,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Currency</h1>
        <p>Used for collecting user provided currency from a list of options</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default</h3>
        <Currency name="test" />
    </PageWrapper>
);
