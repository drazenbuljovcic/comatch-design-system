import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { Select } from '..';

export default {
    title: 'Components/Select',
    component: Select,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Select</h1>
        <p>Select components are used for collecting user provided information from a list of options.</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default Selector</h3>
        <p>Select components are used for collecting user provided information from a list of options.</p>
        <Select name="test" options={[]} />
    </PageWrapper>
);

export const DefaultWithInformation = () => (
    <PageWrapper>
        <h3>Default Selector with further information</h3>
        <p>Default Selector with a Label, Helper Text, and a Placeholder</p>
        <Select label="Label" placeholder="Select input" message="Helper Text" name="test" options={[]} />
    </PageWrapper>
);

export const WithOptions = () => (
    <PageWrapper>
        <h3>Selector with options</h3>
        <p>Example of selector with options where user is limited to selecting one option from dropdown list</p>
        <Select
            name="test"
            options={[
                { id: '1', label: '1', value: '1' },
                { id: '2', label: '2', value: '2' },
                { id: '3', label: '3', value: '3' },
                { id: '4', label: '4', value: '4' },
                { id: '5', label: '5', value: '5' },
            ]}
        />
    </PageWrapper>
);

export const Multi = () => (
    <PageWrapper>
        <h3>Selector with multiple options</h3>
        <p>Example of selector with options where user can choose more than one option from the dropdown list</p>
        <Select
            multi
            name="test"
            options={[
                { id: '1', label: '1', value: '1' },
                { id: '2', label: '2', value: '2' },
                { id: '3', label: '3', value: '3' },
                { id: '4', label: '4', value: '4' },
                { id: '5', label: '5', value: '5' },
            ]}
        />
    </PageWrapper>
);
