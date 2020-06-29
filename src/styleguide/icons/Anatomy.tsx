import React from 'react';
import styled from 'styled-components';

import anatomy from './anatomy.png';

const Wrapper = styled.div`
    > :last-child {
        margin-top: 60px;
    }
`;

function Anatomy() {
    return (
        <Wrapper>
            <h3>Anatomy</h3>
            <p>
                The iconography system is based on the shape of the bubbles to create a unique and recognizable COMATCH
                style. Icons can be use in many color variations.
            </p>
            <img src={anatomy} alt="anatomy" />
        </Wrapper>
    );
}

export default Anatomy;
