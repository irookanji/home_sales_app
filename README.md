# Home Sales App

A React app for browsing home sales listings, built with [Rsbuild](https://rsbuild.rs/) (powered by [Rspack](https://rspack.rs/)).

## Setup

```bash
nub install
```

## Scripts

Use [Nub](https://nubjs.com/docs) to run scripts (`nub run <script>`). `npm run` works too.

| Command | Description |
| --- | --- |
| `nub run start` | Start the dev server (Rsbuild) |
| `nub run build` | Production build to `build/` |
| `nub run preview` | Preview the production build locally |
| `nub run test` | Run tests once (Vitest) |
| `nub run test:watch` | Run tests in watch mode |
| `nub run lint` | Format, lint, and organize imports in `src/` (Biome) |
| `nub run lint:ci` | Biome check for CI (no writes) |
| `nub run --node knip` | Find unused dependencies, exports, and files |

Open [http://localhost:3000](http://localhost:3000) after starting the dev server.

## Build tooling

This project was migrated from Create React App (`react-scripts` / webpack) to **Rsbuild**, which uses **Rspack** under the hood for significantly faster dev and production builds.

Configuration lives in `rsbuild.config.mjs`. See the [CRA → Rsbuild migration guide](https://rsbuild.rs/guide/migration/cra) for details.

## Nub

Install Nub globally once:

```bash
npm install -g --ignore-scripts=false @nubjs/nub
```

Nub reads `.node-version` and provisions the matching Node automatically. It is compatible with this project's `package-lock.json` (lockfile v2/v3).

## Learn More

- [Rsbuild documentation](https://rsbuild.rs/)
- [Rspack documentation](https://rspack.rs/)
- [Nub documentation](https://nubjs.com/docs)
- [Biome documentation](https://biomejs.dev/)
