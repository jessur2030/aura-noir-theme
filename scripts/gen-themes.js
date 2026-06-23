const fs = require("fs");
const path = require("path");

const OUT = path.resolve(process.argv[2] || ".", "themes");

function workbench(p) {
  return {
    "focusBorder": p.accent + "44",
    "foreground": "#ABB5C8",
    "disabledForeground": "#5E697F",
    "errorForeground": "#F27878",
    "icon.foreground": "#8892A5",
    "activityBar.background": "#0B0C10",
    "activityBar.foreground": p.accent,
    "activityBar.inactiveForeground": "#5E697F",
    "activityBarBadge.background": p.accent,
    "activityBarBadge.foreground": "#0B0C10",
    "sideBar.background": "#0F1015",
    "sideBar.foreground": "#ABB5C8",
    "sideBarTitle.foreground": "#D4DBE8",
    "sideBar.border": "#191B24",
    "list.hoverBackground": "#171923",
    "list.activeSelectionBackground": "#222635",
    "list.activeSelectionForeground": "#D4DBE8",
    "list.inactiveSelectionBackground": "#1A1D29",
    "editor.background": "#14151B",
    "editor.foreground": p.editorFg || "#ABB5C8",
    "editorLineNumber.foreground": "#434B5E",
    "editorLineNumber.activeForeground": "#ABB5C8",
    "editorCursor.foreground": p.cursor,
    "editor.selectionBackground": "#2B3245",
    "editor.inactiveSelectionBackground": "#2B324577",
    "editor.wordHighlightBackground": "#A1BEE622",
    "editor.wordHighlightStrongBackground": p.accent + "33",
    "editor.findMatchBackground": "#EAC57C66",
    "editor.findMatchHighlightBackground": "#EAC57C33",
    "editorWhitespace.foreground": "#232733",
    "editorIndentGuide.background1": "#232733",
    "editorIndentGuide.activeBackground1": "#434B5E",
    "editorBracketMatch.background": p.accent + "26",
    "editorBracketMatch.border": p.accent,
    "editorGutter.addedBackground": "#69D2AE88",
    "editorGutter.deletedBackground": "#F2787888",
    "editorGutter.modifiedBackground": "#A1BEE688",
    "editorError.foreground": "#F27878",
    "editorWarning.foreground": "#EAC57C",
    "tab.activeBackground": "#14151B",
    "tab.activeForeground": "#D4DBE8",
    "tab.inactiveBackground": "#0F1015",
    "tab.inactiveForeground": "#5E697F",
    "tab.border": "#0B0C10",
    "tab.activeBorderTop": p.accent,
    "titleBar.activeBackground": "#0B0C10",
    "titleBar.activeForeground": "#ABB5C8",
    "titleBar.inactiveBackground": "#0B0C10",
    "titleBar.inactiveForeground": "#5E697F",
    "statusBar.background": "#0B0C10",
    "statusBar.foreground": "#8892A5",
    "statusBar.border": "#191B24",
    "panel.background": "#0F1015",
    "panel.border": "#191B24",
    "terminal.background": "#14151B",
    "terminal.foreground": "#ABB5C8",
    "terminal.ansiBlack": "#14151B",
    "terminal.ansiRed": "#F27878",
    "terminal.ansiGreen": "#69D2AE",
    "terminal.ansiYellow": "#EAC57C",
    "terminal.ansiBlue": "#A1BEE6",
    "terminal.ansiMagenta": p.accent,
    "terminal.ansiCyan": "#75C3CB",
    "terminal.ansiWhite": "#ABB5C8",
    "terminal.ansiBrightBlack": "#5E697F",
    "terminal.ansiBrightRed": "#F99696",
    "terminal.ansiBrightGreen": "#8BDEBE",
    "terminal.ansiBrightYellow": "#F2D59B",
    "terminal.ansiBrightBlue": "#BDD4F2",
    "terminal.ansiBrightMagenta": "#D5BDF9",
    "terminal.ansiBrightCyan": "#96D5DB",
    "terminal.ansiBrightWhite": "#D4DBE8",
    "button.background": p.accent,
    "button.foreground": "#0B0C10",
    "button.hoverBackground": p.accentHover,
    "input.background": "#0F1015",
    "input.foreground": "#ABB5C8",
    "input.border": "#282C3D",
    "badge.background": p.accent,
    "badge.foreground": "#0B0C10",
    "diffEditor.insertedTextBackground": "#69D2AE1A",
    "diffEditor.removedTextBackground": "#F278781A"
  };
}

