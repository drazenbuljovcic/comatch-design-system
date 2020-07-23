import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { Checkbox } from '..';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Checkbox</h1>
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <Checkbox name="test" />
    </PageWrapper>
);

export const CheckedByDefault = () => (
    <PageWrapper>
        <Checkbox checked name="test" />
    </PageWrapper>
);
