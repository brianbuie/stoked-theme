import { primary, bg, fg, ansi, hexYeah } from './colors.js';

const theme = hexYeah({
  accent: primary,
  background: bg,
  details: 'darker',
  foreground: fg,
  terminal_colors: ansi,
});

export default theme;
