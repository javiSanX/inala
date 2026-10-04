---
name: Inala
description: A Camino credential for the first steps of therapy; stone ground, cardstock boxes, Camino blue field, yellow arrows for every action.
colors:
  piedra: "#e4e7ea"
  piedra-hondo: "#cdd3da"
  papel: "#fbfcfd"
  linea: "#b9c2d3"
  tinta: "#13213f"
  tinta-suave: "#44506b"
  camino: "#1d3e8c"
  camino-hondo: "#142e6b"
  camino-claro: "#c8d4f0"
  flecha: "#f3c224"
  flecha-hondo: "#e0ab0b"
  sello: "#23807c"
typography:
  marca:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 2.2rem + 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 5.4vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.1vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.08em"
rounded:
  plaque: "0.25rem"
  card: "0.375rem"
spacing:
  gutter-mobile: "1rem"
  gutter-tablet: "1.5rem"
  gutter-desktop: "2.5rem"
  section: "5rem"
  section-lg: "7rem"
  card-pad: "1.5rem"
  card-pad-lg: "2.5rem"
components:
  button-flecha:
    backgroundColor: "{colors.flecha}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.plaque}"
    padding: "12px 20px"
    height: "48px"
  button-flecha-hover:
    backgroundColor: "{colors.flecha-hondo}"
    textColor: "{colors.tinta}"
  button-flecha-lg:
    backgroundColor: "{colors.flecha}"
    textColor: "{colors.tinta}"
    typography: "{typography.lead}"
    rounded: "{rounded.plaque}"
    padding: "16px 24px"
  button-camino:
    backgroundColor: "{colors.camino}"
    textColor: "#ffffff"
    rounded: "{rounded.plaque}"
    padding: "12px 20px"
  button-camino-hover:
    backgroundColor: "{colors.camino-hondo}"
  button-papel:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.plaque}"
    padding: "12px 20px"
  card-credencial:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad-lg}"
  field-ruled:
    textColor: "{colors.tinta}"
    typography: "{typography.lead}"
    height: "48px"
    padding: "8px 0"
  field-label:
    textColor: "{colors.tinta-suave}"
    typography: "{typography.label}"
  nav-link:
    textColor: "{colors.tinta}"
    rounded: "{rounded.plaque}"
    padding: "0 14px"
    height: "44px"
  field-camino:
    backgroundColor: "{colors.camino}"
    textColor: "#ffffff"
---

# Design System: Inala

## Overview

**Creative North Star: "The Camino Credential"**

Inala's site is a pilgrim's credential for the first steps of therapy. The secular waymarking of the Camino Francés as it crosses Pamplona supplies the whole vocabulary: a cool stone-grey wall as ground, white credential cardstock printed with hairline boxes, a Camino-blue field like the tiled mojón markers, a painted yellow arrow wherever the visitor can take the next step, and Inala's own spiral pressed as an aqua stamp. The visitor is walked from doubt to a first appointment the way a pilgrim is walked between waymarks: one clear arrow at a time.

The world is calm and legible rather than decorative. Density is moderate: generous section rhythm, long reading at a comfortable measure, colour concentrated at the edges (hero field, footer, CTA bands, actions) while the reading surfaces stay near-achromatic. Real photographs of María and the consulting room carry the warmth; the system never substitutes illustration or stock imagery.

Confirmed rejections: the category default of beige ground, sage accents, italic serif display and stock hands; dark mode (light theme only, `color-scheme: light`).

**Key Characteristics:**
- Stone ground, cardstock surfaces, one committed blue field.
- Yellow means "act here", nothing else.
- Aqua lives only inside the stamp.
- Repeated content is ruled into rows (casillas), not tiled into icon cards.
- Heavy, tight Bricolage Grotesque display over a plain, roomy body.
- One signature motion: the stamp pressed into the four process boxes.

## Colors

A two-ink credential: Camino blue and arrow yellow printed on cool stone and white cardstock, with a single aqua stamp ink taken from the logo.

