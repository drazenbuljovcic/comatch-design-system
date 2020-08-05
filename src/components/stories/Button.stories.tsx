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

const ButtonWrapper = styled.div`
    display: flex;
    text-align: center;

    div {
        margin-right: 50px;
    }
`;

export default {
    title: 'Components/Button',
    component: Button,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Button</h1>
        <p>
            In general buttons can contain a combination of a clear text and an icon while links are always text only.
            Primary buttons are used for only the main actions on a page. Actions that are possible to do, but are not
            the main focus on the page are displayed as a secondary button.{' '}
        </p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <ButtonWrapper>
            <div>
                <h3>Default</h3>
                <Button>Find your match</Button>
            </div>
            <div>
                <h3>Disabled Default</h3>
                <Button disabled>Find your match</Button>
            </div>
        </ButtonWrapper>
    </PageWrapper>
);

export const Secondary = () => (
    <PageWrapper>
        <ButtonWrapper>
            <div>
                <h3>Secondary</h3>
                <Button secondary>Find your match</Button>
            </div>
            <div>
                <h3>Secondary Disabled</h3>
                <Button disabled secondary>
                    Find your match
                </Button>
            </div>
        </ButtonWrapper>
    </PageWrapper>
);

export const WithClickListener = () => (
    <PageWrapper>
        <ButtonWrapper>
            <div>
                <h3>With Click Listener</h3>
                <Button
                    onClick={(event) => {
                        alert('You clicked the "non-disabled" button');
                        console.log(event);
                    }}
                >
                    Find your match
                </Button>
            </div>
            <div>
                <h3>With Click Listener Disabled</h3>
                <Button
                    disabled
                    onClick={(event) => {
                        alert('You clicked the "disabled" button');
                        console.log(event);
                    }}
                >
                    Find your match
                </Button>
            </div>
        </ButtonWrapper>
    </PageWrapper>
);
