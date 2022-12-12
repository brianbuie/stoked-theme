import {
  // Base Pallette
  bg,
  fg,
  red,
  yellow,
  orange,
  green,
  blue,
  cyan,
  purple,
  pink,
  // Computed & Utilities
  primary,
  secondary,
  comment,
} from './colors';

// Keywords, Punctuation, const, let,
const keywords = purple.hexa();
const operators = cyan.hexa();
// Functions, methods
const functions = blue.hexa();
const classes = red.hexa();
// process, built-in classes
const specials = cyan.hexa();
// Properties, object keys
const keys = pink.hexa();
// Variables, Parameters
const variables = fg.hexa();
// Strings, Numbers, null, true, false
const primitives = yellow.hexa();
// Html tags, components
const tags = green.hexa();
const separators = cyan.hexa();
const brackets = fg.hexa();

export default [
  {
    name: 'Keywords',
    scope: ['keyword', 'storage', 'punctuation.definition.keyword'],
    settings: {
      foreground: keywords,
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'storage.type.function.arrow'],
    settings: {
      foreground: operators,
    },
  },
  {
    name: 'Brackets, braces, parens, etc.',
    scope: [
      'keyword.operator.other.powershell',
      'keyword.other.statement-separator.powershell',
      'meta.brace.round',
      'meta.function-call punctuation',
      'punctuation.definition.arguments.begin',
      'punctuation.definition.arguments.end',
      'punctuation.definition.entity.begin',
      'punctuation.definition.entity.end',
      'punctuation.definition.tag.cs',
      'punctuation.definition.type.begin',
      'punctuation.definition.type.end',
      'punctuation.section.scope.begin',
      'punctuation.section.scope.end',
      'punctuation.terminator.expression.php',
      'storage.type.generic.java',
      'string.template meta.brace',
      'string.template punctuation.accessor',
    ],
    settings: {
      foreground: brackets,
    },
  },
  {
    name: 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
    scope: [
      'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
      'entity.other.attribute-name.placeholder punctuation',
      'entity.other.attribute-name.pseudo-class punctuation',
      'entity.other.attribute-name.pseudo-element punctuation',
      'meta.group.double.toml',
      'meta.group.toml',
      'meta.object-binding-pattern-variable punctuation.destructuring',
      'punctuation.colon.graphql',
      'punctuation.definition.block.scalar.folded.yaml',
      'punctuation.definition.block.scalar.literal.yaml',
      'punctuation.definition.block.sequence.item.yaml',
      'punctuation.definition.entity.other.inherited-class',
      'punctuation.function.swift',
      'punctuation.separator.dictionary.key-value',
      'punctuation.separator.hash',
      'punctuation.separator.inheritance',
      'punctuation.separator.key-value',
      'punctuation.separator.key-value.mapping.yaml',
      'punctuation.separator.namespace',
      'punctuation.separator.pointer-access',
      'punctuation.separator.slice',
      'string.unquoted.heredoc punctuation.definition.string',
      'support.other.chomping-indicator.yaml',
      'punctuation.separator.annotation',
    ],
    settings: {
      foreground: separators,
    },
  },
  {
    name: 'Functions',
    scope: [
      'entity.name.function',
      'meta.function-call.object',
      'meta.function-call.php',
      'meta.function-call.static',
      'meta.method-call.java meta.method',
      'meta.method.groovy',
      'keyword.operator.function.infix',
      'entity.name.function.method',
      'support.function.any-method',
    ],
    settings: {
      foreground: functions,
    },
  },
  {
    name: 'Keys',
    scope: [
      'semantic.property',
      'constant.other.object.key',
      'variable.other.property',
      'variable.other.readwrite.shorthandpropertyname',
      'meta.property-name',
      'meta.object-literal.key',
      'constant.other.object.key string.quoted',
      'support.type.property-name',
      'entity.other.attribute-name',
    ],
    settings: {
      foreground: keys,
    },
  },
  {
    name: 'Function Parameters',
    scope: [
      'meta.function.parameters',
      'entity.name.variable.parameter',
      'meta.at-rule.function variable',
      'meta.at-rule.mixin variable',
      'meta.function.arguments variable.other.php',
      'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
      'variable.parameter',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: variables,
    },
  },
  {
    name: 'Variables',
    scope: ['variable.other.readwrite', 'variable.other'],
    settings: {
      foreground: variables,
    },
  },
  {
    name: 'Classes',
    scope: [
      'support.class',
      'variable.other.class.js',
      'entity.name.class',
      'entity.name.type',
      'entity.name.type.class',
      'entity.other.inherited-class',
    ],
    settings: {
      foreground: classes,
    },
  },
  {
    name: 'Special Built-in Classes and functions',
    scope: [
      'support.function',
      'support.type.object.process.js',
      'variable.defaultLibrary',
      'support.function.magic',
      'support.variable',
      'variable.other.predefined',
    ],
    settings: {
      foreground: specials,
    },
  },
  {
    name: 'Primitives: String, Number, Boolean, Constant',
    scope: [
      'constant.numeric',
      'constant.language',
      'string.regexp',
      'keyword.other.unit',
      'support.constant.property-value',
      'meta.property-value',
      'semantic.string',
      'string.quoted',
      'string.template',
    ],
    settings: {
      foreground: primitives,
    },
  },
  {
    name: 'Tags',
    scope: [
      'entity.name.tag',
      'support.class.component.open',
      'support.class.component.close',
      'punctuation.definition.tag',
    ],
    settings: {
      foreground: tags,
    },
  },
  {
    name: 'Comments',
    scope: ['comment'],
    settings: {
      foreground: comment.hexa(),
    },
  },
  {
    name: 'Italic',
    scope: ['comment', 'markup.italic', 'markup.quote.markdown'],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Bold',
    scope: ['markup.bold', 'punctuation.definition.bold'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'Links',
    scope: ['meta.link.inline.markdown'],
    settings: {
      foreground: blue.hexa(),
    },
  },
];
