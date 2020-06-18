import React from 'react';
import { Title, List, ListItem, Palette as Wrapper } from './styled';

type Shade = {
    bgColor: string;
    contrast: string;
};

type ComponentProps = {
    title: string;
    light: Shade;
    main: Shade;
    dark: Shade;
    lighter?: Shade;
    darker?: Shade;
};

type PaletteShade = Shade & {
    title: string;
};

function Palette({ title, light, main, dark, lighter, darker }: ComponentProps) {
    const paletteShades: PaletteShade[] = [
        ...(lighter ? [{ title: 'lighter', ...lighter }] : []),
        { title: 'light', ...light },
        { title: 'main', ...main },
        { title: 'dark', ...dark },
        ...(darker ? [{ title: 'darker', ...darker }] : []),
    ];

    return (
        <Wrapper>
            <Title>{title}</Title>
            <List>
                {paletteShades.map((pShade) => (
                    <ListItem key={pShade.title} {...pShade}>
                        <span>{pShade.title}</span>
                        <span>{pShade.bgColor}</span>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
}

export { Wrapper as StyledPalette };
export default Palette;
