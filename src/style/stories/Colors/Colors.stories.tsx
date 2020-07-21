import React from 'react';

import palettes from '../../theme/palettes';

import { paletteToColorsArr } from './helpers';
import { PageWrapper } from './styled';
import Palette from './Palette';
import RecommendedUsage from './RecommendedUsage';

export default { title: 'Style Guide/Colors' };

export const Palettes = () => (
    <PageWrapper>
        <h1>Palettes</h1>
        <div className="Palettes">
            <Palette name="PRIMARY" colors={paletteToColorsArr('primary')} />
            <Palette name="GREYSCALE" colors={paletteToColorsArr('greyScale')} />
        </div>
        <div className="Palettes">
            <Palette name="ERROR" colors={paletteToColorsArr('error')} />
            <Palette name="WARNING" colors={paletteToColorsArr('warning')} />
            <Palette name="SUCCESS" colors={paletteToColorsArr('success')} />
            <Palette name="INFO" colors={paletteToColorsArr('info')} />
        </div>
    </PageWrapper>
);

export const Usage = () => (
    <PageWrapper>
        <h1>Recommended Usage</h1>
        <div>
            <RecommendedUsage color={palettes.primary.main.bgColor} notes="primary button color, links" />
            <RecommendedUsage color={palettes.primary.lighter.bgColor} notes="graphs, tables" />
            <RecommendedUsage color={palettes.primary.light.bgColor} notes="hover state" />
            <RecommendedUsage color={palettes.primary.dark.bgColor} notes="active state" />
            <RecommendedUsage color={palettes.greyScale.light.bgColor} notes="background color" />
            <RecommendedUsage color={palettes.greyScale.lighter.bgColor} notes="paper" />
            <RecommendedUsage color={palettes.greyScale.darker.bgColor} notes="primary text color" />
            <RecommendedUsage color={palettes.greyScale.dark.bgColor} notes="secondary text color" />
            <RecommendedUsage color={palettes.greyScale.main.bgColor} notes="disabled text, buttons and outlines" />

            <RecommendedUsage color={palettes.success.dark.bgColor} notes="success alerts, labels" />
            <RecommendedUsage color={palettes.success.light.bgColor} notes="success alerts, labels background" />
            <RecommendedUsage color={palettes.warning.main.bgColor} notes="warning alerts, labels" />
            <RecommendedUsage color={palettes.warning.light.bgColor} notes="warning alerts, labels background" />
            <RecommendedUsage color={palettes.warning.dark.bgColor} notes="warning alerts, labels text" />
            <RecommendedUsage color={palettes.error.dark.bgColor} notes="error alerts, labels" />
            <RecommendedUsage color={palettes.error.main.bgColor} notes="error alerts, labels background" />
        </div>
    </PageWrapper>
);
