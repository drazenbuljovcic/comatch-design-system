import { ReactNode } from 'react';
import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';

export type ComponentProps = WithClassAndId &
    WithCssGeneratorFunction & {
        children?: ReactNode;
        disabled?: boolean;
        onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        secondary?: boolean;
    };
