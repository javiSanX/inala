---
name: INALA Centro de Psicoterapia
description: The psychology-practice site visitors already expect, finished to premium-wellness standard.
colors:
  paper: "#f6f9f8"
  white: "#ffffff"
  mist: "#e9f4f1"
  line: "#d9e4e1"
  line-strong: "#b5c8c3"
  ink: "#15211f"
  ink-muted: "#3e4b49"
  ink-soft: "#5a6764"
  seafoam: "#7cc6c4"
  seafoam-soft: "#cdebe4"
  teal: "#24695b"
  teal-strong: "#1b5248"
  cypress: "#173f3a"
  cypress-line: "#2f5a54"
  on-dark: "#ffffff"
  on-dark-muted: "#c6dcd7"
  error: "#b3261e"
  error-soft: "#fbeceb"
typography:
  display:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.55rem + 3.4vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  heading:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.45rem + 1.6vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  subheading:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.22rem + 0.6vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "Synonym, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.06rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Synonym, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Synonym, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Synonym, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  focus: "4px"
  field: "12px"
  frame: "20px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  gutter-desktop: "40px"
  section: "80px"
  section-lg: "112px"
  section-tight: "48px"
  section-tight-lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.teal-strong}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-secondary-hover:
    textColor: "{colors.teal}"
  button-inverse:
    backgroundColor: "{colors.seafoam}"
    textColor: "{colors.cypress}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-inverse-hover:
    backgroundColor: "{colors.seafoam-soft}"
  button-inverse-outline:
    textColor: "{colors.on-dark}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "48px"
  input-invalid:
    backgroundColor: "{colors.error-soft}"
  choice-selected:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.field}"
  service-chip:
    textColor: "{colors.on-dark}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  service-chip-current:
    backgroundColor: "{colors.seafoam}"
    textColor: "{colors.cypress}"
  closing-field:
    backgroundColor: "{colors.cypress}"
    textColor: "{colors.on-dark}"
  dropdown:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.frame}"
    padding: "8px"
---

# Design System: INALA Centro de Psicoterapia

## Overview

**Creative North Star: "The Quiet Practice"**

The site is the arrangement a visitor already expects from a psychology practice: who she is, what she treats, how it works, what it costs, how to ask. Its distinction is finish, not novelty; the quality bar is premium wellness products (Headspace, Calm) for polish, never for their look. Cool paper and pure white grounds carry near-black green ink; the logo's seafoam is the recognisable brand note; deep teal marks every action; one deep cypress field closes every page.

Content is separated by hairline rules and generous whitespace, not by cards. Photographs sit in one consistent rounded frame. Headlines are set in Gambetta at regular weight, text and interface in Synonym. Motion is one calm, authored hero entrance per page and quiet one-shot reveals of figures below the fold, transform and opacity only, reduced to short fades when the visitor asks for less motion.

The world rejects, by the owner's choice: glassmorphism, decorative gradients, blurred blobs, heavy shadows, and walls of rounded icon-tile cards (the incumbent mint wash it replaces).

**Key Characteristics:**
- Cool paper, white and mist grounds; one cypress field that closes each page.
- Gambetta headlines at weight 400; Synonym for everything else.
- Hairline rules and whitespace instead of cards.
- Pill buttons in deep teal for every action.
- One rounded photo frame for all imagery.
- Numerals for steps the reader follows in order.
- One authored hero entrance; everything else is still.

## Colors

A cool, low-chroma green-grey world with one brand seafoam, one action teal and one deep cypress closing field. Tailwind's default palette is cleared (`--color-*: initial`): only these tokens exist.

### Primary
- **Practice Teal** (teal): every action. Primary buttons, links, focus rings, step numerals, list markers, caret, the selected state of form choices. White on it reads at 6.5:1.
- **Deep Practice Teal** (teal-strong): hover and pressed state of teal actions and links.

### Secondary
- **Logo Seafoam** (seafoam): the logo's own colour. Fills and accents only: the active-nav underline, short hairline dashes before quotes and closing notes, the inverse button on cypress, icons and headings in the footer, the focus ring on dark grounds (5.9:1 on cypress).
- **Seafoam Wash** (seafoam-soft): text selection, the inverse button's hover.

