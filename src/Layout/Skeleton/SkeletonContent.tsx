/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { AvatarWrapper, Container, Header, MediumTextBlock, SmallTextBlock, Wrapper } from './styled';

import Skeleton from './ReusableSkeleton';

function SkeletonContent() {
    return (
        <Wrapper>
            <Header />
            <Skeleton height={12} width={330} />
            <Skeleton height={20} width={179} />
            <Container>
                <Skeleton height={16} width={450} />
                <Skeleton height={236} width={1040} />
            </Container>
            <Skeleton height={16} width={150} />
            <Container>
                <AvatarWrapper>
                    <SmallTextBlock>
                        <Skeleton height={16} width={50} />
                        <Skeleton height={14} width={30} />
                    </SmallTextBlock>
                    <Skeleton variant="circle" height={47} width={47} />
                    <MediumTextBlock>
                        <Skeleton height={18} width={234} />
                        <Skeleton height={13} width={135} />
                    </MediumTextBlock>
                </AvatarWrapper>
                <Skeleton height={14} width={1037} />
                <Skeleton height={14} width={1037} />
                <Skeleton height={14} width={1037} />
                <Skeleton height={14} width={615} />
                <Skeleton height={14} width={615} />
            </Container>
        </Wrapper>
    );
}

export default SkeletonContent;
