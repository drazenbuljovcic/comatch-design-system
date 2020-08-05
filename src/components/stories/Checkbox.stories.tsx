import React, { useState } from 'react';
import { PageWrapper } from '../../core/storybook';
import { Checkbox } from '..';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
};

export const Intro = () => (
    <PageWrapper>
        <h3>Checkbox</h3>
        <p>Checkboxes should be used when multiple options can be selected from a list.</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default Checkbox</h3>
        <Checkbox name="test" />
    </PageWrapper>
);

export const CheckedByDefault = () => (
    <PageWrapper>
        <h3>Checked by Default</h3>
        <Checkbox checked name="test" />
    </PageWrapper>
);

export const Controlled = () => {
    const [checked, setChecked] = useState(false);

    return (
        <PageWrapper>
            <h3>Controlled by the parent component</h3>
            <Checkbox
                checked={checked}
                name="test"
                onChange={(event, isChecked) => {
                    setChecked(isChecked);
                }}
            >
                Click to change state
            </Checkbox>
        </PageWrapper>
    );
};
