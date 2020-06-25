import React from 'react';
import styled from 'styled-components';

const WrongWord = styled.div`
    span {
        background-color: white;
}
    }
    p {
        font-size: 18px;
        margin-top: none;
        position: relative;
        font-weight: bold;
    }
    p:after {
        content:"";
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 0.5em;
    border-top: 1px solid black;
    z-index: -1;
    }
`;

const Word = styled.div`
    span {
        font-size: 18px;
        font-weight: bold;
    }
    p {
        font-size: 18px;
        margin-top: none;
    }
    hr {
        color: #000000;
        background-color: #000000;
        height: 0.5;
        border-color: #000000;
    }
`;

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;

    > ${Word} {
        flex: 50%;
        margin-bottom: 30px;
    }
    > ${WrongWord} {
        flex: 50%;
        margin-bottom: 30px;
    }
`;

function SpecificWording() {
    return (
        <div>
            <h3>Specific wording guidelines</h3>
            <Wrapper>
                <WrongWord>
                    <p>
                        <span>freelancer</span>
                    </p>
                </WrongWord>
                <Word>
                    <span>independent consultant</span>
                    <p>Freelancer is often connected to creative professionals and low income.</p>
                </Word>
                <WrongWord>
                    <p>
                        <span>platform</span>
                    </p>
                </WrongWord>
                <Word>
                    <span>marketplace</span>
                    <p>Platform implicates something static, marketplace means that two sides are interacting.</p>
                </Word>
                <WrongWord>
                    <p>
                        <span>COMATCH-consultant</span>
                    </p>
                </WrongWord>
                <Word>
                    <span>consultant of the COMATCH community/network</span>
                    <p>
                        COMATCH consultant implies fully employed consultants and create the risk of ‘false’
                        self-employment (Scheinselbstständigkeit).
                    </p>
                </Word>
                <WrongWord>
                    <p>
                        <span>CoMatch, comatch</span>
                    </p>
                </WrongWord>
                <Word>
                    <span>COMATCH</span>
                    <p>Branding needs to be consistent (In copy text “Comatch” is allowed).</p>
                </Word>
            </Wrapper>
        </div>
    );
}

export default SpecificWording;
