/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import { WithClassAndId } from './types';

/**
 * A helper method which will simplify the usage of `generateCss` function/prop.
 *
 * NOTE: The function/prop is usually exposed via the `WithCssGeneratorFunc` interface.
 *
 * @param props The component's current props
 */
function runCSSGeneratorFunction(props: any = {}) {
    const { generateCss = () => '', ...rest } = props;
    return generateCss(rest);
}

function buildComponentIdAndClassNameFromProps(
    { className, id }: WithClassAndId,
    ...componentClassNames: Parameters<typeof classnames>
) {
    return {
        ...(id && { id }),
        className: classnames(...componentClassNames, className),
    };
}

function noop(...args: any[]) {}

const uniqueIds = [];
function uniqueId(prefix = '') {
    const nextId = uniqueIds.length;
    uniqueIds[nextId] = nextId;
    return `${prefix}${nextId}`;
}

export { buildComponentIdAndClassNameFromProps, noop, runCSSGeneratorFunction, uniqueId };
