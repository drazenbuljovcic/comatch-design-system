import React from 'react';

import { Paper } from '..';

const StoryDefinition = {
    component: Paper,
    title: 'Paper',
    parameters: {
        info: { inline: true },
    },
};

const Default = () => <Paper>This is paper</Paper>;

export { Default };
export default StoryDefinition;