### Primary
- **Camino Blue** (`camino`): the committed field. Hero backgrounds (home credential surround, interior `PageHero`), the mojón footer, the blue `CtaBand` variant and the blue method band on /nuestro-metodo. Also the colour of links, decorative arrows on light ground, list markers, checked radios, focus rings and prices. `theme-color` matches it.
- **Deep Camino** (`camino-hondo`): hover state of the blue plaque only.
- **Pale Camino** (`camino-claro`): secondary text and decorative arrows *on* the blue field (leads, footer meta, CTA-band arrow on blue). Never used as a surface on light pages.

### Secondary
- **Arrow Yellow** (`flecha`): every action and every "next step": primary plaques, the header "¡Hablemos!" plaque, the WhatsApp submit, the arrow discs in Relacionados, the open state of a FAQ disc, footer email link, the current-page arrow mark, the services-menu arrows (which sit inside links), text selection, and the focus ring on blue.
- **Deep Arrow** (`flecha-hondo`): hover state of yellow plaques.

### Tertiary
- **Stamp Aqua** (`sello`): ink of the practice stamp only, applied with `mix-blend-multiply` so it reads as pressed ink.

### Neutral
- **Stone** (`piedra`): page ground; also hover wash on nav links, the checked modality option and the idle FAQ disc.
- **Deep Stone** (`piedra-hondo`): reserved tonal step of the ground; currently defined but not used in shipped components.
- **Cardstock** (`papel`): every card, the header bar (95% with blur), mobile menu, light CTA band, legal article.
- **Hairline** (`linea`): printed box rules, list rows, card dividers, input-free borders, ghost plaque ring, scrollbar thumb.
- **Ink** (`tinta`): primary text; also the 2px rule that opens a ruled list and the underline of ruled fields.
- **Soft Ink** (`tinta-suave`): body paragraphs on cardstock, labels, secondary meta.

### Named Rules
**The Arrow Means Go Rule.** Yellow is reserved for actions and the current-page arrow mark. A decorative arrow (Frase, CtaBand, "Por qué" rows) is Camino blue on light ground and Pale Camino on blue. If tapping it does nothing, it is not yellow.

**The Stamp Ink Rule.** Aqua appears only inside the stamp. No aqua text, borders, buttons or backgrounds.

**The Colour At The Edges Rule.** Long reading (legal pages, service explanations) sits on cardstock in ink and soft ink; colour appears at the edges: the blue top rule of the legal card, list markers, links, the closing bands.

## Typography

**Display Font:** Bricolage Grotesque, variable 200–800, optical sizing on (with system-ui, sans-serif)
**Body Font:** Bricolage Grotesque (same family)
**Label Font:** Barlow Condensed 600, uppercase (with Arial Narrow, sans-serif)

**Character:** one warm grotesque does all the talking, heavy and tightly tracked at the top, open and roomy at reading size; condensed signage caps appear only where the credential prints a box name.

### Hierarchy
- **Marca** (800, fluid 3.75–6rem, 0.88): the word INALA on the home credential only, in Camino blue.
- **Display** (800, fluid 2.75–5.75rem, 0.95): interior page H1 on the blue field.
- **Headline** (800, fluid 2–3.5rem, 1.02): section H2s, compact hero H1s, prices, footer sign-off.
- **Title** (700, fluid 1.5–2.125rem, 1.1): H3s, card titles, mobile menu links.
- **Lead** (400–600, fluid 1.19–1.5rem, 1.45): intro paragraphs, list rows inside service sections, large plaques, FAQ questions.
- **Body** (400, 1.125rem, 1.65): running text, capped at 66ch (`measure`); hero leads cap at 60ch.
- **Small** (400, 0.9375rem, 1.5): contact meta, legal notes, footer fine print.
- **Label** (Barlow Condensed 600, 0.9375rem, +0.08em, uppercase): form labels, fieldset legends, the legal index heading, the mobile-menu "Servicios" group, table headers.

All headings use `text-wrap: balance`; paragraphs and list items use `text-wrap: pretty`; prices and phone numbers use tabular numerals.

### Named Rules
**The Box Label Rule.** Barlow Condensed caps label a box or a field, never introduce a section. No eyebrows or kickers above headings.

## Layout

A single `shell` container (max 80rem, centred) with gutters of 1rem / 1.5rem (sm) / 2.5rem (lg). Sections breathe on a fixed vertical rhythm of 5rem, rising to 7rem at lg; bands (CTA, footer) use 3.5–5rem. The sticky header is 4.5rem (5rem at lg) and anchors scroll with a 6rem offset.

