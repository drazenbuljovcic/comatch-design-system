/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import styled from 'styled-components';

import SkeletonContent from './SkeletonContent';

function Skeleton() {
    return (
        <div>
            <h3>Anatomy</h3>
            <SkeletonContent />
        </div>
    );
}

export default Skeleton;