function workbenchLight(p) {
  return {
    "focusBorder": p.accent + "55",
    "foreground": "#3A4252",
    "disabledForeground": "#A0A8B8",
    "errorForeground": "#C7384A",
    "icon.foreground": "#5A6378",
    "activityBar.background": "#E9EBF1",
    "activityBar.foreground": p.accent,
    "activityBar.inactiveForeground": "#8A93A6",
    "activityBarBadge.background": p.accent,
    "activityBarBadge.foreground": "#FFFFFF",
    "sideBar.background": "#F2F3F7",
    "sideBar.foreground": "#3A4252",
    "sideBarTitle.foreground": "#2A3140",
    "sideBar.border": "#E1E4EC",
    "list.hoverBackground": "#E8EAF1",
    "list.activeSelectionBackground": "#D9E2F2",
    "list.activeSelectionForeground": "#1F2733",
    "list.inactiveSelectionBackground": "#E4E8F1",
    "editor.background": "#FBFBFD",
    "editor.foreground": p.editorFg || "#2E3440",
    "editorLineNumber.foreground": "#BCC2D2",
    "editorLineNumber.activeForeground": "#3A4252",
    "editorCursor.foreground": p.cursor,
    "editor.selectionBackground": p.accent + "33",
    "editor.inactiveSelectionBackground": p.accent + "1F",
    "editor.wordHighlightBackground": p.accent + "22",
    "editor.wordHighlightStrongBackground": p.accent + "33",
    "editor.findMatchBackground": "#E8B54988",
    "editor.findMatchHighlightBackground": "#E8B54944",
    "editorWhitespace.foreground": "#D6DAE4",
    "editorIndentGuide.background1": "#E4E7EF",
    "editorIndentGuide.activeBackground1": "#BCC2D2",
    "editorBracketMatch.background": p.accent + "22",
    "editorBracketMatch.border": p.accent,
    "editorGutter.addedBackground": "#3FA66A",
    "editorGutter.deletedBackground": "#D85C5C",
    "editorGutter.modifiedBackground": "#5B8DD6",
    "editorError.foreground": "#C7384A",
    "editorWarning.foreground": "#BF8A1F",
    "tab.activeBackground": "#FBFBFD",
    "tab.activeForeground": "#1F2733",
    "tab.inactiveBackground": "#ECEEF3",
    "tab.inactiveForeground": "#7A8398",
    "tab.border": "#E1E4EC",
    "tab.activeBorderTop": p.accent,
    "titleBar.activeBackground": "#E9EBF1",
    "titleBar.activeForeground": "#2A3140",
    "titleBar.inactiveBackground": "#E9EBF1",
    "titleBar.inactiveForeground": "#8A93A6",
    "statusBar.background": p.accent,
    "statusBar.foreground": "#FFFFFF",
    "statusBar.border": "#E1E4EC",
    "panel.background": "#F2F3F7",
    "panel.border": "#E1E4EC",
    "terminal.background": "#FBFBFD",
    "terminal.foreground": "#3A4252",
    "terminal.ansiBlack": "#2E3440",
    "terminal.ansiRed": "#C7384A",
    "terminal.ansiGreen": "#2E8B57",
    "terminal.ansiYellow": "#BF8A1F",
    "terminal.ansiBlue": "#2E6FD6",
    "terminal.ansiMagenta": p.accent,
    "terminal.ansiCyan": "#1F8A9A",
    "terminal.ansiWhite": "#D4D8E2",
    "terminal.ansiBrightBlack": "#8A93A6",
    "terminal.ansiBrightRed": "#D85C5C",
    "terminal.ansiBrightGreen": "#3FA66A",
    "terminal.ansiBrightYellow": "#D6A93E",
    "terminal.ansiBrightBlue": "#5B8DD6",
    "terminal.ansiBrightMagenta": p.accentHover,
    "terminal.ansiBrightCyan": "#4FB0C0",
    "terminal.ansiBrightWhite": "#FBFBFD",
    "button.background": p.accent,
    "button.foreground": "#FFFFFF",
    "button.hoverBackground": p.accentHover,
    "input.background": "#FFFFFF",
    "input.foreground": "#2E3440",
    "input.border": "#D0D5E0",
    "badge.background": p.accent,
    "badge.foreground": "#FFFFFF",
    "diffEditor.insertedTextBackground": "#3FA66A22",
    "diffEditor.removedTextBackground": "#D85C5C22"
  };
}

