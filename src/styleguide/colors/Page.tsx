import React from 'react';

import Palette from './Palette';
import { PalettesList, PageWrapper, Page as Wrapper } from './styled';
import { palettes } from './constants';

const colorText =
    'We use COMATCH blue as highlight color e.g. for the primary style components as well as icons and links.';

function Page() {
    return (
        <PageWrapper>
            <Wrapper>
                <h1>Colors</h1>
                <p>{colorText}</p>
                <h2>Palettes</h2>
                <PalettesList>
                    <Palette {...palettes.Primary} />
                    <Palette {...palettes.Grayscale} />
                    <Palette {...palettes.Error} />
                    <Palette {...palettes.Warning} />
                    <Palette {...palettes.Success} />
                    <Palette {...palettes.Info} />
                </PalettesList>
            </Wrapper>
        </PageWrapper>
    );
}

export default Page;