### Tertiary
- **Cypress Field** (cypress): the field that closes every page: the final call to action, the "Otros servicios" band on service pages and the footer, plus the crisis note on Contacto. White on cypress is 11.6:1.
- **Cypress Rule** (cypress-line): hairlines and outline-button borders on the cypress field.

### Neutral
- **Cool Paper** (paper): the page ground, the sticky header and the hero; also the browser theme colour.
- **White** (white): alternating section ground, form fields, secondary buttons, the services dropdown.
- **Mist** (mist): the third section tone, empty image frames, table headers, hover fill in menus, the open FAQ toggle.
- **Hairline** (line): every rule that separates content: section lists, FAQ rows, fact rows, header border.
- **Strong Hairline** (line-strong): field and outline-button borders, quote rules, the scrollbar.
- **Green Ink** (ink): headings and primary text.
- **Muted Ink** (ink-muted): intros, lead paragraphs, body copy in lists, subtitles.
- **Soft Ink** (ink-soft): tertiary notes, placeholders, breadcrumb separators.
- **On Dark** (on-dark) and **On Dark Muted** (on-dark-muted): primary and secondary text on cypress.
- **Error** (error) and **Error Wash** (error-soft): invalid form fields only (border and fill).

### Named Rules
**The Seafoam Is Not Text Rule.** Seafoam is never text on paper, white or mist; it is a fill, a hairline or an accent. On the cypress field it may be text (headings, subtitles, the focus ring).

**The One Action Colour Rule.** Every clickable action on a light ground is teal. Nothing else is teal-filled.

**The Closing Field Rule.** Cypress appears once per page, at the end: the final call to action, then (on service pages) the other services, then the footer, as one continuous dark field.

## Typography

**Display Font:** Gambetta (with Georgia, serif), variable 300 to 700, roman and italic, self-hosted.
**Body Font:** Synonym (with system-ui, sans-serif), variable 200 to 700, self-hosted.

**Character:** A literary serif with soft, open curves for anything María says to the visitor at heading size; a calm, humanist sans for reading and interface. Both load through Astro's font API with `font-display: swap`.

### Hierarchy
- **Display** (Gambetta 400, clamp 2.5 to 4.25rem, 1.04, -0.02em): the home h1 and the step numerals of the method.
- **Title** (Gambetta 400, clamp 2.25 to 3.5rem, 1.08, -0.018em): the h1 of every other page.
- **Heading** (Gambetta 400, clamp 1.875 to 2.75rem, 1.12, -0.012em): section h2s, the closing call to action, large quotes.
- **Subheading** (Gambetta 400, clamp 1.375 to 1.75rem, 1.3): service names, topic rows, quotes, closing notes, subtitles under headings, mobile menu links, h2 in long-form prose.
- **Lead** (Synonym 400, clamp 1.125 to 1.25rem, 1.6): intro paragraphs and section intros; Synonym 600 for FAQ questions and short list titles.
- **Body** (Synonym 400, 1.0625rem, 1.65): running text. Long-form prose (blog, legal) is 1.125rem at 1.75 inside a reading column.
- **Small** (Synonym 400 to 600, 0.9375rem, 1.55): buttons (600), navigation (500), notes, footer text.
- **Label** (Synonym 600, 0.8125rem, 1.4, +0.01em): breadcrumbs, captions, durations and prices, footer column headings. Sentence case.

Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`; tables and prices use tabular numerals. The emphasised run of the home h1 is coloured teal, never italicised.

### Named Rules
**The Subtitle, Not Eyebrow Rule.** A short label kept from the content renders as a Gambetta subtitle under its heading (muted ink on light grounds, seafoam on cypress), never as a small label above it. A label the heading already contains renders as a small body caption in soft ink. A label typed in capitals in the content stays in capitals, set one size smaller (lead instead of subheading).

**The Regular Weight Rule.** Gambetta headings stay at weight 400. Hierarchy comes from size, not weight.

## Layout

A 12-column grid inside a 75rem content container (48rem narrow, 35rem reading), with side gutters of 20px, 32px from `sm` and 40px from `lg`. An extra `xs` breakpoint at 22.5rem covers the narrowest phones (reflow at 320px).

- **Hero:** copy on 7 columns, image on 5 at `lg`; stacked, copy first, on smaller screens with full-width actions. Pages without an image use a single left column up to 48rem. Breadcrumbs sit above the hero on inner pages.
- **Section header:** "split" sets the heading on 7 columns and its intro on 5, aligned to the baseline; "stack" uses one column.
- **Sections** alternate paper, white and mist grounds with 80px vertical padding (112px at `lg`); tight bands use 48px (64px).
- **Lists** run as columns of short entries (1 to 3) or as rows with the heading on 5 columns beside its text on 7, each item opened by a hairline.
- The sticky header is 72px tall; `scroll-padding-top` is 6rem so focused elements and anchors clear it.

**The Rules Not Boxes Rule.** Groups of content are separated by a 1px hairline and whitespace. A topic, service or step is never a filled or shadowed card.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (paper, white, mist, then the cypress field) and hairlines. One soft shadow exists, for panels that float over content.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 1px 2px rgb(21 33 31 / 0.05), 0 12px 32px -12px rgb(21 33 31 / 0.18)`): the desktop services dropdown and the open mobile menu panel. Nothing else.

