import React from 'react';

import BreakpointsAndGridsPage from './BreakpointAndGrids/Page';
import SpacingPage from './Spacing/Page';
import SkeletonPage from './Skeleton/Page';

export default {
    title: 'Layout',
};

export const BreakpointsAndGrids = () => <BreakpointsAndGridsPage />;

export const Spacing = () => <SpacingPage />;

export const Skeleton = () => <SkeletonPage />;
