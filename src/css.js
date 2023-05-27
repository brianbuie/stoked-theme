import { palette, hexYeah } from './colors.js';

const hexy = hexYeah(palette);

const root = `:root {
${Object.entries(hexy)
  .map(([name, hex]) => `\t--stoked-${name}: ${hex};`)
  .join('\n')}
}`;

export default root;
