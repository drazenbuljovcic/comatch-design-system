/* eslint-disable @typescript-eslint/no-explicit-any */

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

export { runCSSGeneratorFunction };
