/* eslint-disable no-alert, no-console */
import React from 'react';
import styled from 'styled-components';
import { PageWrapper as DefaultPageWrapper } from '../../core/storybook';
import { Button, StyledButton } from '..';

const PageWrapper = styled(DefaultPageWrapper)`
    ${StyledButton} + ${StyledButton} {
        margin-left: 135px;
    }
`;

export default {
    title: 'Components/Button',
    component: Button,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Button</h1>
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <Button>Find your match</Button>
        <Button disabled>Find your match</Button>
    </PageWrapper>
);

export const Secondary = () => (
    <PageWrapper>
        <Button secondary>Find your match</Button>
        <Button disabled secondary>
            Find your match
        </Button>
    </PageWrapper>
);

export const WithClickListener = () => (
    <PageWrapper>
        <Button
            onClick={(event) => {
                alert('You clicked the "non-disabled" button');
                console.log(event);
            }}
        >
            Find your match
        </Button>
        <Button
            disabled
            onClick={(event) => {
                alert('You clicked the "disabled" button');
                console.log(event);
            }}
        >
            Find your match
        </Button>
    </PageWrapper>
);
