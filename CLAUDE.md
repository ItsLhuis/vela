# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Static export to /out (for GitHub Pages)
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix
pnpm format       # Prettier format all files
pnpm format:check # Check formatting without writing

# Add a shadcn/ui component (handles renaming + index.ts update automatically)
pnpm shadcnui <componentName>
# Example: pnpm shadcnui button
```

## Architecture

**Vela** is a static Next.js landing page deployed to GitHub Pages at
`https://itslhuis.github.io/vela`.

Key config:

- `next.config.ts`: `output: "export"` + `basePath: "/vela"` — all links/assets must account for
  this base path
- `@/*` path alias maps to the repo root (e.g., `@/components/ui/Button`)

**Directory structure:**

- `app/` — Next.js App Router (single page for now: `page.tsx`)
- `components/ui/` — shadcn/ui components, named in **PascalCase** (e.g., `Button.tsx`)
- `hooks/` — custom hooks, named in **camelCase** (e.g., `useMediaQuery.ts`)
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `scripts/shadcnui.ts` — wrapper around `shadcn add` that renames files to match project
  conventions and regenerates `components/ui/index.ts`

## shadcn/ui Convention

shadcn outputs kebab-case files by default. This project renames them:

- `components/ui/` → PascalCase (`Button.tsx`, `DropdownMenu.tsx`)
- `hooks/` → camelCase (`useMediaQuery.ts`)
- `components/ui/index.ts` is auto-generated — **do not edit manually**

Always use `pnpm shadcnui <name>` instead of calling `shadcn add` directly.

## Code Style

- No semicolons, double quotes, 2-space indent, 100-char print width (enforced by Prettier)
- Commits must follow Conventional Commits:
  `feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert`
- Pre-commit hook runs ESLint + Prettier via lint-staged

## Deployment

Deployed manually via GitHub Actions (`workflow_dispatch`) to GitHub Pages. Build output goes to
`/out`.
