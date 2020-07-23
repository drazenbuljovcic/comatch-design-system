import { ChangeEvent, ReactNode } from 'react';

import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';
import { ComponentProps as LabelProps } from '../Label/types';

export type ComponentProps = WithClassAndId &
    WithCssGeneratorFunction & {
        name: string;

        disabled?: boolean;
        hasError?: boolean;
        label?: ReactNode;
        labelProps?: Omit<LabelProps, 'children' | 'htmlFor'>;
        message?: ReactNode;
        messageType?: 'success' | 'error' | 'info' | 'warning';
        multi?: boolean;
        onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, oldValue: string) => void;
        placeholder?: string;
        value?: string;
    };
