import React, { memo } from 'react';
import classnames from 'classnames';

import Card from './Card';
import { DeckProps as ComponentProps } from './types';
import { DeckWrapper } from './styled';

function Deck({ cards = [], className, control, generateCss, id, title }: ComponentProps) {
    return (
        <DeckWrapper id={id} className={classnames('Deck', className)} generateCss={generateCss}>
            <div>
                <div className="Title">{typeof title === 'function' ? title(cards) : title}</div>
                {!!control && <div className="Control">{typeof control === 'function' ? control(cards) : control}</div>}
            </div>
            <ul>
                {cards.map((cardProps) => (
                    <Card key={cardProps.id} {...cardProps} as="li" />
                ))}
            </ul>
        </DeckWrapper>
    );
}

export { DeckWrapper as StyledDeck };
export default memo(Deck);
