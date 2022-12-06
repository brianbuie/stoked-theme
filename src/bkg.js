import { background, comment, foreground, blue, magenta, none, green, yellow, red, cyan } from './colors';

function panels() {
  const darker = background.darken(0.2);
  const lighter = background.lighten(0.3);
  return {
    // Background
    'editor.background': background.hex(),
    'tab.activeBackground': background.hex(),
    'tab.activeBorderTop': blue.hex(),
    'tab.hoverBorderTop': blue.hex(),
    'tab.inactiveBackground': darker.hexa(),
    'tab.hoverBackground': background.hexa(),
    'statusBar.background': darker.hex(),
    'sideBar.background': darker.hex(),
    'sideBarSectionHeader.background': background.hexa(),
    'activityBar.background': background.hex(),
    'editorGroupHeader.tabsBackground': darker.hex(),
    'editorGroup.border': darker.hex(),
    'input.background': darker.darken(0.2).hexa(),
    'editorHoverWidget.background': darker.hex(),
    'editorWidget.background': darker.hex(),
    'editorHoverWidget.border': none,
    'editorWidget.border': none,
    'scrollbarSlider.background': lighter.hex(),
    'scrollbarSlider.activeBackground': lighter.lighten(0.2).hex(),
    'scrollbarSlider.hoverBackground': lighter.lighten(0.2).hex(),
    'list.activeSelectionBackground': background.hexa(),
    'list.inactiveSelectionBackground': background.hexa(),
    'list.focusBackground': background.hexa(),
    'list.hoverBackground': background.darken(0.1).hexa(),
    'list.dropBackground': green.fade(0.8).hexa(),
    'list.indentGuideStroke': foreground.hexa(),
    'titleBar.activeBackground': background.darken(0.2).hex(),
    'titleBar.inactiveBackground': background.darken(0.2).hex(),
    // Foreground
    'tab.activeForeground': foreground.hex(),
    'tab.inactiveForeground': comment.hexa(),
    'editor.foreground': foreground.hex(),
    'statusBar.foreground': foreground.hex(),
    'sideBar.foreground': foreground.hex(),
    'editorWidget.foreground': foreground.hex(),
    'editorHoverWidget.foreground': foreground.hex(),
    'list.activeSelectionForeground': foreground.lighten(0.1).hex(),
    'list.highlightForeground': foreground.hex(),
    'list.inactiveSelectionForeground': foreground.hex(),
    'titleBar.activeForeground': foreground.hex(),
    'titleBar.inactiveForeground': foreground.hex(),
  };
}

function highlights() {
  return {
    'editorCursor.foreground': foreground.hexa(),
    // Selection & Matches
    'editor.selectionBackground': yellow.fade(0.7).hexa(),
    'editor.selectionHighlightBackground': foreground.fade(0.85).hexa(),
    // Find Active & Matches
    'editor.findMatchBackground': red.fade(0.5).hexa(),
    'editor.findMatchHighlightBackground': red.fade(0.8).hexa(),
    // Editor Highlights
    'editorBracketMatch.background': background.lighten(0.5).hexa(),
    'editorBracketMatch.border': none,
    'editor.lineHighlightBackground': background.lighten(0.1).hexa(),
    // Git status
    'gitDecoration.untrackedResourceForeground': green.hexa(),
    'gitDecoration.modifiedResourceForeground': yellow.hexa(),
    'gitDecoration.ignoredResourceForeground': comment.hexa(),
    // Explorer warnings and errors
    'list.errorForeground': red.hexa(),
    'list.warningForeground': yellow.hexa(),
    // Activity Bar (far left)
    'activityBar.inactiveForeground': foreground.fade(0.5).hexa(),
    'activityBar.foreground': blue.hex(),
    'activityBar.activeBorder': blue.hex(),
    focusBorder: none,
  };
}

function badgesButtons() {
  const backgroundDarker = blue.darken(0.4);
  const foregroundLigher = foreground.lighten(0.2);
  return {
    // Background
    'badge.background': blue.hex(),
    'activityBarBadge.background': blue.hex(),
    // Foreground
    'badge.foreground': background.darken(1).hex(),
    'activityBarBadge.foreground': background.darken(1).hex(),
  };
}

export default {
  colors: {
    ...panels(),
    ...highlights(),
    ...badgesButtons(),
  },
  tokenColors: [],
};
