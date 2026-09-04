# jaysonvcr.github.io

Personal portfolio site, built with [Vite](https://vitejs.dev/) (vanilla TypeScript) and deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages via GitHub Actions.

In the repo settings, under **Pages**, set the source to **GitHub Actions** (one-time setup).
