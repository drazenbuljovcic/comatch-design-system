/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { AvatarWrapper, Container, Header, MediumTextBlock, SmallTextBlock, Wrapper } from './styled';

import ReusableSkeleton from './ReusableSkeleton';

function SkeletonContent() {
    return (
        <Wrapper>
            <Header />
            <ReusableSkeleton variant="rect" height={12} width={330} />
            <ReusableSkeleton variant="rect" height={20} width={179} />
            <Container>
                <ReusableSkeleton variant="rect" height={16} width={450} />
                <ReusableSkeleton variant="rect" height={236} width={1040} />
            </Container>
            <ReusableSkeleton variant="rect" height={16} width={150} />
            <Container>
                <AvatarWrapper>
                    <SmallTextBlock>
                        <ReusableSkeleton variant="rect" height={16} width={50} />
                        <ReusableSkeleton variant="rect" height={14} width={30} />
                    </SmallTextBlock>
                    <ReusableSkeleton variant="circle" height={47} width={47} margin="margin-bottom: 700px" />
                    <MediumTextBlock>
                        <ReusableSkeleton variant="rect" height={18} width={234} />
                        <ReusableSkeleton variant="rect" height={13} width={135} />
                    </MediumTextBlock>
                </AvatarWrapper>
                <ReusableSkeleton variant="rect" height={14} width={1037} />
                <ReusableSkeleton variant="rect" height={14} width={1037} />
                <ReusableSkeleton variant="rect" height={14} width={1037} />
                <ReusableSkeleton variant="rect" height={14} width={615} />
                <ReusableSkeleton variant="rect" height={14} width={615} />
            </Container>
        </Wrapper>
    );
}

export default SkeletonContent;
