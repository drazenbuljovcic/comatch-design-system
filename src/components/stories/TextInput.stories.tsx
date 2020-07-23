import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { TextInput } from '..';

export default {
    title: 'Components/Text Input',
    component: TextInput,
};

export const Intro = () => (
    <PageWrapper>
        <h1>TextInput</h1>
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <TextInput name="test" />
    </PageWrapper>
);

export const WithError = () => (
    <PageWrapper>
        <TextInput hasError label="Test" name="test" message="Test" />
    </PageWrapper>
);
