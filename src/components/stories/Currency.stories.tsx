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
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <Currency name="test" />
    </PageWrapper>
);
