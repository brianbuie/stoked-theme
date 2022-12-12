import workbench from './workbench';
import tokens from './tokens';

const semantics = {};
const tokenColors = tokens
  .map(def => {
    def.scope = def.scope.filter(selector => {
      if (!selector.includes('semantic.')) return true;
      const token = selector.split('.').at(-1);
      semantics[token] = semantics[token] || {};
      semantics[token].foreground = def.settings.foreground;
      semantics[token].italic = def.settings.fontStyle === 'italic' || undefined;
    });
    return def;
  })
  .filter(def => def.scope.length);

const theme = {
  $schema: 'vscode://schemas/color-theme',
  name: 'Stoked',
  author: 'Brian Buie',
  semanticHighlighting: true,
  // semanticTokenColors: semantics,
  colors: workbench,
  tokenColors,
};

export default theme;
