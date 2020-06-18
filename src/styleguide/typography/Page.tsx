import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import FontFamily from './FontFamily';
import LineHeight from './LineHeight';
import TypeScale from './TypeScale';

const Wrapper = styled.div`
    padding: 100px;

    h1 {
        font-size: 72px;
    }

    h3 {
        font-size: 32px;
    }

    p {
        font-size: 18px;
        margin: 10px 0 0;
        padding: 0;
    }

    h1,
    h3 {
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }

    /* This is to be fixed in a min. */
    > div:not(:first-child) {
        margin-top: 100px;
    }
`;

function Page() {
    return (
        <Wrapper>
            <Heading />
            <FontFamily />
            <LineHeight />
            <TypeScale />
        </Wrapper>
    );
}

export default Page;
