# 004 — Use `ease` for colour and hover transitions

- **Status**: DONE (executed and verified in this session)
- **Commit**: 83d6380 (working tree with the uncommitted redesign)
- **Severity**: LOW
- **Category**: Easing & duration / Cohesion & tokens
- **Estimated scope**: 1 file, one token

## Problem

Colour-only transitions (links, nav items, footer links, breadcrumbs, borders) set a duration but no curve, so they fall back to Tailwind's default `--default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)`. For hover and colour changes the curve is `ease`. Every transition that moves something already names `ease-out` explicitly, so changing the default only affects colour changes.

```css
/* node_modules/tailwindcss/theme.css:493 — current default */
--default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

Examples that use the default: `src/components/Footer.astro:21` (`transition-[color] duration-200`), `src/components/Breadcrumbs.astro:38`, `src/pages/index.astro:149` (`transition-[border-color] duration-200`).

## Target

```css
/* src/styles/global.css, inside @theme, next to --ease-out */
--default-transition-timing-function: ease;
```

## Repo conventions to follow

- Motion tokens live in the `@theme` block of `src/styles/global.css` under the comment `/* Motion (animate skill) ... */`, e.g. `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`.

## Steps

1. In `src/styles/global.css`, in `@theme`, add `--default-transition-timing-function: ease;` right after `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`.

## Boundaries

- Do NOT change `--ease-out` or `--ease-in-out`, or any utility that names `ease-out` explicitly.
- Do NOT add a duration token.

## Verification

- **Mechanical**: `bun run check`, `bun run typecheck`, `bun run build` all clean; in the built CSS, `--default-transition-timing-function` resolves to `ease`.
- **Feel check**: hover the footer links and the breadcrumb: the colour change starts gently and settles smoothly; the button arrows and dropdown keep their stronger ease-out.
- **Done when**: `getComputedStyle(footerLink).transitionTimingFunction` is `ease`, while the dropdown panel still reports `cubic-bezier(0.23, 1, 0.32, 1)`.
