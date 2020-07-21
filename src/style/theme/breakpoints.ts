const xxl = 1280;
const xl = 1025;
const lg = 800;
const md = 600;
const sm = 480;
const xs = 320;

export default {
    raw: { xxl, xl, lg, md, sm, xs },
    xxl: `@media only screen and (min-width: ${xxl}px)`,
    xl: `@media only screen and (min-width: ${xl}px)`,
    lg: `@media only screen and (min-width: ${lg}px)`,
    md: `@media only screen and (min-width: ${md}px)`,
    sm: `@media only screen and (min-width: ${sm}px)`,
    xs: `@media only screen and (min-width: ${xs}px)`,
};
