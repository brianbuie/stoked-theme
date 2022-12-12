import fs from 'fs';
import path from 'path';
import theme from '../src/index';

console.log('built');
fs.writeFileSync(path.resolve(__dirname, '../themes/stoked.json'), JSON.stringify(theme, null, 2));
