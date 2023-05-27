# Stoked! 🤙

Cool theme, brah

![Preview](https://raw.githubusercontent.com/brianbuie/stoked-theme/main/images/screenshot.png)

Not a lot of colors, but they're good ones. Syntax highlighting is still a work in progress, since I'm just adding things as I go. Feel free to open an issue or a PR if you notice anything is off.

## Install

- [VS Code](https://marketplace.visualstudio.com/items?itemName=brianbuie.stoked-theme)

### Other Builds

- [Warp](https://docs.warp.dev/appearance/custom-themes)

- CSS

## Build

```sh
pnpm run build [--everywhere]
```

Builds to `./themes/stoked-vscode.json` and `./themes/stoked-warp.yaml`

`--everywhere` flag will also build to `~/.warp/themes/stoked-warp.yaml` for [warp](https://docs.warp.dev/appearance/custom-themes)

## Development

Use VS Code's debugger to launch a new window that will auto-update on changes

```sh
pnpm run watch [--everywhere]
```

Re-builds the theme json file when source files change
