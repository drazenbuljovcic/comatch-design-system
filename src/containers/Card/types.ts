import { ReactNode } from 'react';
import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';

export type CardProps = WithClassAndId &
    WithCssGeneratorFunction & {
        title: ReactNode;

        as?: 'li' | 'div';
        children?: ReactNode;
        content?: ReactNode;
        subTitle?: ReactNode;
    };

export type DeckProps = WithClassAndId &
    WithCssGeneratorFunction & {
        title: ReactNode | ((cards: CardProps[]) => ReactNode);

        cards?: (CardProps & { id: string })[];
        control?: ReactNode | ((cards: CardProps[]) => ReactNode);
    };
