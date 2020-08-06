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
        <p>
            This component opens a calendar where the user is able to pick a specific date or a date range. A click into
            the field opens the calendar and the user can change the month and day.
        </p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default</h3>
        <DatePicker name="test" />
    </PageWrapper>
);
