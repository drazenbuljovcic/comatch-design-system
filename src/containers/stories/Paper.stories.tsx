import React from 'react';
import { PageWrapper } from '../../core/storybook';
import Paper from '../Paper';

export default {
    title: 'Containers/Paper',
};

export const Intro = () => (
    <PageWrapper>
        <h1>Paper</h1>
        <p>
            Paper is a component which imitates a sheet of paper. It takes advantage of z-axis to indicate the hierarchy
            of elements by differentiating between two objects. Paper can be used to build surface of other elements,
            like cards and panels.
        </p>
    </PageWrapper>
);

export const Empty = () => (
    <PageWrapper>
        <Paper />
    </PageWrapper>
);

export const WithChildren = () => (
    <PageWrapper>
        <Paper>Has some children</Paper>
    </PageWrapper>
);

export const WithClassNameAndId = () => (
    <PageWrapper>
        <Paper id="test" className="test">
            Has some children
        </Paper>
    </PageWrapper>
);

export const WithCSSGeneratorFunction = () => (
    <PageWrapper>
        <Paper generateCss={() => 'background-color: lightblue; padding: 20px;'}>Has some children</Paper>
    </PageWrapper>
);
