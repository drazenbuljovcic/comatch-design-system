import React from 'react';

import ColorsPage from './colors/Page';
import IconsPage from './icons/Page';
import ToneOfVoicePage from './tone-of-voice/Page';
import TypographyPage from './typography/Page';

export default {
    title: 'Styleguide',
};

export const Colors = () => <ColorsPage />;

export const Icons = () => <IconsPage />;

export const ToneOfVoice = () => <ToneOfVoicePage />;

export const Typography = () => <TypographyPage />;
