const Color = require('color');

// Base Colors
const red = Color('#E06C75');
const yellow = Color('#b7b767');
const orange = Color('#dca56a');
const green = Color('#6ec988');
const blue = Color('#5a9ed7');
const cyan = Color('#56B6C2');
const purple = Color('#9872c3');
const pink = Color('#de79b2');
const bg = Color('#262a31');
const fg = Color('#ABB2BF').mix(pink, 0.15);

// Workbench
const primary = pink;
const secondary = blue;
const comment = bg.lighten(1.5).saturate(0.8);
const fgDark = bg.darken(0.5);
const highlight = primary.fade(0.95);
const none = bg.fade(1);
const border = bg.darken(0.7);

exports.ui = {
  activityBar: {
    activeBackground: primary.mix(bg, 1).hexa(),
    activeBorder: primary.hexa(),
    activeFocusBorder: '',
    background: bg.darken(0.2).hexa(),
    border: border.hexa(),
    dropBorder: '',
    foreground: primary.hexa(),
    inactiveForeground: comment.hexa(),
  },
  activityBarBadge: {
    background: primary.hexa(),
    foreground: fgDark.hexa(),
  },
  activityBarItem: {
    settingsProfilesBackground: '',
    settingsProfilesForeground: '',
    settingsProfilesHoverForeground: '',
  },
  badge: {
    background: primary.hexa(),
    foreground: fgDark.hexa(),
  },
  banner: {
    background: '',
    foreground: '',
    iconForeground: '',
  },
  breadcrumb: {
    activeSelectionForeground: '',
    background: '',
    focusForeground: '',
    foreground: '',
  },
  breadcrumbPicker: {
    background: '',
  },
  button: {
    background: '',
    border: '',
    foreground: '',
    hoverBackground: '',
    secondaryBackground: '',
    secondaryForeground: '',
    secondaryHoverBackground: '',
    separator: '',
  },
  charts: {
    blue: '',
    foreground: '',
    green: '',
    lines: '',
    orange: '',
    purple: '',
    red: '',
    yellow: '',
  },
  checkbox: {
    background: '',
    border: '',
    foreground: '',
  },
  commandCenter: {
    activeBackground: '',
    activeForeground: '',
    background: '',
    border: '',
    foreground: '',
    inactiveBorder: '',
    inactiveForeground: '',
  },
  contrastActiveBorder: '',
  contrastBorder: '',
  debugConsole: {
    errorForeground: '',
    infoForeground: '',
    sourceForeground: '',
    warningForeground: '',
  },
  debugConsoleInputIcon: {
    foreground: '',
  },
  debugExceptionWidget: {
    background: '',
    border: '',
  },
  debugIcon: {
    breakpointCurrentStackframeForeground: '',
    breakpointDisabledForeground: '',
    breakpointForeground: '',
    breakpointStackframeForeground: '',
    breakpointUnverifiedForeground: '',
    continueForeground: '',
    disconnectForeground: '',
    pauseForeground: '',
    restartForeground: '',
    startForeground: '',
    stepBackForeground: '',
    stepIntoForeground: '',
    stepOutForeground: '',
    stepOverForeground: '',
    stopForeground: '',
  },
  debugTokenExpression: {
    boolean: '',
    error: '',
    name: '',
    number: '',
    string: '',
    value: '',
  },
  debugToolBar: {
    background: '',
    border: '',
  },
  debugView: {
    exceptionLabelBackground: '',
    exceptionLabelForeground: '',
    stateLabelBackground: '',
    stateLabelForeground: '',
    valueChangedHighlight: '',
  },
  descriptionForeground: '',
  diffEditor: {
    border: '',
    diagonalFill: '',
    insertedLineBackground: '',
    insertedTextBackground: '',
    insertedTextBorder: '',
    removedLineBackground: '',
    removedTextBackground: '',
    removedTextBorder: '',
  },
  diffEditorGutter: {
    insertedLineBackground: '',
    removedLineBackground: '',
  },
  diffEditorOverview: {
    insertedForeground: '',
    removedForeground: '',
  },
  disabledForeground: comment.hexa(),
  dropdown: {
    background: '',
    border: '',
    foreground: '',
    listBackground: '',
  },
  editor: {
    background: bg.hexa(),
    findMatchBackground: secondary.fade(0.6).hexa(),
    findMatchBorder: '',
    findMatchHighlightBackground: secondary.fade(0.8).hexa(),
    findMatchHighlightBorder: '',
    findRangeHighlightBackground: '',
    findRangeHighlightBorder: '',
    focusedStackFrameHighlightBackground: '',
    foldBackground: bg.darken(0.1).hexa(),
    foreground: fg.hexa(),
    hoverHighlightBackground: '',
    inactiveSelectionBackground: '',
    inlineValuesBackground: '',
    inlineValuesForeground: '',
    lineHighlightBackground: highlight.hexa(),
    lineHighlightBorder: '',
    linkedEditingBackground: '',
    rangeHighlightBackground: '',
    rangeHighlightBorder: '',
    selectionBackground: primary.fade(0.65).hexa(),
    selectionForeground: '',
    selectionHighlightBackground: fg.fade(0.85).hexa(),
    selectionHighlightBorder: '',
    snippetFinalTabstopHighlightBackground: '',
    snippetFinalTabstopHighlightBorder: '',
    snippetTabstopHighlightBackground: '',
    snippetTabstopHighlightBorder: '',
    stackFrameHighlightBackground: '',
    symbolHighlightBackground: '',
    symbolHighlightBorder: '',
    wordHighlightBackground: '',
    wordHighlightBorder: '',
    wordHighlightStrongBackground: '',
    wordHighlightStrongBorder: '',
  },
  editorActiveLineNumber: {
    foreground: '',
  },
  editorBracketHighlight: {
    foreground1: pink.hexa(),
    foreground2: purple.hexa(),
    foreground3: blue.hexa(),
    foreground4: '',
    foreground5: '',
    foreground6: '',
    unexpectedBracket: {
      foreground: red.hexa(),
    },
  },
  editorBracketMatch: {
    background: '',
    border: none.hexa(),
  },
  editorBracketPairGuide: {
    activeBackground1: '',
    activeBackground2: '',
    activeBackground3: '',
    activeBackground4: '',
    activeBackground5: '',
    activeBackground6: '',
    background1: '',
    background2: '',
    background3: '',
    background4: '',
    background5: '',
    background6: '',
  },
  editorCodeLens: {
    foreground: '',
  },
  editorCommentsWidget: {
    rangeActiveBackground: '',
    rangeActiveBorder: '',
    rangeBackground: '',
    rangeBorder: '',
    resolvedBorder: '',
    unresolvedBorder: '',
  },
  editorCursor: {
    background: '',
    foreground: fg.hexa(),
  },
  editorError: {
    background: '',
    border: '',
    foreground: '',
  },
  editorGhostText: {
    background: '',
    border: '',
    foreground: '',
  },
  editorGroup: {
    border: border.hexa(),
    dropBackground: highlight.opaquer(0.3).hexa(),
    dropIntoPromptBackground: '',
    dropIntoPromptBorder: '',
    dropIntoPromptForeground: '',
    emptyBackground: '',
    focusedEmptyBorder: '',
  },
  editorGroupHeader: {
    border: '',
    noTabsBackground: '',
    tabsBackground: bg.darken(0.2).hexa(),
    tabsBorder: '',
  },
  editorGutter: {
    addedBackground: green.fade(0.6).hexa(),
    something: 'new',
    background: '',
    commentRangeForeground: '',
    deletedBackground: red.fade(0.6).hexa(),
    foldingControlForeground: '',
    modifiedBackground: secondary.hexa(),
  },
  editorHint: {
    border: '',
    foreground: '',
  },
  editorHoverWidget: {
    background: bg.darken(0.2).hexa(),
    border: none.hexa(),
    foreground: fg.hexa(),
    highlightForeground: '',
    statusBarBackground: '',
  },
  editorIndentGuide: {
    activeBackground: '',
    background: '',
  },
  editorInfo: {
    background: '',
    border: border.hexa(),
    foreground: '',
  },
  editorInlayHint: {
    background: '',
    foreground: '',
    parameterBackground: '',
    parameterForeground: '',
    typeBackground: '',
    typeForeground: '',
  },
  editorLightBulb: {
    foreground: '',
  },
  editorLightBulbAutoFix: {
    foreground: '',
  },
  editorLineNumber: {
    activeForeground: comment.mix(primary, 0.3).hexa(),
    foreground: comment.hexa(),
  },
  editorLink: {
    activeForeground: '',
  },
  editorMarkerNavigation: {
    background: '',
  },
  editorMarkerNavigationError: {
    background: '',
    headerBackground: '',
  },
  editorMarkerNavigationInfo: {
    background: '',
    headerBackground: '',
  },
  editorMarkerNavigationWarning: {
    background: '',
    headerBackground: '',
  },
  editorOverviewRuler: {
    addedForeground: bg.hexa(),
    background: '',
    border: '',
    bracketMatchForeground: '',
    commonContentForeground: '',
    currentContentForeground: '',
    deletedForeground: bg.hexa(),
    errorForeground: red.hexa(),
    findMatchForeground: secondary.fade(0.8).hexa(),
    incomingContentForeground: '',
    infoForeground: '',
    modifiedForeground: bg.hexa(),
    rangeHighlightForeground: '',
    selectionHighlightForeground: primary.fade(0.8).hexa(),
    warningForeground: '',
    wordHighlightForeground: '',
    wordHighlightStrongForeground: '',
  },
  editorPane: {
    background: '',
  },
  editorRuler: {
    foreground: '',
  },
  editorStickyScroll: {
    background: '',
  },
  editorStickyScrollHover: {
    background: '',
  },
  editorSuggestWidget: {
    background: '',
    border: '',
    focusHighlightForeground: '',
    foreground: '',
    highlightForeground: '',
    selectedBackground: '',
    selectedForeground: '',
    selectedIconForeground: '',
  },
  editorSuggestWidgetStatus: {
    foreground: '',
  },
  editorUnicodeHighlight: {
    background: '',
    border: '',
  },
  editorUnnecessaryCode: {
    border: '',
    opacity: '',
  },
  editorWarning: {
    background: '',
    border: '',
    foreground: '',
  },
  editorWhitespace: {
    foreground: '',
  },
  editorWidget: {
    background: bg.darken(0.2).hexa(),
    border: none.hexa(),
    foreground: fg.hexa(),
    resizeBorder: '',
  },
  errorForeground: red.desaturate(0.3).hexa(),
  extensionBadge: {
    remoteBackground: '',
    remoteForeground: '',
  },
  extensionButton: {
    background: '',
    foreground: '',
    hoverBackground: '',
    prominentBackground: '',
    prominentForeground: '',
    prominentHoverBackground: '',
    separator: '',
  },
  extensionIcon: {
    preReleaseForeground: '',
    sponsorForeground: '',
    starForeground: '',
    verifiedForeground: '',
  },
  focusBorder: none.hexa(),
  foreground: '',
  gitDecoration: {
    addedResourceForeground: green.hexa(),
    conflictingResourceForeground: '',
    deletedResourceForeground: '',
    ignoredResourceForeground: comment.hexa(),
    modifiedResourceForeground: secondary.hexa(),
    renamedResourceForeground: secondary.hexa(),
    stageDeletedResourceForeground: '',
    stageModifiedResourceForeground: secondary.hexa(),
    submoduleResourceForeground: '',
    untrackedResourceForeground: green.hexa(),
  },
  icon: {
    foreground: fg.hexa(),
  },
  input: {
    background: bg.darken(0.35).hexa(),
    border: '',
    foreground: fg.hexa(),
    placeholderForeground: '',
  },
  inputOption: {
    activeBackground: '',
    activeBorder: '',
    activeForeground: '',
    hoverBackground: '',
  },
  inputValidation: {
    errorBackground: '',
    errorBorder: '',
    errorForeground: '',
    infoBackground: '',
    infoBorder: '',
    infoForeground: '',
    warningBackground: '',
    warningBorder: '',
    warningForeground: '',
  },
  interactive: {
    activeCodeBorder: '',
    inactiveCodeBorder: '',
  },
  keybindingLabel: {
    background: '',
    border: '',
    bottomBorder: '',
    foreground: '',
  },
  keybindingTable: {
    headerBackground: '',
    rowsBackground: '',
  },
  list: {
    activeSelectionBackground: highlight.hexa(),
    activeSelectionForeground: fg.hexa(),
    activeSelectionIconForeground: fg.hexa(),
    deemphasizedForeground: comment.hexa(),
    dropBackground: highlight.opaquer(0.3).hexa(),
    errorForeground: red.hexa(),
    filterMatchBackground: red.hexa(),
    filterMatchBorder: '',
    focusAndSelectionOutline: '',
    focusBackground: highlight.hexa(),
    focusForeground: primary.hexa(),
    focusHighlightForeground: primary.hexa(),
    focusOutline: '',
    highlightForeground: primary.hexa(),
    hoverBackground: highlight.hexa(),
    hoverForeground: fg.hexa(),
    inactiveFocusBackground: highlight.hexa(),
    inactiveFocusOutline: '',
    inactiveSelectionBackground: highlight.hexa(),
    inactiveSelectionForeground: fg.hexa(),
    inactiveSelectionIconForeground: primary.hexa(),
    invalidItemForeground: '',
    warningForeground: yellow.hexa(),
  },
  listFilterWidget: {
    background: '',
    noMatchesOutline: '',
    outline: '',
    shadow: '',
  },
  menu: {
    background: '',
    border: '',
    foreground: '',
    selectionBackground: '',
    selectionBorder: '',
    selectionForeground: '',
    separatorBackground: '',
  },
  menubar: {
    selectionBackground: '',
    selectionBorder: '',
    selectionForeground: '',
  },
  merge: {
    border: '',
    commonContentBackground: '',
    commonHeaderBackground: '',
    currentContentBackground: '',
    currentHeaderBackground: '',
    incomingContentBackground: '',
    incomingHeaderBackground: '',
  },
  mergeEditor: {
    change: {
      background: '',
      word: {
        background: '',
      },
    },
    changeBase: {
      background: '',
      word: {
        background: '',
      },
    },
    conflict: {
      handled: {
        minimapOverViewRuler: '',
      },
      handledFocused: {
        border: '',
      },
      handledUnfocused: {
        border: '',
      },
      input1: {
        background: '',
      },
      input2: {
        background: '',
      },
      unhandled: {
        minimapOverViewRuler: '',
      },
      unhandledFocused: {
        border: '',
      },
      unhandledUnfocused: {
        border: '',
      },
    },
    conflictingLines: {
      background: '',
    },
  },
  minimap: {
    background: '',
    errorHighlight: red.hexa(),
    findMatchHighlight: highlight.hexa(),
    foregroundOpacity: '',
    selectionHighlight: '',
    selectionOccurrenceHighlight: '',
    warningHighlight: '',
  },
  minimapGutter: {
    addedBackground: green.hexa(),
    deletedBackground: '',
    modifiedBackground: secondary.hexa(),
  },
  minimapSlider: {
    activeBackground: '',
    background: '',
    hoverBackground: '',
  },
  notebook: {
    cellBorderColor: '',
    cellEditorBackground: '',
    cellHoverBackground: '',
    cellInsertionIndicator: '',
    cellStatusBarItemHoverBackground: '',
    cellToolbarSeparator: '',
    editorBackground: '',
    focusedCellBackground: '',
    focusedCellBorder: '',
    focusedEditorBorder: '',
    inactiveFocusedCellBorder: '',
    inactiveSelectedCellBorder: '',
    outputContainerBackgroundColor: '',
    outputContainerBorderColor: '',
    selectedCellBackground: '',
    selectedCellBorder: '',
    symbolHighlightBackground: '',
  },
  notebookScrollbarSlider: {
    activeBackground: '',
    background: '',
    hoverBackground: '',
  },
  notebookStatusErrorIcon: {
    foreground: '',
  },
  notebookStatusRunningIcon: {
    foreground: '',
  },
  notebookStatusSuccessIcon: {
    foreground: '',
  },
  notificationCenter: {
    border: '',
  },
  notificationCenterHeader: {
    background: '',
    foreground: '',
  },
  notificationLink: {
    foreground: '',
  },
  notifications: {
    background: '',
    border: '',
    foreground: '',
  },
  notificationsErrorIcon: {
    foreground: '',
  },
  notificationsInfoIcon: {
    foreground: '',
  },
  notificationsWarningIcon: {
    foreground: '',
  },
  notificationToast: {
    border: '',
  },
  panel: {
    background: bg.hexa(),
    border: border.hexa(),
    dropBorder: '',
  },
  panelInput: {
    border: '',
  },
  panelSection: {
    border: '',
    dropBackground: highlight.opaquer(0.3).hexa(),
  },
  panelSectionHeader: {
    background: '',
    border: '',
    foreground: '',
  },
  panelTitle: {
    activeBorder: primary.hexa(),
    activeForeground: fg.hexa(),
    inactiveForeground: comment.hexa(),
  },
  peekView: {
    border: '',
  },
  peekViewEditor: {
    background: '',
    matchHighlightBackground: '',
    matchHighlightBorder: '',
  },
  peekViewEditorGutter: {
    background: '',
  },
  peekViewResult: {
    background: '',
    fileForeground: '',
    lineForeground: '',
    matchHighlightBackground: '',
    selectionBackground: '',
    selectionForeground: '',
  },
  peekViewTitle: {
    background: '',
  },
  peekViewTitleDescription: {
    foreground: '',
  },
  peekViewTitleLabel: {
    foreground: '',
  },
  pickerGroup: {
    border: '',
    foreground: '',
  },
  ports: {
    iconRunningProcessForeground: '',
  },
  problemsErrorIcon: {
    foreground: '',
  },
  problemsInfoIcon: {
    foreground: '',
  },
  problemsWarningIcon: {
    foreground: '',
  },
  progressBar: {
    background: '',
  },
  quickInput: {
    background: '',
    foreground: '',
    list: {
      focusBackground: '',
    },
  },
  quickInputList: {
    focusBackground: '',
    focusForeground: '',
    focusIconForeground: '',
  },
  quickInputTitle: {
    background: '',
  },
  sash: {
    hoverBorder: '',
  },
  scm: {
    providerBorder: '',
  },
  scrollbar: {
    shadow: none.hexa(),
  },
  scrollbarSlider: {
    activeBackground: bg.lighten(0.5).hexa(),
    background: bg.lighten(0.3).hexa(),
    hoverBackground: bg.lighten(0.4).hexa(),
  },
  searchEditor: {
    findMatchBackground: highlight.hexa(),
    findMatchBorder: '',
    textInputBorder: '',
  },
  selection: {
    background: '',
  },
  settings: {
    checkboxBackground: '',
    checkboxBorder: '',
    checkboxForeground: '',
    dropdownBackground: '',
    dropdownBorder: '',
    dropdownForeground: '',
    dropdownListBorder: '',
    focusedRowBackground: '',
    focusedRowBorder: '',
    headerBorder: '',
    headerForeground: '',
    modifiedItemIndicator: '',
    numberInputBackground: '',
    numberInputBorder: '',
    numberInputForeground: '',
    rowHoverBackground: '',
    sashBorder: '',
    textInputBackground: '',
    textInputBorder: '',
    textInputForeground: '',
  },
  sideBar: {
    background: bg.darken(0.2).hexa(),
    border: border.hexa(),
    dropBackground: '',
    foreground: fg.hexa(),
  },
  sideBarSectionHeader: {
    background: bg.darken(0.2).hexa(),
    border: border.hexa(),
    foreground: fg.hexa(),
  },
  sideBarTitle: {
    foreground: fg.hexa(),
  },
  sideBySideEditor: {
    horizontalBorder: '',
    verticalBorder: '',
  },
  statusBar: {
    background: bg.darken(0.2).hexa(),
    border: border.hexa(),
    debuggingBackground: highlight.opaquer(0.3).hexa(),
    debuggingBorder: '',
    debuggingForeground: '',
    focusBorder: '',
    foreground: fg.hexa(),
    noFolderBackground: '',
    noFolderBorder: '',
    noFolderForeground: '',
  },
  statusBarItem: {
    activeBackground: '',
    compactHoverBackground: '',
    errorBackground: '',
    errorForeground: '',
    focusBorder: '',
    hoverBackground: '',
    prominentBackground: '',
    prominentForeground: '',
    prominentHoverBackground: '',
    remoteBackground: '',
    remoteForeground: '',
    warningBackground: '',
    warningForeground: '',
  },
  symbolIcon: {
    arrayForeground: '',
    booleanForeground: '',
    classForeground: '',
    colorForeground: '',
    constantForeground: '',
    constructorForeground: '',
    enumeratorForeground: '',
    enumeratorMemberForeground: '',
    eventForeground: '',
    fieldForeground: '',
    fileForeground: '',
    folderForeground: '',
    functionForeground: '',
    interfaceForeground: '',
    keyForeground: '',
    keywordForeground: '',
    methodForeground: '',
    moduleForeground: '',
    namespaceForeground: '',
    nullForeground: '',
    numberForeground: '',
    objectForeground: '',
    operatorForeground: '',
    packageForeground: '',
    propertyForeground: '',
    referenceForeground: '',
    snippetForeground: '',
    stringForeground: '',
    structForeground: '',
    textForeground: '',
    typeParameterForeground: '',
    unitForeground: '',
    variableForeground: '',
  },
  tab: {
    activeBackground: bg.hexa(),
    activeBorder: '',
    activeBorderTop: '',
    activeForeground: fg.hexa(),
    activeModifiedBorder: '',
    border: '',
    hoverBackground: bg.hexa(),
    hoverBorder: '',
    hoverForeground: '',
    inactiveBackground: bg.darken(0.2).hexa(),
    inactiveForeground: fg.hexa(),
    inactiveModifiedBorder: '',
    lastPinnedBorder: '',
    unfocusedActiveBackground: '',
    unfocusedActiveBorder: '',
    unfocusedActiveBorderTop: '',
    unfocusedActiveForeground: fg.hexa(),
    unfocusedActiveModifiedBorder: '',
    unfocusedHoverBackground: bg.hexa(),
    unfocusedHoverBorder: '',
    unfocusedHoverForeground: '',
    unfocusedInactiveBackground: bg.darken(0.2).hexa(),
    unfocusedInactiveForeground: fg.hexa(),
    unfocusedInactiveModifiedBorder: '',
  },
  terminal: {
    ansiBlack: bg.hexa(),
    ansiBlue: blue.hexa(),
    ansiBrightBlack: bg.hexa(),
    ansiBrightBlue: blue.hexa(),
    ansiBrightCyan: cyan.hexa(),
    ansiBrightGreen: green.hexa(),
    ansiBrightMagenta: pink.hexa(),
    ansiBrightRed: red.hexa(),
    ansiBrightWhite: fg.hexa(),
    ansiBrightYellow: yellow.hexa(),
    ansiCyan: cyan.hexa(),
    ansiGreen: green.hexa(),
    ansiMagenta: pink.hexa(),
    ansiRed: red.hexa(),
    ansiWhite: fg.hexa(),
    ansiYellow: yellow.hexa(),
    background: '',
    border: '',
    dropBackground: '',
    findMatchBackground: '',
    findMatchBorder: '',
    findMatchHighlightBackground: '',
    findMatchHighlightBorder: '',
    foreground: fg.hexa(),
    inactiveSelectionBackground: '',
    selectionBackground: primary.fade(0.65).hexa(),
    selectionForeground: '',
    tab: {
      activeBorder: '',
    },
  },
  terminalCommandDecoration: {
    defaultBackground: '',
    errorBackground: '',
    successBackground: '',
  },
  terminalCursor: {
    background: '',
    foreground: '',
  },
  terminalOverviewRuler: {
    cursorForeground: '',
    findMatchForeground: '',
  },
  testing: {
    iconErrored: '',
    iconFailed: '',
    iconPassed: '',
    iconQueued: '',
    iconSkipped: '',
    iconUnset: '',
    message: {
      error: {
        decorationForeground: '',
        lineBackground: '',
      },
      info: {
        decorationForeground: '',
        lineBackground: '',
      },
    },
    peekBorder: '',
    peekHeaderBackground: '',
    runAction: '',
  },
  textBlockQuote: {
    background: '',
    border: '',
  },
  textCodeBlock: {
    background: '',
  },
  textLink: {
    activeForeground: '',
    foreground: '',
  },
  textPreformat: {
    foreground: '',
  },
  textSeparator: {
    foreground: '',
  },
  titleBar: {
    activeBackground: bg.darken(0.2).hexa(),
    activeForeground: fg.hexa(),
    border: border.hexa(),
    inactiveBackground: bg.darken(0.2).hexa(),
    inactiveForeground: fg.hexa(),
  },
  toolbar: {
    activeBackground: '',
    hoverBackground: '',
    hoverOutline: '',
  },
  tree: {
    indentGuidesStroke: none.hexa(),
    tableColumnsBorder: '',
    tableOddRowsBackground: '',
  },
  walkThrough: {
    embeddedEditorBackground: '',
  },
  welcomePage: {
    background: '',
    progress: {
      background: '',
      foreground: '',
    },
    tileBackground: '',
    tileHoverBackground: '',
    tileShadow: '',
  },
  widget: {
    shadow: none.hexa(),
  },
  window: {
    activeBorder: '',
    inactiveBorder: '',
  },
};

