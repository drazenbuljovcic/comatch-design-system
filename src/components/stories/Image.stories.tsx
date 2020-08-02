import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { Image } from '..';

const DefaultAvatar =
    'https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png';
const UserAvatar =
    'https://www.kindpng.com/picc/m/222-2224384_transparent-loquacious-clipart-sirius-black-pop-art-hd.png';
const BrandAvatar = 'https://res.cloudinary.com/brandpad/image/upload/v1580393977/4021/icon_dark.svg';

export default {
    title: 'Components/Image',
    component: Image,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Image</h1>
        <p>
            Images are used to capture users’ attention and differentiate our product. We apply 1px border in
            ‘light-grey’ on all imagery styles to ensure element visibility for all background colors.
        </p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <h3>Default Image</h3>
        <p>
            Thumbnails are small images that represent information in limited space. They typically leads to primary
            content on tap and are placed within cards or lists components.
        </p>
        <Image alt="Test1" src={DefaultAvatar} />
    </PageWrapper>
);

export const Avatar = () => (
    <PageWrapper>
        <h3>Avatar Image</h3>
        <p>
            Avatars should focus on a subject, using a simple background. They can represent a user or a brand (with a
            logo or branded graphic)
        </p>
        <Image avatar alt="Test2" src="" />
        <h3>Placeholder</h3>
        <Image avatar alt="Test2" src={UserAvatar} />
        <h3>User Avatar</h3>
        <Image avatar alt="Test3" src={BrandAvatar} />
        <h3>Brand Avatar</h3>
    </PageWrapper>
);
