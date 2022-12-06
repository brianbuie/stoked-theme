import { comment } from './colors';

export default {
  colors: {
    'editorLineNumber.foreground': comment.hexa(),
    'editorLineNumber.activeForeground': comment.hexa(),
  },
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment'],
      settings: {
        foreground: comment.hexa(),
        fontStyle: 'italic',
      },
    },
  ],
};
