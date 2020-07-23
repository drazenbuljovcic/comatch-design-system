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
        <h1>Alert</h1>
        <p>TBD</p>
    </PageWrapper>
);

export const Empty = () => (
    <PageWrapper>
        <Alert />
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
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
