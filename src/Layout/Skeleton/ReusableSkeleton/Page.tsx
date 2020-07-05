/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

import SkeletonContent from './SkeletonContent';

const Wrapper = styled.div`
    padding: 100px;

    h1 {
        font-size: 72px;
        margin: 0 0 20px 0;
    }
    p {
        font-size: 18px;
    }
    p:last-child {
        font-size: 14px;
    }
`;
function Page() {
    return (
        <Wrapper>
            <h1>Skeleton</h1>
            <p>
                Skeleteon is a placeholder preview of the content before the data gets loaded to reduce load-time
                frustration.
            </p>
            <SkeletonContent />
            <p>
                <b>Container:</b> replaces cards and panels
                <br />
                <b>Rexctangle:</b> replaces thumbnails, graphs, tables
                <br />
                <b>Circle:</b> replaces avatars
                <br />
                <b>Text:</b> replaces h1, h2, sh1, sh2, body
            </p>
        </Wrapper>
    );
}

export default Page;