function param(p) {
  const s = { foreground: p.parameter || p.property };
  if (p.paramItalic !== false) s.fontStyle = "italic";
  return s;
}

function tokens(p) {
  return [
    { name: "Comments", scope: ["comment", "punctuation.definition.comment"], settings: { foreground: p.comment } },
    { name: "Strings", scope: ["string", "string.quoted", "punctuation.definition.string", "markup.inline.raw.markdown"], settings: { foreground: p.string } },
    { name: "Template expression punctuation ${ }", scope: ["punctuation.definition.template-expression", "punctuation.section.embedded", "meta.template.expression"], settings: { foreground: p.punctuation } },
    { name: "Numbers", scope: ["constant.numeric"], settings: { foreground: p.number } },
    { name: "Booleans & Constants", scope: ["constant.language.boolean", "constant.language", "support.constant"], settings: { foreground: p.constant } },
    { name: "Control Keywords", scope: ["keyword.control", "keyword.control.flow", "keyword.control.conditional", "keyword.control.loop", "keyword.control.import", "keyword.control.from", "keyword.control.return", "keyword.control.as", "keyword.control.trycatch"], settings: { foreground: p.controlKw } },
    { name: "Keywords & Modifiers", scope: ["keyword", "storage.type", "storage.modifier", "keyword.operator.new", "keyword.operator.expression"], settings: { foreground: p.declKw } },
    { name: "Operators", scope: ["keyword.operator", "keyword.operator.type", "keyword.operator.assignment", "keyword.operator.arithmetic", "keyword.operator.comparison", "keyword.operator.logical", "keyword.operator.relational", "keyword.operator.ternary"], settings: { foreground: p.operator } },
    { name: "Functions & Methods", scope: ["entity.name.function", "meta.function-call", "support.function"], settings: { foreground: p.func } },
    { name: "Types, Classes, Interfaces", scope: ["entity.name.type", "entity.name.class", "support.type", "support.class", "entity.other.inherited-class"], settings: { foreground: p.type } },
    { name: "Variables", scope: ["variable", "variable.other", "variable.language", "meta.definition.variable"], settings: { foreground: p.variable } },
    { name: "Properties", scope: ["variable.other.property", "meta.object-literal.key", "entity.name.tag.yaml"], settings: { foreground: p.property } },
    { name: "Parameters", scope: ["variable.parameter"], settings: param(p) },
    { name: "Punctuation & Braces", scope: ["punctuation", "meta.brace", "meta.delimiter", "punctuation.separator", "punctuation.terminator", "punctuation.accessor"], settings: { foreground: p.punctuation } },
    { name: "HTML/XML Tags", scope: ["entity.name.tag", "punctuation.definition.tag", "meta.tag"], settings: { foreground: p.tag } },
    { name: "Tag attributes", scope: ["entity.other.attribute-name"], settings: { foreground: p.attribute } },
    { name: "JSON Keys", scope: ["support.type.property-name.json"], settings: { foreground: p.jsonKey || p.variable } },
    { name: "Decorators", scope: ["meta.decorator", "punctuation.decorator", "entity.name.function.decorator"], settings: { foreground: p.decorator } },
    { name: "Markdown Headings", scope: ["markup.heading"], settings: { foreground: p.heading || p.declKw, fontStyle: "bold" } },
    { name: "Markdown Links", scope: ["markup.underline.link", "string.other.link.title.markdown"], settings: { foreground: "#A1BEE6", fontStyle: "underline" } }
  ];
}

