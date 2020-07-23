import { ReactNode } from 'react';
import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';

export type StyledWrapperProps = WithCssGeneratorFunction & {
    inline?: boolean;
    type: 'error' | 'info' | 'success' | 'warning';
};

export type ComponentProps = WithClassAndId &
    WithCssGeneratorFunction & {
        children?: ReactNode;
        inline?: boolean;
        title?: ReactNode;
        type?: 'error' | 'info' | 'success' | 'warning';
    };
