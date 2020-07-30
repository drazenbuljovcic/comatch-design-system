import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { Image } from '..';

export default {
    title: 'Components/Image',
    component: Image,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Image</h1>
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <Image alt="Test1" src="" />
    </PageWrapper>
);

export const Avatar = () => (
    <PageWrapper>
        <Image avatar alt="Test2" src="" />
    </PageWrapper>
);