function semantic(p) {
  return {
    "comment": { foreground: p.comment },
    "string": p.string,
    "number": p.number,
    "boolean": p.constant,
    "keyword": p.declKw,
    "modifier": p.declKw,
    "operator": p.operator,
    "function": p.func,
    "method": p.func,
    "type": p.type,
    "class": p.type,
    "interface": p.type,
    "struct": p.type,
    "variable": p.variable,
    "property": p.property,
    "parameter": param(p),
    "enum": p.type,
    "enumMember": p.constant,
    "macro": p.declKw,
    "decorator": p.decorator,
    "namespace": p.type
  };
}

// ---- 5 distinct accent identities -------------------------------------------
const THEMES = [
  {
    slug: "aura-noir",
    name: "Aura Noir",
    p: {
      accent: "#C2A3FF", accentHover: "#D5BDF9", cursor: "#EAC57C",
      comment: "#6A9955", string: "#E59E8A", number: "#ED926B", constant: "#ED926B",
      declKw: "#C2A3FF", controlKw: "#E0A0D0",
      operator: "#BCC6D8", punctuation: "#BCC6D8",
      func: "#69D2AE", type: "#EAC57C", variable: "#B4D0F0",
      property: "#75C3CB", parameter: "#75C3CB", paramItalic: true,
      decorator: "#C2A3FF", tag: "#E0A0D0", attribute: "#75C3CB", jsonKey: "#B4D0F0"
    }
  },
  {
    slug: "aura-noir-modern",
    name: "Aura Noir Modern",
    p: {
      accent: "#4FA6E6", accentHover: "#7FC0F0", cursor: "#4FC1FF", editorFg: "#D4D4D4",
      comment: "#6A9955", string: "#CE9178", number: "#B5CEA8", constant: "#4FC1FF",
      declKw: "#569CD6", controlKw: "#C586C0",
      operator: "#D4D4D4", punctuation: "#D4D4D4",
      func: "#DCDCAA", type: "#4EC9B0", variable: "#9CDCFE",
      property: "#9CDCFE", parameter: "#9CDCFE", paramItalic: false,
      decorator: "#DCDCAA", tag: "#569CD6", attribute: "#9CDCFE", jsonKey: "#9CDCFE", heading: "#569CD6"
    }
  },
  {
    slug: "aura-noir-aurora",
    name: "Aura Noir Aurora",
    p: {
      accent: "#45C7D4", accentHover: "#7FDCE6", cursor: "#45C7D4",
      comment: "#6A9955", string: "#E5A98A", number: "#F0B884", constant: "#F0B884",
      declKw: "#45C7D4", controlKw: "#B69CF0",
      operator: "#BCCAD0", punctuation: "#BCCAD0",
      func: "#6FE0C0", type: "#E6D08A", variable: "#A8D4E8",
      property: "#7FC8D0", parameter: "#7FC8D0", paramItalic: true,
      decorator: "#B69CF0", tag: "#B69CF0", attribute: "#7FC8D0", jsonKey: "#A8D4E8", heading: "#45C7D4"
    }
  },
  {
    slug: "aura-noir-ember",
    name: "Aura Noir Ember",
    p: {
      accent: "#E8A85C", accentHover: "#F2C083", cursor: "#F0A860",
      comment: "#6A9955", string: "#D98E70", number: "#F08868", constant: "#F08868",
      declKw: "#E8A85C", controlKw: "#F0787C",
      operator: "#CAC2B6", punctuation: "#CAC2B6",
      func: "#F0C674", type: "#7FD8C0", variable: "#A8C8E8",
      property: "#9CC8D0", parameter: "#9CC8D0", paramItalic: true,
      decorator: "#E8A85C", tag: "#F0787C", attribute: "#9CC8D0", jsonKey: "#A8C8E8", heading: "#E8A85C"
    }
  },
  {
    slug: "aura-noir-rose",
    name: "Aura Noir Rose",
    p: {
      accent: "#E68FB8", accentHover: "#F2B0D0", cursor: "#E68FB8",
      comment: "#6A9955", string: "#E5A98A", number: "#F08080", constant: "#F08080",
      declKw: "#E68FB8", controlKw: "#C792EA",
      operator: "#C8C0CC", punctuation: "#C8C0CC",
      func: "#7FD0E0", type: "#F0C674", variable: "#A8C8E8",
      property: "#85C8D0", parameter: "#85C8D0", paramItalic: true,
      decorator: "#E68FB8", tag: "#C792EA", attribute: "#85C8D0", jsonKey: "#A8C8E8", heading: "#E68FB8"
    }
  },
  {
    slug: "aura-noir-forest",
    name: "Aura Noir Forest",
    p: {
      accent: "#4DBE8E", accentHover: "#7FD8B0", cursor: "#4DBE8E",
      comment: "#6A9955", string: "#E5A98A", number: "#E0B070", constant: "#E0B070",
      declKw: "#4DBE8E", controlKw: "#E0A0D0",
      operator: "#BAC8C2", punctuation: "#BAC8C2",
      func: "#E6C878", type: "#5BC8D8", variable: "#A8C8E8",
      property: "#85C8D0", parameter: "#85C8D0", paramItalic: true,
      decorator: "#4DBE8E", tag: "#E0A0D0", attribute: "#85C8D0", jsonKey: "#A8C8E8", heading: "#4DBE8E"
    }
  },
  {
    slug: "aura-noir-crimson",
    name: "Aura Noir Crimson",
    p: {
      accent: "#E06A78", accentHover: "#F0909C", cursor: "#E06A78",
      comment: "#6A9955", string: "#E5A98A", number: "#F0B884", constant: "#F0B884",
      declKw: "#E06A78", controlKw: "#C792EA",
      operator: "#CCC0C4", punctuation: "#CCC0C4",
      func: "#E6C878", type: "#5BC8D8", variable: "#A8C8E8",
      property: "#85C8D0", parameter: "#85C8D0", paramItalic: true,
      decorator: "#E06A78", tag: "#C792EA", attribute: "#85C8D0", jsonKey: "#A8C8E8", heading: "#E06A78"
    }
  },
  {
    slug: "aura-lumen",
    name: "Aura Lumen",
    mode: "light",
    p: {
      accent: "#6E4FD0", accentHover: "#5A3FB8", cursor: "#6E4FD0", editorFg: "#2E3440",
      comment: "#4C8A3F", string: "#B5523C", number: "#1C7E5A", constant: "#0F62C4",
      declKw: "#6E4FD0", controlKw: "#B83D9E",
      operator: "#4A4F5C", punctuation: "#4A4F5C",
      func: "#8A6A1F", type: "#1F7A8C", variable: "#1A3D8F",
      property: "#2A5A9A", parameter: "#2A5A9A", paramItalic: true,
      decorator: "#6E4FD0", tag: "#B83D9E", attribute: "#2A5A9A", jsonKey: "#1A3D8F", heading: "#6E4FD0"
    }
  },
  {
    slug: "aura-day",
    name: "Aura Day",
    mode: "light",
    p: {
      accent: "#1F6FD6", accentHover: "#155AB5", cursor: "#1F6FD6", editorFg: "#2E3440",
      comment: "#4C8A3F", string: "#B5523C", number: "#1C7E5A", constant: "#0F62C4",
      declKw: "#1F6FD6", controlKw: "#A33EAE",
      operator: "#4A4F5C", punctuation: "#4A4F5C",
      func: "#8A6A1F", type: "#1F7A8C", variable: "#1A3D8F",
      property: "#2A5A9A", parameter: "#2A5A9A", paramItalic: true,
      decorator: "#1F6FD6", tag: "#A33EAE", attribute: "#2A5A9A", jsonKey: "#1A3D8F", heading: "#1F6FD6"
    }
  }
];

for (const t of THEMES) {
  const isLight = t.mode === "light";
  const theme = {
    name: t.name,
    type: isLight ? "light" : "dark",
    semanticHighlighting: true,
    colors: (isLight ? workbenchLight : workbench)(t.p),
    tokenColors: tokens(t.p),
    semanticTokenColors: semantic(t.p)
  };
  const file = path.join(OUT, `${t.slug}-color-theme.json`);
  fs.writeFileSync(file, JSON.stringify(theme, null, 2) + "\n");
  console.log("wrote " + (isLight ? "[light] " : "[dark]  ") + file);
}
