import React from 'react';
import styled from 'styled-components';

import Skeleton from './Skeleton';

const Wrapper = styled.div`
    padding: 100px;

    h1 {
        font-size: 72px;
        margin: 0 0 30px 0;
    }
    p {
        font-size: 18px;
    }
    > div:not(:first-child) {
        margin-top: 100px;
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
            <Skeleton />
        </Wrapper>
    );
}

export default Page;
