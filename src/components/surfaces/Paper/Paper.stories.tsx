import React from 'react';
import { Paper } from '.';

export default { title: 'Paper' };

export const withText = () => <Paper>Hello Button</Paper>;

export const withEmoji = () => (
    <Paper>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Paper>
);
