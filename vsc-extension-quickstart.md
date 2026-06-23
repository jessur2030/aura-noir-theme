# Aura Noir — maintainer notes

> Local notes only. This file is listed in `.vscodeignore`, so it is **not** shipped to the Marketplace.

## Layout

- `package.json` registers the extension and lists every theme under `contributes.themes`.
- `themes/*-color-theme.json` — one file per variant. Each contains the workbench `colors`, TextMate `tokenColors`, and `semanticTokenColors`.

The family (9 themes):

| Variant | File | Mode | Accent |
|---|---|---|---|
| Aura Noir | `aura-noir-color-theme.json` | dark | violet |
| Aura Noir Modern | `aura-noir-modern-color-theme.json` | dark | azure |
| Aura Noir Aurora | `aura-noir-aurora-color-theme.json` | dark | teal |
| Aura Noir Ember | `aura-noir-ember-color-theme.json` | dark | amber |
| Aura Noir Rose | `aura-noir-rose-color-theme.json` | dark | rose |
| Aura Noir Forest | `aura-noir-forest-color-theme.json` | dark | green |
| Aura Noir Crimson | `aura-noir-crimson-color-theme.json` | dark | crimson |
| Aura Lumen | `aura-lumen-color-theme.json` | light | violet |
| Aura Day | `aura-day-color-theme.json` | light | azure |

## Editing colors

All nine theme files are generated from a single spec so they stay consistent — each variant is just a small palette object (accent + per-role hues), and shared builders produce the workbench + token blocks. Prefer editing the spec and regenerating over hand-editing nine JSON files.

The generator lives at `scripts/gen-themes.js`. Regenerate all nine with:

```bash
node scripts/gen-themes.js .
```

If you instead hand-edit a `themes/*.json` file, keep `tokenColors` and `semanticTokenColors` in sync, and remember the shared rules every variant should preserve:

- Comments are green and **not** italic.
- `variable` must differ from `editor.foreground` (the original scannability bug).
- Declaration keywords (`const`, `function`, `storage.*`) are split from control flow (`keyword.control.*`).
- Punctuation, operators, and template `${ }` (`punctuation.definition.template-expression`) stay legible.

## Fast iteration

1. Start the Extension Development Host: `Cmd+Shift+P` → **Debug: Start Debugging** (on a Mac laptop plain `F5` may trigger Dictation — use the command, `Fn`+`F5`, or enable standard function keys).
2. `Cmd+K Cmd+T` and switch between the Aura variants (light ones flip the whole UI).
3. Reload after edits: `Cmd+Shift+P` → **Developer: Reload Window**.
4. Verify weak tokens with **Developer: Inspect Editor Tokens and Scopes**.

## Quality bar

Don't judge on one JavaScript file. Validate against TypeScript/TSX, JSON, Markdown, CSS/Tailwind markup, diff views, and terminal output — and check at least one light variant too.

## Releasing

```bash
npx --yes @vscode/vsce package   # inspect the .vsix locally
npx --yes @vscode/vsce publish    # bumps the live listing (publisher: Jessusdev)
```

## References

- VS Code color theme guide: https://code.visualstudio.com/api/extension-guides/color-theme
- VS Code theme color reference: https://code.visualstudio.com/api/references/theme-color
- Marketplace listing: https://marketplace.visualstudio.com/items?itemName=jessusdev.aura-noir-theme
