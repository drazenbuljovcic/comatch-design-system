import React from 'react';
import { PageWrapper } from '../../core/storybook';
import Panel from '../Panel';

export default {
    title: 'Containers/Panel',
};

export const Intro = () => (
    <PageWrapper>
        <h1>Panel</h1>
        <p>The panel is often used in a context where it contains a list.</p>
    </PageWrapper>
);

export const Empty = () => (
    <PageWrapper>
        <Panel title="Panel" />
    </PageWrapper>
);

export const WithChildren = () => (
    <PageWrapper>
        <Panel title="Panel">Has some children</Panel>
    </PageWrapper>
);

export const WithClassNameAndId = () => (
    <PageWrapper>
        <Panel title="Panel" id="test" className="test">
            Has some children
        </Panel>
    </PageWrapper>
);

export const WithCSSGeneratorFunction = () => (
    <PageWrapper>
        <Panel title="Panel" generateCss={() => 'background-color: lightblue;'}>
            Has some children
        </Panel>
    </PageWrapper>
);

export const OpenByDefault = () => (
    <PageWrapper>
        <Panel open title="Panel">
            Has some children
        </Panel>
    </PageWrapper>
);
