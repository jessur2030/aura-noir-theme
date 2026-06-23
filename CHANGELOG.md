# Change Log

All notable changes to this extension are documented in this file.

## [1.2.0]

- Grew Aura Noir into a **nine-theme family** sharing one scannable role→hue strategy.
- Added seven dark accent variants: **Aura Noir** (violet), **Modern** (azure), **Aurora** (teal), **Ember** (amber), **Rose**, **Forest** (green), and **Crimson** (red).
- Added two light themes: **Aura Lumen** (violet) and **Aura Day** (azure).
- Scannability fixes applied across every variant:
  - Comments are now green and readable instead of dim italic.
  - Variables get their own hue, distinct from plain editor text.
  - Declaration keywords (`const`, `function`) are split from control-flow keywords (`if`, `return`, `import`).
  - Brightened punctuation, operators, and template `${ }` expressions (`:`, `$`, `.`, braces) for legibility.
- Each variant carries its accent through the workbench chrome (activity bar, badges, buttons, cursor, tab indicator, bracket matches).

## [1.1.0]

- Renamed the theme to Aura Noir.
- Expanded workbench colors so the editor chrome no longer relies on VS Code defaults.
- Added semantic token colors for modern language highlighting.
- Tightened broad TextMate scopes to improve syntax separation.

## [1.0.0]

- Initial release.
