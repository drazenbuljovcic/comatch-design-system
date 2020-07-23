import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { DatePicker } from '..';

export default {
    title: 'Components/Date Picker',
    component: DatePicker,
};

export const Intro = () => (
    <PageWrapper>
        <h1>DatePicker</h1>
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <DatePicker name="test" />
    </PageWrapper>
);
