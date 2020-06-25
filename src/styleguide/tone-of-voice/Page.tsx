import React from 'react';
import styled from 'styled-components';

import ToThePoint from './ToThePoint';
import PersonalWithFormality from './PersonalWithFormality';
import Bold from './Bold';
import Empathetic from './Empathetic';
import SpecificWording from './SpecificWording';

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
        margin: 0;
        padding: 0;
    }

    h1,
    h3 {
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }

    > div:not(:first-child) {
        margin-top: 60px;
    }
`;

function Page() {
    return (
        <Wrapper>
            <h1>Tone of voice</h1>
            <ToThePoint />
            <PersonalWithFormality />
            <Bold />
            <Empathetic />
            <SpecificWording />
        </Wrapper>
    );
}

export default Page;
