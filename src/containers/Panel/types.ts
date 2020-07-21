import { ReactNode } from 'react';
import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';

export type ComponentProps = WithClassAndId &
    WithCssGeneratorFunction & {
        title: ReactNode;

        children?: ReactNode;
        open?: boolean;
    };
