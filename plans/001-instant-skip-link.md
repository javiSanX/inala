# 001 — Show the skip link instantly on keyboard focus

- **Status**: DONE (executed and verified in this session)
- **Commit**: 83d6380 (working tree with the uncommitted redesign)
- **Severity**: HIGH
- **Category**: Purpose & frequency
- **Estimated scope**: 1 file, one class list

## Problem

The skip link is the first thing a keyboard user reaches. It is keyboard-initiated by definition (Tab), so it must appear at once; today it slides down over 200ms, delaying the exact moment the user is looking for it.

```astro
<!-- src/layouts/Layout.astro:135 — current -->
class="fixed left-4 top-3 z-60 -translate-y-20 rounded-full bg-teal px-5 py-3 text-small font-semibold text-white transition-[translate] duration-200 ease-out focus:translate-y-0"
```

## Target

No transition at all: the link is off screen until focused and on screen the frame it receives focus.

```astro
<!-- target -->
class="fixed left-4 top-3 z-60 -translate-y-20 rounded-full bg-teal px-5 py-3 text-small font-semibold text-white focus:translate-y-0"
```

## Repo conventions to follow

- Tailwind CSS 4 utilities inline in `.astro` markup; Biome formats the file (tabs, double quotes).
- Exemplar of a keyboard-facing control with no motion: the focus ring in `src/styles/global.css` (`:focus-visible { outline: 2px solid var(--color-teal); outline-offset: 3px; }`), which appears instantly.

## Steps

1. In `src/layouts/Layout.astro`, on the `<a href="#contenido">` element, delete the three utilities `transition-[translate] duration-200 ease-out`. Keep every other class.

## Boundaries

- Do NOT change the link text, `href`, position or colours.
- Do NOT touch any other element.
- If the class list differs from the excerpt above, STOP and report.

## Verification

- **Mechanical**: `bun run check` (no errors), `bun run typecheck` (0 errors), `bun run build` (completes).
- **Feel check**: load any page, press Tab once: «Saltar al contenido» is fully visible in the same frame, with its focus ring; press Enter and focus moves to `#contenido`.
- **Done when**: the computed `transition-property` of the skip link is `none` or does not include `translate`.
