import os from 'node:os';
import fs from 'node:fs';
import YAML from 'yaml';
import vscode from '../src/vscode.js';
import warp from '../src/warp.js';
import css from '../src/css.js';

const name = 'stoked';
const displayName = 'Stoked! 🤙';

const builds = {
  vscode: {
    filename: name + '-vscode.json',
    contents: JSON.stringify(vscode, null, 2),
  },
  warp: {
    filename: name + '-warp.yaml',
    contents: YAML.stringify(warp),
  },
  css: {
    filename: name + '-colors.css',
    contents: css,
  },
};

function save(dir, build) {
  fs.writeFileSync(dir + '/' + build.filename, build.contents);
}

// project directory
Object.values(builds).forEach(build => save('themes', build));

// Update Warp theme in home directory
if (process.argv.includes('--everywhere')) {
  save(`${os.homedir()}/.warp/themes`, builds.warp);
}

// 🎉
console.log(`\x1b[3${Math.ceil(Math.random() * 10)}mBuilt: ${displayName}\x1b[0m`);