Desktop compositions are asymmetric two-column grids, usually 5fr/7fr or 7fr/5fr, with heading on one side and content on the other. The home hero is the credential opened flat: three panels (1.3fr / 0.8fr / 1fr) with fold shading where the cardstock bends; below lg the panels unfold vertically and the fold shading moves to the top edge. The "Por qué" row staggers its three columns downward (0 / 4rem / 8rem) like steps.

Interior pages open on the blue `PageHero`; the first content card may overlap it upward (-2rem to -3rem) as on /tarifas. Every page closes on a CTA band and the blue footer. Breakpoints are Tailwind defaults (sm 40rem, md 48rem, lg 64rem, xl 80rem); lg is where layouts go multi-column and the desktop nav appears.

## Elevation & Depth

A hybrid of paper and light. Cards are cardstock lifted slightly off the stone wall with soft, ink-tinted shadows; depth also comes from printed folds (`fold-left`, `fold-top` gradients) and from blend-multiplied stamp ink. Nothing glows and nothing floats high.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgb(19 33 63 / 0.08), 0 12px 32px -12px rgb(19 33 63 / 0.28)`): resting cardstock: FAQ, process grid, service cards, legal article, image mats, Relacionados links.
- **Lift** (`0 2px 4px rgb(19 33 63 / 0.1), 0 24px 48px -20px rgb(19 33 63 / 0.4)`): the home credential, price cards, contact form, services popover, and the hover state of Relacionados links.
- **Plaque bevel** (`shadow-plaque`: `inset 0 -3px 0 rgb(19 33 63 / 0.18)`; `shadow-plaque-hondo`: `rgb(0 0 0 / 0.25)` on blue): the painted bottom edge of solid plaques.

### Named Rules
**The Folded Card Rule.** Depth is paper depth: one card shadow at rest, lift only for the primary credential surface or on hover. No hard offset shadows, no coloured glows.

## Shapes

Nearly square, like printed card and enamel plaques. Plaques (buttons, nav pills, modality options) take a 0.25rem corner; cards take 0.375rem; photos inside a mat take a 2px corner. Circles are reserved for small markers: list markers, arrow discs, FAQ discs, route waypoints, the stamp itself. Boxes are drawn with 1px hairlines in `linea`; a 2px ink rule opens a ruled list. The painted arrow (a broad flat polygon) is the recurring silhouette, used decoratively and, clipped small, as the current-page mark.

## Components

### Buttons (Plaques)
Waymark plaques: solid, square, confident, with the arrow always pointing right.
- **Shape:** gently squared (0.25rem), min height 48px (56–64px for the hero submit).
- **Primary (flecha):** yellow ground, ink text, semibold, label left and arrow icon right (`justify-between`), painted bottom bevel. `lg` size steps up to lead type and 16px/24px padding.
- **Camino:** blue ground, white text, darker bevel; for secondary actions on light ground.
- **Papel (ghost):** cardstock with a hairline ring that darkens to ink on hover.
- **Hover / Focus:** ground darkens one step (200ms, ease-out-quart); the arrow nudges 4px right (300ms, ease-out-expo); press moves the plaque down 1px. Focus is a 3px Camino ring at 3px offset (yellow on blue fields). Disabled: yellow at 60% opacity, `not-allowed` cursor.

### Cards / Containers
- **Corner Style:** 0.375rem.
- **Background:** cardstock on stone.
- **Shadow Strategy:** Card at rest, Lift for the hero credential and price cards (see Elevation).
- **Border:** none outside; inside, hairline rules divide boxes. Grids of boxes use a 1px gap over a hairline background so the rules read as printed casillas.
- **Internal Padding:** 1.5rem mobile, 2–2.5rem from sm, up to 3.5rem on legal and biography panels.

### Ruled Lists (Casillas)
Repeated content is a list of ruled rows: a 1px hairline above and between rows (a 2px ink rule to open a major list), each row led by a Camino arrow or, for included items, a small blue check disc. Two columns from sm when items are short. ParaQuien rows put the title and its text side by side (5fr/7fr) on desktop.

### Inputs / Fields
- **Style:** ruled lines, not boxes: transparent ground, 2px ink underline, lead-size text, 48px min height. Selects carry a Camino chevron.
- **Labels:** Barlow Condensed caps in soft ink above the field.
- **Focus:** the underline turns Camino blue, plus the global focus ring.
- **Choice tiles (Modalidad):** plaque-shaped options with a hairline ring; checked shows stone ground, 2px ink ring and a filled Camino check disc. Keyboard focus outlines the whole tile.

### Navigation
- **Header:** sticky cardstock bar (95% opacity, light blur) with a hairline bottom rule; spiral logo plus the wordmark "Inala" in 800. Desktop links are medium-weight plaques that wash to stone on hover. Servicios opens a full-width popover row of five ruled boxes, each ending in a yellow arrow that slides on hover.
- **Current page:** a small clipped yellow arrow beneath the link (desktop) or before it (mobile). Never a colour or weight swap.
- **Mobile:** a "Menú" ghost plaque opens a full-height cardstock sheet of ruled title-size links, closing with a full-width yellow "¡Hablemos!" plaque. Popovers fade and drop 8px in (300ms, ease-out-expo); no transition under reduced motion.
- **Footer (mojón):** the blue field closes every page: headline sign-off with the email as a yellow link, contact rows, and a link column with yellow underlines on hover.

### The Stamp (Sello)
Inala's spiral inside two printed rings with condensed caps text on the ring path, in Stamp Aqua, rotated between -12° and 11°, multiplied onto whatever it sits on. Decorative (`aria-hidden`); every fact it shows also exists as text. Variants: the spiral centre (photo corners on home, /sobre-mi, /nuestro-metodo) and a numeral centre (the four process steps).
- **Placement:** only on cardstock or on the light area of a photograph, overlapping a corner. Never on the blue field.
- **Motion:** on the four process steps only, the stamp is pressed in as its box scrolls into view (`stamp-press`: from 1.35 scale, 2px blur, transparent, to a slight 0.96 overshoot, then rest), driven by `animation-timeline: view()` over `entry 35% → cover 42%`. Stamps are visible by default; the animation applies only where scroll-driven animation is supported and `prefers-reduced-motion: no-preference`.

### Painted Arrow (Flecha)
A broad flat arrow polygon, the Camino waymark. Decorative only; meaning always lives in text. Leads the large painted sentences (Frase), points at the CTA band's plaque, and heads each "Por qué" column. Coloured per The Arrow Means Go Rule.

### Page Hero and CTA Band
`PageHero` paints the page title in Display (or Headline when compact) on the blue field with a Pale Camino lead and an optional large yellow plaque. `CtaBand` comes in a cardstock variant (hairline top and bottom) and a blue variant; both hold a headline, an optional lead, a decorative arrow (xl only) and one yellow plaque.

## Do's and Don'ts

### Do:
- **Do** use yellow (`flecha`) for every action and for the current-page arrow mark, and for nothing else.
- **Do** colour decorative arrows Camino blue on light ground and Pale Camino on the blue field.
- **Do** place the aqua stamp on cardstock or a light photo area, rotated a few degrees, with multiply blending.
- **Do** present repeated content as ruled rows (casillas) with hairline dividers.
- **Do** keep reading text at 66ch or less, in soft ink on cardstock.
- **Do** mark the current page with the small yellow arrow.
- **Do** ship every motion with a `prefers-reduced-motion` fallback; content must be visible without the animation.
- **Do** define any new colour, radius, shadow or easing once in `@theme` in `src/styles/global.css`.

### Don't:
- **Don't** use beige grounds, sage accents, italic serif display or stock hands.
- **Don't** use aqua anywhere except inside the stamp.
- **Don't** put the stamp on the blue field.
- **Don't** tile repeated content into same-size icon cards.
- **Don't** use Barlow Condensed caps as eyebrows or kickers above headings; it labels fields and boxes only.
- **Don't** mark the current page with a colour or weight swap.
- **Don't** add a dark theme; the system is light only.
- **Don't** add motion beyond the stamp press and small state transitions (arrow nudge, popover fade, FAQ disc turn); never `transition: all`.
- **Don't** use hard offset shadows or coloured glows.