**The Only Floats Float Rule.** A shadow means the element sits above the page. Static content never carries one.

## Shapes

Three radii and a pill. Photographs and floating panels use the frame radius (20px); fields, form choices and menu items the field radius (12px); buttons, chips, icon buttons and the FAQ toggle are fully round. Focus rings draw a 2px teal outline at 3px offset with a 4px corner. Hairlines are 1px; the active navigation underline is a 2px rounded seafoam bar.

**The One Frame Rule.** Every photograph and illustration sits in the same frame: 20px radius, clipped, with a mist ground while loading, in one of five fixed ratios (4:5 portrait, 3:4 tall, 4:3 landscape, 16:10 wide, square). Imagery is never borderless, tilted or masked into other shapes. Only María's small portrait on Contacto is a circle.

## Components

### Buttons
Calm, round and unmistakable.
- **Shape:** fully round pill, at least 48px tall (44px in the header), 24px horizontal padding, Synonym 600 small.
- **Primary:** teal fill, white text; hover deepens to teal-strong. Optional trailing arrow that nudges 2px forward on fine-pointer hover; optional leading icon for channels (mail, chat, map).
- **Secondary:** white fill, strong-hairline border, ink text; hover turns border and text teal.
- **Inverse (on cypress):** seafoam fill, cypress text; hover seafoam-soft. **Inverse outline:** cypress-line border, on-dark text; hover seafoam border.
- **Press:** scales to 0.97 over 150ms (ease-out), not under reduced motion. Colour changes use the default `ease`. No `transition: all`.

### Chips
- **Style:** the "Otros servicios" band on cypress: pill links, 44px tall, cypress-line border, on-dark text, hover seafoam border.
- **State:** the current service is seafoam-filled with cypress text and `aria-current="page"`.

### Cards / Containers
There are no cards. Containers are sections on tonal grounds, the one photo frame, and the closing cypress field. The only filled boxes are functional notes: the crisis note on cypress and the form confirmation on mist, both with the frame or field radius and no shadow.

### Inputs / Fields
- **Style:** white fill, 1px strong-hairline border, 12px radius, 48px minimum height, body text; labels above in Synonym 600 small ink; placeholders soft ink; teal caret.
- **Hover / Focus:** hover darkens the border to soft ink; focus sets a teal border with the teal ring drawn flush (offset 0).
- **Error:** after user interaction only (`:user-invalid`), error border on an error-soft fill.
- **Choice groups:** visually hidden radios drawn as field-radius tiles; selected is teal-filled with white text; the focus ring is drawn on the tile.

