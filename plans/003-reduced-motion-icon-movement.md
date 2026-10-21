# 003 — Drop icon rotation and arrow nudges under reduced motion

- **Status**: DONE (executed and verified in this session)
- **Commit**: 83d6380 (working tree with the uncommitted redesign)
- **Severity**: LOW
- **Category**: Accessibility
- **Estimated scope**: 9 files, one utility each

## Problem

With `prefers-reduced-motion: reduce`, the site already drops entrances, reveals, the dropdown scale and the press scale. Three small movements still play:

```astro
<!-- src/components/ui/Faq.astro:26 — the plus icon rotates 45° when an answer opens -->
class="... transition-[rotate,background-color] duration-200 ease-out group-open/faq:rotate-45 group-open/faq:bg-mist"
<!-- src/components/Header.astro:64 — the Servicios chevron rotates 180° -->
class="transition-[rotate] duration-200 ease-out group-hover:rotate-180 group-focus-within:rotate-180 group-data-closed:rotate-0"
<!-- arrow nudges on hover (fine pointers only), e.g. src/components/ui/Button.astro:33 -->
class="transition-[translate] duration-200 ease-out group-hover-fine:translate-x-0.5"
```

Arrow nudges with the same pattern: `src/pages/index.astro:111`, `src/pages/nuestro-metodo.astro:338`, `src/pages/contacto.astro:464`, `src/pages/servicios/index.astro:51` (`group-hover-fine:translate-x-1`), `src/pages/blog.astro:74` (`group-hover-fine:translate-x-1`), `src/pages/blog/[id].astro:61` (`group-hover-fine:-translate-x-0.5`).

Reduced motion means fewer and gentler animations, not zero: the end state (an × instead of a +, a flipped chevron) is information and stays; only the movement goes.

## Target

- Rotations: keep the end state, remove the transition when motion is reduced: add `motion-reduce:transition-none`.
- Arrow nudges: decorative movement only, so they run only when motion is welcome: prefix the hover utility with `motion-safe:`.

```astro
<!-- target examples -->
class="... transition-[rotate,background-color] duration-200 ease-out group-open/faq:rotate-45 group-open/faq:bg-mist motion-reduce:transition-none"
class="transition-[translate] duration-200 ease-out motion-safe:group-hover-fine:translate-x-0.5"
```

## Repo conventions to follow

- Existing reduced-motion pattern: `motion-reduce:active:scale-100` in `src/components/ui/button.ts:9` and `motion-reduce:scale-100` in `src/components/Header.astro:68`.
- `group-hover-fine` is a custom variant defined in `src/styles/global.css` (hover on `(hover: hover) and (pointer: fine)`); Tailwind 4 stacks `motion-safe:` in front of it.

## Steps

1. `src/components/ui/Faq.astro:26`: append `motion-reduce:transition-none` to the icon span.
2. `src/components/Header.astro:64`: append `motion-reduce:transition-none` to the chevron `Icon` class.
3. In each arrow file listed above, change `group-hover-fine:<translate utility>` to `motion-safe:group-hover-fine:<translate utility>`, keeping the same translate value.

## Boundaries

- Do NOT remove the rotations or the arrows; do NOT change durations or curves.
- Do NOT touch the hero, reveal or dropdown rules in `src/styles/global.css`.

## Verification

- **Mechanical**: `bun run check`, `bun run typecheck`, `bun run build` all clean.
- **Feel check**: in DevTools Rendering, emulate `prefers-reduced-motion: reduce` and reload:
  - Opening an FAQ shows the × immediately, with no rotation.
  - Hovering Servicios flips the chevron with no rotation.
  - Hovering «Solicitar primera cita» changes colour only; the arrow stays still.
  - Without the emulation, all three still animate as before.
- **Done when**: under reduced motion no element in the header, FAQ or buttons changes `rotate` or `translate` through a transition.
