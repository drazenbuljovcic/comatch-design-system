/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const Account = styled.div`
    display: flex;
    width: 580px;
    height: 92px;
    margin-top: 16px;
    padding: 0 0 0 16px;
    background-color: #f7fbfd;
    align-items: center;
    p {
        margin: none;
        padding-left: none;
    }
`;

function FontAwesome() {
    return (
        <div>
            <h3>Font-awesome</h3>
            <p>
                For standard icons we use font-awesome icon library: <b>https://fontawesome.com/icons</b>
                <br />
                <br />
                To get access to premium icons sign in with our COMATCH account:
            </p>
            <Account>
                <p>
                    <b>Username:</b> t.trinh@comatch.com
                    <br />
                    <b>Password:</b> Yjr6guChKyqk
                </p>
            </Account>
        </div>
    );
}

export default FontAwesome;
