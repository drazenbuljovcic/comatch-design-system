import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { TextInput } from '..';

export default {
    title: 'Components/Text Input',
    component: TextInput,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Text Input</h1>
        <p>Text fields let users enter and edit text.</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default Text Field</h3>
        <TextInput name="test" />
    </PageWrapper>
);

export const WithError = () => (
    <PageWrapper>
        <h3>Text Field with Error</h3>
        <TextInput hasError label="Test" name="test" message="Test" />
    </PageWrapper>
);
