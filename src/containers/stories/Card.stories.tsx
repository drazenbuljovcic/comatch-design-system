import React from 'react';
import { PageWrapper } from '../../core/storybook';
import Card from '../Card';

export default {
    title: 'Containers/Card',
};

export const Intro = () => (
    <PageWrapper>
        <h1>Card</h1>
        <p>
            Card usually contains items where panel contains a list. Cards organize and present content in a container
            that users can easily scan and interact with.
        </p>
    </PageWrapper>
);

export const Empty = () => (
    <PageWrapper>
        <Card title="Card" />
    </PageWrapper>
);

export const WithChildren = () => (
    <PageWrapper>
        <Card title="Card">Has some children</Card>
    </PageWrapper>
);

export const WithClassNameAndId = () => (
    <PageWrapper>
        <Card title="Card" id="test" className="test">
            Has some children
        </Card>
    </PageWrapper>
);

export const WithCSSGeneratorFunction = () => (
    <PageWrapper>
        <Card title="Card" generateCss={() => 'background-color: lightblue;'}>
            Has some children
        </Card>
    </PageWrapper>
);
