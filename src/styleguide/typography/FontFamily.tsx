/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
`;
const FontExample = styled.div`
    margin-right: 20px;
    h4 {
        line-height: 50px;
        font-size: 48px;
        border-bottom: 1px solid black;
        margin: 0;
        &:first-child {
            font-weight: 100;
        }
    }
    h5 {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        margin: 5px;
    }
`;
function FontFamily() {
    return (
        <div>
            <Wrapper>
                <FontExample>
                    <h4>Aa</h4>
                    <h5>regular</h5>
                </FontExample>
                <FontExample>
                    <h4>
                        <b>Aa</b>
                    </h4>
                    <h5>bold</h5>
                </FontExample>
            </Wrapper>
            <p>
                <b>Meet ATC Overlook:</b>
                <br />
                a b c d e f g h i j k l m n o p q r s t u v w x y z
                <br />
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                <br />0 1 2 3 4 5 6 7 8 9 . : ! - –
            </p>
        </div>
    );
}

export default FontFamily;
