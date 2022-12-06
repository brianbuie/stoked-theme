import bkg from './bkg';
import strings from './strings';

const theme = {
  name: 'Buoy Theme',
  colors: {
    ...bkg.colors,
    ...strings.colors,
  },
  tokenColors: [...bkg.tokenColors, ...strings.tokenColors],
};

export default theme;
