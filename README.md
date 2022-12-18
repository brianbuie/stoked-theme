# Stoked! 🤙

### So far

- [VS Code](https://code.visualstudio.com/)

  - TODO: Add to Marketplace

- [Warp](https://www.warp.dev/)

## Build

```sh
pnpm run build [--everywhere]
```

Builds to `./themes/stoked-vscode.json` and `./themes/stoked-warp.yaml`

`--everywhere` flag will also build to `~/.warp/themes/stoked-warp.yaml` for [warp](https://docs.warp.dev/appearance/themes)

## Development

Use VS Code's debugger to launch a new window that will auto-update on changes

```sh
pnpm run watch [--everywhere]
```

Re-build the theme json file when source files change

## Packaging

```sh
vsce package
```

create vsix file to install. Right click file from explorer and choose 'Install Extension VSIX'
