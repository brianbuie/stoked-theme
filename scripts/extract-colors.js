import fs from 'fs';
import path from 'path';
import { jsonc } from 'jsonc';

const filepath =
  path.resolve(__dirname, '../example-themes') + '/' + process.argv.find(arg => arg.includes('.json'));
const theme = jsonc.parse(fs.readFileSync(filepath, 'utf-8'));

const colors = new Set();

function addIfColor(value) {
  if (value && typeof value === 'string' && value.charAt(0) === '#') colors.add(value.toLowerCase());
}

const appColors = Object.entries(theme.colors).reduce((all, [prop, value]) => {
  const clean = value.toLowerCase();
  addIfColor(clean);
  if (!all[clean]) all[clean] = [];
  all[clean].push(prop);
  return all;
}, {});

const uniqueSettings = theme.tokenColors.reduce((all, { scope, settings }) => {
  Object.keys(settings).forEach(key => {
    const prop = `${key}:${settings[key]}`;
    if (!all[prop]) all[prop] = [];
    all[prop] = [...all[prop], scope].flat(Infinity);
  });
  return all;
}, {});

const tokenColors = Object.entries(uniqueSettings).map(([key, scope]) => {
  const [setting, value] = key.split(':');
  addIfColor(value);
  return {
    scope: scope.sort((a, z) => a.localeCompare(z)),
    settings: {
      [setting]: value,
    },
  };
});

const save = {
  colors: [...colors.values()].sort((a, z) => a.localeCompare(z)),
  appColors,
  tokenColors,
};

const { dir, name } = path.parse(filepath);

fs.writeFileSync(`${dir}/${name}-colors.json`, JSON.stringify(save, null, 2));
