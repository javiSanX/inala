---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/servicios/index.astro","src/pages/servicios/terapia-individual.astro","src/pages/servicios/terapia-de-pareja.astro","src/pages/servicios/terapia-familiar.astro","src/pages/servicios/psicologia-parental.astro","src/pages/servicios/terapia-online.astro","src/pages/nuestro-metodo.astro","src/pages/sobre-mi.astro","src/pages/tarifas.astro","src/pages/contacto.astro","src/pages/blog.astro","src/pages/blog/[id].astro","src/pages/aviso-legal-y-politica-de-cookies.astro","src/pages/política-de-privacidad.astro","src/layouts/Layout.astro","src/components/Header.astro","src/components/Footer.astro"]
---

# Surface brief: inala.es (whole site redesign)

## Scope and mode

Every existing route (21, the web2 baseline) plus a new 404 page and redirects for main's legacy URLs. Home, services, Tarifas and Contacto are Persuade; blog posts and the legal pages are Read; the blog index is Read.

## Job

A person who is struggling, often looking for a psychologist for the first time, has to understand who María is, what she works on, how the process goes and what it costs, and then request a first appointment («Solicitar primera cita», a request, not a booking) or keep reading the blog. Findability through the blog is the owner's measure of success.

## Constraints from the user (this redesign)

- Every route, slug and literal text stays. Presentation can change; content cannot. The only text changes are the alt texts of the María photos that are swapped (below) and the minimal UI copy a new 404 and a skip link need.
- Brand colour stays: the logo's seafoam (#7CC6C6 to #A8DCC8) and the deep teal already in use.
- Images stay where they are, generated scenes included, with their current alt. Repeated photos of María are swapped for maria3 to maria5 from main so no page repeats a photo.
- No glassmorphism, decorative gradients, blur blobs, heavy shadows or a wall of rounded icon cards.
- Quality bar chosen by the user: premium wellness products (Headspace, Calm), for finish and polish, not for their look.

## Direction contract

THESIS: The psychology-practice site the visitor already expects (who she is, what she treats, how it works, what it costs, how to ask) executed at premium-wellness finish. It refuses the incumbent mint wash with icon-tile card grids and the AI therapy template of glass panels, blurred blobs and italic serif accents.

OWN-WORLD: Cool paper white and pure white grounds; near-black green ink; the logo seafoam as the recognisable brand note; deep teal for every action; one deep cypress field that closes each page (final call to action and footer). Gambetta for headlines, Synonym for text and UI. Hairline rules and generous whitespace separate content instead of cards; photographs sit in one consistent frame; pill-shaped buttons; numerals for steps.

STORY: The visitor meets María (her words, her face, her licence number), sees the four services and that every one can be in Pamplona or online, understands the three steps and the price of a first session, and requests a first appointment without pressure. On a service page the same order repeats for that service; on the blog they read comfortably and find a quiet way to ask for help.

FIRST VIEWPORT: Home at 1280: header with logo, five links and «Solicitar cita». Left 7 columns: kicker «Psicoterapia en Pamplona y online», h1 at about 64px in Gambetta, intro paragraph at about 19px, primary «Solicitar primera cita» in deep teal and secondary «Ver servicios y tarifas», then the three facts in a hairline-ruled row. Right 5 columns: the existing hero illustration in a tall frame. At 375 the copy stacks first, both actions are full width and visible above the fold, the illustration follows.

FORM: The category standard (canon), chosen by the user from the direction round; not on the ordered list. Seed key 52869ee1. Signature interaction: a calm, staggered entrance of each hero and one-shot reveals of section headings and images, transform and opacity only, removed under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions

Pending the user's approval of the implementation plan: font and icon files (one-time downloads), moving images to src/assets for optimisation, astro.config changes (fonts, redirects, sitemap filter), structured data and og:image, the favicon, the 404 copy.
