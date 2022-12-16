const fs = require('fs');
const path = require('path');
const flattenKeys = require('flat');
const { ui, syntax, semantic } = require('../src/stoked');

// Workbench
const colors = flattenKeys(ui);
Object.entries(colors).forEach(([key, val]) => (colors[key] = val || undefined));

// Semantic Tokens
const semanticTokenColors = {};
Object.entries(semantic).forEach(([key, val]) => (semanticTokenColors[key] = val || undefined));

const theme = {
  $schema: 'vscode://schemas/color-theme',
  name: 'Stoked',
  author: 'Brian Buie',
  semanticHighlighting: true,
  semanticTokenColors,
  colors,
  tokenColors: syntax,
};

fs.writeFileSync(path.resolve(__dirname, '../themes/stoked.json'), JSON.stringify(theme, null, 2));
console.log('built');
