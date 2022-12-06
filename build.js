import fs from 'fs';
import path from 'path';
import theme from './src/index';

console.log('built');
fs.writeFileSync(path.resolve('./themes/buoy-generated-theme.json'), JSON.stringify(theme, null, 2));
