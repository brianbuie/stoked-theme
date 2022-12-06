import Color from 'color';

export const background = Color('#282c34');
export const foreground = Color('#a4afb6');
export const red = Color('#E06C75');
export const yellow = Color('#d6b67a');
export const green = Color('#79b973');
export const cyan = Color('#56B6C2');
export const blue = Color('#61AFEF');
export const magenta = Color('#C678DD');

export const none = Color('black').fade(1).hexa();

export const comment = foreground.mix(blue, 0.3).fade(0.45);
