/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import {
    Wrapper,
    Header,
    Title,
    SubTitle,
    Container,
    ContainerTitle,
    Rextangle,
    AvatarWrapper,
    SmallTextBlock,
    HalfLineText,
    MediumTextBlock,
    Avatar,
    RtlText,
    LineText,
} from './styled';

function SkeletonContent() {
    return (
        <Wrapper>
            <Header />
            <Title />
            <SubTitle />
            <Container>
                <ContainerTitle />
                <Rextangle />
            </Container>
            <SubTitle />
            <Container>
                <AvatarWrapper>
                    <SmallTextBlock>
                        <LineText />
                        <RtlText />
                    </SmallTextBlock>
                    <Avatar />
                    <MediumTextBlock>
                        <LineText />
                        <HalfLineText />
                    </MediumTextBlock>
                </AvatarWrapper>
                <LineText />
                <LineText />
                <HalfLineText />
                <HalfLineText />
            </Container>
        </Wrapper>
    );
}

export default SkeletonContent;
