import { generatePixelArray } from "../utils/pixelArray";

export const baseColor = '#fff';
export const baseWidth = 6;
export const baseHeight = 6;

export const defaultPixelArray = generatePixelArray(baseHeight, baseWidth);

export enum editorMods {
    PAINT = 'paint',
    FILL = 'fill',
    COLOR_SELECTOR = 'colorSelector',
    ERASER = 'eraser'
}

export enum buttonType {
    NORMAL = 'normal',
    POSITIVE = 'positive',
    NEGATIVE = 'negative',
    ACTION = 'action'
}
