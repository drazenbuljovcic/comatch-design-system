import { ChangeEvent, ReactNode } from 'react';
import { WithClassAndId, WithCssGeneratorFunction } from '../../core/types';

export type ComponentProps = WithClassAndId &
    WithCssGeneratorFunction & {
        name: string;

        checked?: boolean;
        children?: ReactNode;
        disabled?: boolean;
        hasError?: boolean;
        onChange?: (
            event: ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>,
            isChecked: boolean,
        ) => void;
        value?: string;
    };
