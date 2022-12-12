import Color from 'color';

// Base Pallette
export const red = Color('#E06C75');
export const yellow = Color('#cfcf79');
export const orange = Color('#dca56a');
export const green = Color('#6ec988');
export const blue = Color('#61AFEF');
export const cyan = Color('#7dd5e9');
export const purple = Color('#c07cd4');
export const pink = Color('#f886c7');
export const bg = Color('#282c34');
export const fg = Color('#d0d6de');

// Common across workbench and tokens
export const primary = pink;
export const secondary = blue;
export const comment = bg.lighten(1.5).saturate(0.8);
