# Motion plans

Written by the `improve-animations` audit of the redesigned site (commit 83d6380 plus the uncommitted redesign). Each plan is self-contained.

| # | Plan | Severity | Status |
| --- | --- | --- | --- |
| 001 | [Show the skip link instantly on keyboard focus](001-instant-skip-link.md) | HIGH | DONE |
| 002 | [Bring button press feedback inside its 100–160ms budget](002-button-press-duration.md) | MEDIUM | DONE |
| 003 | [Drop icon rotation and arrow nudges under reduced motion](003-reduced-motion-icon-movement.md) | LOW | DONE |
| 004 | [Use `ease` for colour and hover transitions](004-hover-colour-easing.md) | LOW | DONE |

## Recommended order

001 → 002 → 003 → 004. The plans touch different utilities and have no dependencies; 002 and 003 both edit `src/pages/contacto.astro` (different elements).

## Already right (not reported)

- Hero entrance: one authored moment, 80ms stagger, `cubic-bezier(0.23, 1, 0.32, 1)`, LCP element not delayed; reduced motion falls back to a 200ms fade.
- Figure reveals: fire once via IntersectionObserver, only for elements below the fold at load, never under reduced motion; content visible without JavaScript.
- Dropdown: opacity plus `scale(0.97)` from `origin-top` (its trigger), 200ms; mobile menu and form confirmation enter with `@starting-style`.
- No `transition: all`, no `ease-in`, no `scale(0)`; animated properties are transform, opacity, rotate, scale, translate and colours, plus `block-size` on the FAQ accordion (200ms, the tolerated exception).

## Missed opportunities (additive, not planned)

- The copy-email confirmation swaps its icon instantly (`src/pages/contacto.astro:172-173`); a 150ms opacity crossfade would make the success state easier to notice.
- Page-to-page navigation has no continuity. A CSS-only cross-document view transition (`@view-transition { navigation: auto; }`, disabled under reduced motion) would add a short crossfade in supporting browsers with no JavaScript; navigation is frequent, so it should stay a plain crossfade or nothing.
