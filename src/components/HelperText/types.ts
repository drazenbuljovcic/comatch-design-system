import { ReactNode } from 'react';
import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';

export type MessageLevel = 'inherit' | 'info' | 'warning' | 'success' | 'error';

export type ComponentProps = WithClassAndId &
    WithCssGeneratorFunction & {
        children: ReactNode;
        level?: MessageLevel;
    };
