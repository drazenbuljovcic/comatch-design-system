import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyles, Provider } from '../src/style';

// Adds a decorator which will ensure that each story will use the `default theme`:
addDecorator((storyFn) => (
    <Provider>
        <GlobalStyles />
        {storyFn()}
    </Provider>
));
