import { primary, bg, white, ansi, hexYeah } from './colors.js';

const theme = hexYeah({
  accent: primary.mix(bg),
  background: bg,
  details: 'darker',
  foreground: white,
  terminal_colors: ansi,
});

export default theme;