### Navigation
- **Desktop header:** sticky, paper ground with a bottom hairline. Logo lockup (logo, "INALA" in Gambetta, "Centro de Psicoterapia" as the wordmark's small uppercase line), five links in Synonym 500 small, muted ink, ink on hover; the current page carries a 2px seafoam underline. "Servicios" opens a white floating dropdown (frame radius, float shadow) on hover or focus, fading and scaling from 0.97 over 200ms; Escape dismisses it. A primary "Solicitar cita" pill sits at the right.
- **Mobile:** a "Menú" pill toggle (native `<details>`) opens a full-width paper panel under the header, entering over 250ms with `@starting-style`; links in Gambetta subheading, services nested beneath in body size, the primary action full width at the end. Escape closes it and returns focus.
- **Breadcrumbs:** label size, muted ink, slash separators, current page in ink 600.
- **Footer:** the cypress field continued: logo, a short description, columns headed in seafoam label type, links in on-dark-muted turning white on hover, round outline icon links, the crisis notice above the legal row.

### Fact Row
Up to three short facts (duration, place, licence) in a hairline-topped row under the hero actions: a teal icon, a Synonym 600 small title with tabular numerals, an optional label-size subtitle.

### Topic List
The editorial replacement for icon cards: hairline-ruled entries in 1 to 3 columns, or rows with a Gambetta heading beside its text. Numbered only for sequences read in order: teal Gambetta numerals, inline or at display size above each step, two-digit or plain as the content had them.

### Quote and Closing Note
Quotes are Gambetta in ink (subheading or heading size) with a citation in teal small 600 behind a short seafoam dash. A closing note ends a section with one reassuring sentence in Gambetta subheading after a 40px seafoam dash on a hairline.

### FAQ
Native `<details>` rows between hairlines; the question in Synonym 600 lead, a round outline toggle with a teal plus that rotates 45 degrees onto a mist fill when open. Answers open with a 200ms height transition (`::details-content`) where supported, and are always in the HTML.

### Iconography
One family: Material Symbols Outlined (weight 400, grade 0, optical size 24, Apache-2.0), paths copied unmodified into `src/components/ui/icons.ts` and rendered inline at 1.25em in `currentColor`, always `aria-hidden`. No other icon set and no hand-drawn paths.

### Motion
- **Hero entrance (the one authored moment):** hero copy rises 14px and fades in over 700ms on the strong ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`), each child 80ms after the last; the hero image settles from 18px and 0.985 scale over 900ms, 120ms in.
- **Figure reveals:** figures still below the fold at load rise 18px and fade in once over 800ms when they enter view, staggered 70ms within a group. Content is visible without the script.
- **On-screen movement** uses ease-in-out (`cubic-bezier(0.77, 0, 0.175, 1)`); state colour changes use `ease` at 200ms.
- **Reduced motion:** hero elements keep a 200ms fade only; reveals, rotations, presses and menu offsets are removed.

### Imagery
- **Real photographs:** María Sánchez (maria1 to maria5; maria3 to maria5 restored from the main branch so no page repeats a photo) and the practice (oficina).
- **Pre-existing assets of undocumented origin:** the home hero and method illustrations and the five therapy-scene photos (individual, couple, family x2, parental, online). They look generated; the owner has not confirmed their origin. They were kept unchanged, with their alt text, at the owner's request.
- **Blog images** come with their posts.
- **Brand:** `src/assets/brand/logo.webp` is the logo; `public/apple-touch-icon.png` and `favicon.ico` were derived from it in this redesign.
- All rasters render through `astro:assets` as AVIF and WebP at responsive widths, never upscaled; only the hero image loads eagerly.

## Do's and Don'ts

### Do:
- **Do** use teal (#24695b) for every action on light grounds and teal-strong for its hover.
- **Do** separate content with 1px hairlines and whitespace, alternating paper, white and mist sections.
- **Do** set short content labels as Gambetta subtitles under their heading; keep labels typed in capitals in capitals, one size smaller.
- **Do** close every page on the cypress field: final call to action, other services where relevant, footer.
- **Do** put every image in the one frame (20px radius) at one of the five ratios.
- **Do** number only sequences the reader follows in order, in teal Gambetta numerals.
- **Do** keep motion to transform and opacity, and give every animation a reduced-motion fallback.
- **Do** keep all copy the site's original text; mark any gap as `[PENDIENTE: ...]`.

### Don't:
- **Don't** set seafoam (#7cc6c4) as text on paper, white or mist.
- **Don't** put a small label or kicker above a heading.
- **Don't** build grids of rounded icon-tile cards, or give static content a shadow.
- **Don't** use glassmorphism, decorative gradients, blurred blobs or heavy shadows.
- **Don't** italicise headings for emphasis; colour the run teal instead.
- **Don't** add a second icon family, hand-drawn icon paths or Tailwind default colours.
- **Don't** add motion beyond the hero entrance and figure reveals, or animate layout properties.
