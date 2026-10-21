# 002 — Bring button press feedback inside its 100–160ms budget

- **Status**: DONE (executed and verified in this session)
- **Commit**: 83d6380 (working tree with the uncommitted redesign)
- **Severity**: MEDIUM
- **Category**: Easing & duration
- **Estimated scope**: 2 files, one utility each

## Problem

Every button scales to 0.97 on press, but the scale shares a 200ms transition with the colour changes. Press feedback has a budget of 100–160ms; at 200ms the press reads slightly soft.

```ts
// src/components/ui/button.ts:9 — current (inside `base`)
"... transition-[background-color,border-color,color,scale] duration-200 ease-out active:scale-97 motion-reduce:active:scale-100"
```

```astro
<!-- src/pages/contacto.astro:165 — current (copy email button) -->
class="copy-email ... transition-[border-color,background-color,scale] duration-200 ease-out hover:border-teal active:scale-97 data-copied:bg-mist motion-reduce:active:scale-100"
```

## Target

`duration-150` (150ms) for the whole transition, keeping `ease-out`, which this project maps to `cubic-bezier(0.23, 1, 0.32, 1)` through the `--ease-out` token in `src/styles/global.css`. 150ms is inside the press budget and still a calm colour change.

```ts
// target
"... transition-[background-color,border-color,color,scale] duration-150 ease-out active:scale-97 motion-reduce:active:scale-100"
```

## Repo conventions to follow

- Curves are tokens in `src/styles/global.css` `@theme` (`--ease-out`, `--ease-in-out`); durations are Tailwind `duration-*` utilities.
- Exemplar: `src/components/ui/button.ts` is the single source of button styles; native `<button>` elements import `buttonClass()` from it.

## Steps

1. In `src/components/ui/button.ts`, inside the `base` string, replace `duration-200` with `duration-150`.
2. In `src/pages/contacto.astro`, on the `.copy-email` button, replace `duration-200` with `duration-150`.

## Boundaries

- Do NOT change the scale value (`active:scale-97`), the variants or any colour.
- Do NOT touch other `duration-200` utilities (links, nav, FAQ): they are not press feedback.

## Verification

- **Mechanical**: `bun run check`, `bun run typecheck`, `bun run build` all clean.
- **Feel check**: press and hold «Solicitar primera cita» on the home page and the copy button on /contacto: the press settles quickly and the release springs back without lag. In DevTools Animations at 10%, the scale reaches 0.97 in 150ms.
  - Toggle `prefers-reduced-motion: reduce`: no scale on press, colour change remains.
- **Done when**: both elements report `transition-duration: 0.15s`.
