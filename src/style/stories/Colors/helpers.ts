import { Theme } from '../..';
import palettes from '../../theme/palettes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function paletteToColorsArr(paletteName: keyof Theme['palettes']): any {
    const { [paletteName]: palette } = palettes;
    return Object.keys(palette).map((key) => [key, palette[key as keyof typeof palette]]);
}

export { paletteToColorsArr };
