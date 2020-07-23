import React from 'react';
import { PageWrapper } from '../../core/storybook';
import { Deck } from '..';

export default {
    title: 'Containers/Deck (Cards)',
    component: Deck,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Deck of Cards</h1>
        <p>This is a helper component which can facilitate a list of cards.</p>
    </PageWrapper>
);

export const Empty = () => (
    <PageWrapper>
        <Deck title="Deck..." />
    </PageWrapper>
);

export const EmptyWithControl = () => (
    <PageWrapper>
        <Deck title="Deck..." control="The control..." />
    </PageWrapper>
);

export const EmptyWithRenderPropForControl = () => (
    <PageWrapper>
        <Deck title="Deck..." control={(cards) => `There are "${cards.length}" cards in the deck`} />
    </PageWrapper>
);

export const WithCards = () => (
    <PageWrapper>
        <Deck
            title="Deck..."
            control={(cards) => `There are "${cards.length}" cards in the deck`}
            cards={[
                {
                    id: 'card-1',
                    className: 'a-card',
                    title: 'Card 1',
                    subTitle: 'Card 1 sub-title',
                    content: 'Card 1 content',
                },
                {
                    id: 'card-2',
                    className: 'a-card',
                    title: 'Card 2',
                    content: 'Card 2 content',
                },
                {
                    id: 'card-3',
                    className: 'a-card',
                    title: 'Card 3',
                    content: 'Card 3 content',
                },
            ]}
        />
    </PageWrapper>
);