const punctuation = pink.hexa();
const functions = blue.hexa();
const classes = red.hexa();
const specials = cyan.hexa(); // process, console
const keys = fg.hexa();
const variables = fg.hexa();
const primitives = yellow.hexa();
const tags = green.hexa();
const separators = pink.hexa();
const brackets = fg.hexa();
const cssConsts = orange.hexa();

exports.semantic = {
  namespace: '',
  class: '',
  'class.defaultLibrary': classes,
  enum: '',
  interface: '',
  struct: '',
  typeParameter: '',
  type: '',
  parameter: {
    italic: true,
  },
  variable: variables,
  'variable.defaultLibrary': specials,
  'variable.declaration': '',
  property: '',
  'property.defaultLibrary': keys,
  'property.declaration': pink.hexa(),
  enumMember: '',
  decorator: '',
  event: '',
  function: '',
  'function.defaultLibrary': specials,
  method: '',
  'method.defaultLibrary': specials,
  macro: '',
  label: '',
  comment: '',
  string: '',
  keyword: '',
  number: '',
  regexp: '',
  operator: '',
};

exports.syntax = [
  {
    name: 'Language Keywords',
    scope: [
      // Keywords
      'keyword',
      'punctuation.definition.keyword',
      'keyword.expressions-and-types.swift',
      'keyword.operator.new',
      'keyword.operator.of',
      'keyword.operator.delete',
      'variable.language',
      'variable.language punctuation.definition.variable.php',
      'variable.other.readwrite.instance.ruby',
      'variable.parameter.function.language.special',
      // Storage (const, let)
      'storage',
      'meta.implementation storage.type.objc',
      'meta.interface-or-protocol storage.type.objc',
      'source.groovy storage.type.def',
      'storage.modifier',
    ],
    settings: {
      foreground: purple.hexa(),
    },
  },
  {
    name: 'Operators (=, +, -), Punctuation (;,)',
    scope: [
      'keyword.operator',
      'storage.type.function.arrow',
      'punctuation.terminator.statement',
      'meta.delimiter.comma',
    ],
    settings: {
      foreground: punctuation,
    },
  },
  {
    name: 'Specials, language support, magic, Regex',
    scope: [
      // Language Built-ins, magic, constants
      'support.variable.other.property',
      'support.function.magic',
      'support.function.method',
      'support.variable',
      'variable.other.predefined',
      'support.type.property-name',
      'string.regexp',
      'constant.other.character-class.set.regexp',
      'constant.character.escape.backslash.regexp',
      'constant.character.escape',
      'constant.character.string.escape',
      'constant.regexp',
      'punctuation.quasi.element',
      // Dates / Timestamps (serializable languages)
      'constant.other.date',
      'constant.other.timestamp',
      // YAML aliases
      'variable.other.alias.yaml',
    ],
    settings: {
      foreground: specials,
    },
  },
  {
    name: 'CSS Constants, units, keywords',
    scope: [
      'support.constant.property-value.css',
      'support.constant.font-name.css',
      'support.constant.vendored.property-value.css',
      'support.constant.color.w3c-standard-color-name.css',
      'keyword.other.unit',
      'support.function.misc.css',
      'support.function.transform.css',
      'punctuation.section.function.begin.bracket.round.css',
      'punctuation.section.function.end.bracket.round.css',
    ],
    settings: {
      foreground: cssConsts,
    },
  },
  {
    name: 'Variables',
    scope: [
      'constant.other.key.perl',
      'variable.other.object',
      'meta.selectionset.graphql variable',
      'meta.function-call variable.other.readwrite',
    ],
    settings: {
      foreground: variables,
    },
  },
  {
    name: 'Keys',
    scope: [
      'entity.name.tag.yaml',
      // Objects
      'constant.other.object.key',
      'meta.property.object',
      'entity.name.function.accessor',
      'variable.other.readwrite.shorthandpropertyname',
      'variable.other.property',
      // CSS properties
      'support.type.property-name',
      // Property Quotes (temp)
      'punctuation.support.type.property-name.begin',
      'punctuation.support.type.property-name.end',
      // HTML Attribute name
      'entity.other.attribute-name',
    ],
    settings: {
      foreground: keys,
    },
  },
  {
    name: 'JSON Property Names',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: pink.hexa(),
    },
  },
  {
    name: 'Function names',
    scope: [
      'entity.name.function.method',
      'entity.name.function',
      'entity.name.fragment.graphql',
      'variable.fragment.graphql',
    ],
    settings: {
      foreground: functions,
    },
  },
  {
    name: 'Primitives (strings, numbers, boolean, null)',
    scope: [
      'constant',
      'string.quoted',
      'string.template',
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      // 10_000 number separator
      'variable.other.constant',
      // CSS Values
      'meta.property-value.css',
    ],
    settings: {
      foreground: primitives,
    },
  },
  {
    name: 'Classes',
    scope: [
      'entity.name.type.class',
      'entity.name.class',
      'entity.other.inherited-class',
      'variable.language.this',
    ],
    settings: {
      foreground: classes,
    },
  },
  {
    name: 'Function parameters',
    scope: [
      'variable.parameter',
      'meta.function.parameters',
      'entity.name.variable.parameter',
      'meta.at-rule.function variable',
      'meta.at-rule.mixin variable',
      'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
      'meta.selectionset.graphql meta.arguments variable',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: variables,
    },
  },
  {
    name: 'HTML Tags, React Components',
    scope: [
      'entity.name.tag.html',
      'entity.name.tag.css',
      'entity.name.tag.reference.scss',
      'entity.name.tag.open.jsx',
      'entity.name.tag.close.jsx',
      'support.class.component.open',
      'support.class.component.close',
      'punctuation.definition.tag',
      // CSS Generic Selectors
      'meta.selector',
      'meta.attribute-selector.scss',
      // CSS attribute parent selectors ('&')
      'entity.other.attribute-name.parent-selector',
    ],
    settings: {
      foreground: tags,
      fontStyle: 'normal',
    },
  },
  {
    name: 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
    scope: [
      'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
      'entity.other.attribute-name.placeholder punctuation',
      'entity.other.attribute-name.pseudo-class punctuation',
      'entity.other.attribute-name.pseudo-element punctuation',
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
    name: 'Brackets, braces, parens, etc.',
    scope: [
      'keyword.operator.other.powershell',
      'keyword.other.statement-separator.powershell',
      'meta.brace.round',
      'meta.brace.square',
      'meta.brace.curly',
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
      'punctuation.definition.attribute-selector.end.bracket.square.scss',
      'punctuation.definition.attribute-selector.begin.bracket.square.scss',
    ],
    settings: {
      foreground: brackets,
    },
  },
  {
    name: 'Variable interpolation operators',
    scope: [
      'meta.string-contents.quoted.double punctuation.definition.variable',
      'punctuation.definition.interpolation.begin',
      'punctuation.definition.interpolation.end',
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end',
      'punctuation.section.embedded.begin',
      'punctuation.section.embedded.coffee',
      'punctuation.section.embedded.end',
      'punctuation.section.embedded.end source.php',
      'punctuation.section.embedded.end source.ruby',
      'punctuation.definition.variable.makefile',
    ],
    settings: {
      foreground: specials,
    },
  },
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment', 'unused.comment', 'wildcard.comment'],
    settings: {
      foreground: comment.hexa(),
      fontStyle: 'italic',
    },
  },
  {
    name: 'Types',
    scope: [
      // 'entity.name.type',
      'keyword.primitive-datatypes.swift',
      'keyword.type.cs',
      'meta.protocol-list.objc',
      'meta.return-type.objc',
      'source.go storage.type',
      'source.groovy storage.type',
      'source.java storage.type',
      'source.powershell entity.other.attribute-name',
      'storage.class.std.rust',
      'storage.type.attribute.swift',
      'storage.type.c',
      'storage.type.core.rust',
      'storage.type.cs',
      'storage.type.groovy',
      'storage.type.objc',
      'storage.type.php',
      'storage.type.haskell',
      'storage.type.ocaml',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: purple.hexa(),
    },
  },
  {
    name: 'Edge cases (foreground color resets)',
    scope: [
      'constant.other.symbol.hashkey.ruby',
      'keyword.operator.dereference.java',
      'keyword.operator.navigation.groovy',
      'meta.scope.for-loop.shell punctuation.definition.string.begin',
      'meta.scope.for-loop.shell punctuation.definition.string.end',
      'meta.scope.for-loop.shell string',
      'storage.modifier.import',
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx',
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
      'punctuation.separator.list.comma.css',
      'constant.language.empty-list.haskell',
    ],
    settings: {
      foreground: fg.hexa(),
    },
  },

  /**
   * Markdown
   */
  {
    scope: ['emphasis', 'markup.italic'],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: ['strong', 'markup.bold'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: ['markup.inserted'],
    settings: {
      foreground: green.hexa(),
    },
  },
  {
    scope: ['markup.deleted'],
    settings: {
      foreground: red.hexa(),
    },
  },
  {
    scope: ['markup.error'],
    settings: {
      foreground: red.hexa(),
    },
  },
  {
    scope: ['markup.changed'],
    settings: {
      foreground: yellow.hexa(),
    },
  },
  {
    scope: ['markup.underline'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    scope: ['invalid'],
    settings: {
      foreground: red.hexa(),
      fontStyle: 'underline italic',
    },
  },
  {
    name: 'Markup headings',
    scope: [
      'markup.heading',
      'markup.heading.markdown punctuation.definition.string.begin',
      'markup.heading.markdown punctuation.definition.string.end',
    ],
    settings: {
      fontStyle: 'bold',
      foreground: pink.hexa(),
    },
  },
  {
    name: 'Bullets, lists (prose)',
    scope: [
      'beginning.punctuation.definition.list.markdown',
      'beginning.punctuation.definition.quote.markdown',
      'punctuation.definition.link.restructuredtext',
    ],
    settings: {
      foreground: blue.hexa(),
    },
  },
  {
    name: 'Inline code (prose)',
    scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
    settings: {
      foreground: green.hexa(),
    },
  },
  {
    name: 'Links (prose)',
    scope: ['markup.underline.link', 'markup.underline.link.image'],
    settings: {
      foreground: blue.hexa(),
    },
  },
  {
    name: 'Link text, image alt text (prose)',
    scope: [
      'meta.link.reference.def.restructuredtext',
      'punctuation.definition.directive.restructuredtext',
      'string.other.link.description',
      'string.other.link.title',
    ],
    settings: {
      foreground: cyan.hexa(),
    },
  },
  {
    name: 'Blockquotes (prose)',
    scope: [
      'entity.name.directive.restructuredtext',
      'markup.quote',
      'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
      'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
    ],
    settings: {
      foreground: yellow.hexa(),
      fontStyle: 'italic',
    },
  },
  {
    name: 'Horizontal rule (prose)',
    scope: ['meta.separator.markdown'],
    settings: {
      foreground: purple.hexa(),
    },
  },
  {
    name: 'Code blocks',
    scope: [
      'fenced_code.block.language',
      'markup.raw.inner.restructuredtext',
      'markup.fenced_code.block.markdown punctuation.definition.markdown',
    ],
    settings: {
      foreground: green.hexa(),
    },
  },
  {
    name: 'Prose constants',
    scope: ['punctuation.definition.constant.restructuredtext'],
    settings: {
      foreground: pink.hexa(),
    },
  },
  {
    name: 'Braces in markdown paragraphs',
    scope: [
      'meta.paragraph.markdown punctuation.definition.string.begin',
      'meta.paragraph.markdown punctuation.definition.string.end',
    ],
    settings: {
      foreground: fg.hexa(),
    },
  },
];
