import React from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../../core/storybook';
import { Label } from '..';

export default {
    title: 'Components/Label',
    component: Label,
};

const LabelWrapper = styled.div`
    display: flex;
    text-align: center;

    div {
        margin-right: 50px;
    }
`;

export const Intro = () => (
    <PageWrapper>
        <h1>Label</h1>
        <p>Label is used when a specific element within a component needs a label</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <LabelWrapper>
            <div>
                <h3>Default</h3>
                <Label htmlFor="test">Label</Label>
            </div>
            <div>
                <h3>Required</h3>
                <Label required htmlFor="test">
                    Label
                </Label>
            </div>
            <div>
                <h3>Tooltip</h3>
                <Label tooltip="Label" htmlFor="test" />
            </div>
        </LabelWrapper>
    </PageWrapper>
);
