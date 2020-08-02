import React from 'react';
import styled from 'styled-components';
import { PageWrapper as DefaultPageWrapper } from '../../core/storybook';
import { Alert, StyledAlert } from '..';

const PageWrapper = styled(DefaultPageWrapper)`
    ${StyledAlert} {
        margin: ${({ theme: { spacing } }) => spacing(3)};
    }
`;

export default {
    title: 'Components/Alert',
    component: Alert,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Alerts</h1>
        <p>Alerts convey information helping the user to understand the context.</p>
    </PageWrapper>
);

export const Empty = () => (
    <PageWrapper>
        <h3>Empty Alert</h3>
        <Alert />
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default Alerts</h3>
        <p>
            Default alert conveys information helping the user to understand the context. It’s typically not used in
            response to a user action. The alert appears when the information influences the whole system and not just
            one component. The width and height are adjustable and change according to the container it sits in (width)
            and the amount of text (height). It can exist with (A) and without (B) a headline.
        </p>
        <Alert title="Testing title..." type="error">
            Test...
        </Alert>
        <Alert title="Testing title..." type="info">
            Test...
        </Alert>
        <Alert title="Testing title..." type="success">
            Test...
        </Alert>
        <Alert title="Testing title..." type="warning">
            Test...
        </Alert>
    </PageWrapper>
);

export const Inline = () => (
    <PageWrapper>
        <h3>Inline</h3>
        <p>Inline alert appeards when the information influences a single component.</p>
        <Alert inline title="Testing title..." type="error">
            Test...
        </Alert>
        <Alert inline title="Testing title..." type="info">
            Test...
        </Alert>
        <Alert inline title="Testing title..." type="success">
            Test...
        </Alert>
        <Alert inline title="Testing title..." type="warning">
            Test...
        </Alert>
    </PageWrapper>
);
