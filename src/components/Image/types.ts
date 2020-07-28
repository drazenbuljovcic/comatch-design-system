import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';

export type ComponentProps = WithClassAndId &
    WithCssGeneratorFunction & {
        alt: string;
        src: string;

        avatar?: boolean;
    };
