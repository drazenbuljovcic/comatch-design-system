/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyledProps } from 'styled-components';

// classnames (NPM; copied from node_modules/classnames/types):
export type ClassDictionary = { [id: string]: any };
export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;
export type ClassArray = {} & Array<ClassValue>;
export type ClassNamesFn = (...classes: ClassValue[]) => string;
// === classnames (NPM)

export type CSSGeneratorFunction = (props: StyledProps<{}>) => string;

export type WithClassAndId = {
    id?: string;
    className?: ClassValue;
};

export type WithCssGeneratorFunction = {
    generateCss?: CSSGeneratorFunction;
};
