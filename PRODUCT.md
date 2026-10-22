# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People looking for psychological therapy in Spanish, with no single priority audience: adults (anxiety, stress, low mood, grief, self-esteem), couples, families, and mothers and fathers who need support with parenting. Sessions are for children, adolescents and adults. Visitors come from Pamplona (in-person) and from anywhere else via online sessions, and both reaches count the same.

Typical situation: someone (or their family) who is struggling, often looking for a psychologist for the first time. They want to understand who María is, whether she can help with their problem, how the process works and what it costs, before they decide to get in touch.

## Product Purpose

inala.es is the website of INALA Centro de Psicoterapia, the practice of María Sánchez, a general health psychologist (Nº col. NA-02300). It explains the services, the method, the fees and the professional, and lets people request a first appointment.

Success, as the owner defines it: blog traffic and search visibility (SEO). The site has to be findable for its topics and services in Pamplona and online. First-appointment requests and credibility follow from that, but they are not the stated measure.

## Positioning

What sets María apart (confirmed):

- Specialised training in family and couple therapy.
- Training in perinatal mental health, plus experience with children (child protection, complex trauma and grief in early childhood).
- A previous career in business: first-hand knowledge of stress, pressure and self-demand at work.

Approach: integrative and evidence-based, with a trusting, non-judgemental relationship and practical tools from the first sessions.

## Operating Context

- In-person sessions at Centro Yssana, C/ María Lacunza 6, portal 4, 31011 Pamplona. Online sessions by video call, available for every service: online is a modality, not a separate service.
- Contact: a form (it opens the visitor's email app; it does not send anything by itself), WhatsApp (+34 623 050 773), email (hola@inala.es) and Instagram (@inala_psicoterapia).
- Main action everywhere: «Solicitar primera cita». It is a request, not a booking: María replies to agree on day, time and modality.
- There is a blog with articles on anxiety, burnout, couples therapy and similar topics (`src/content/blog/`).

## Capabilities and Constraints

- Services: Terapia Individual (65 €, 60 min), Terapia de Pareja (75 €, 60 min), Terapia Familiar (75 €, 60 min), Psicología Perinatal (price and duration undecided: `[PENDIENTE]`). The single source is `src/data/site.ts`.
- No booking system, payments or patient area. The form only prepares an email.
- The practice does not handle emergencies. The crisis notice (024 / 112) has to stay visible wherever it matters.
- Mental-health domain: never invent claims, credentials, results, statistics, testimonials or prices. Mark any gap as `[PENDIENTE: ...]`.
- Undecided: the universities and centres of her training, the usual reply time, the price and duration of Psicología Perinatal.
- All user-facing copy is in Spanish (es-ES), including slugs, titles and alt text.

## Brand Commitments

- Name: INALA (Centro de Psicoterapia). The logo and the identity are fixed: `public/logo-light.webp`, `logo-dark.webp` on main, `src/icons/logo.svg` on main. The favicon (`public/favicon.ico`) and `public/apple-touch-icon.png` are derived from the logo (the old `favicon.svg` was Astro's default mark and was removed).
- Voice: first person (María speaks) and informal «tú» with the visitor. Calm, warm, close, trustworthy and accessible, never flashy or salesy.
- Visual direction (chosen by the owner, 2026-10-20): the category standard for a psychology practice, the arrangement visitors already expect, executed at the craft level of premium wellness products (Headspace, Calm). No conceptual metaphor or novelty world. Brand colour is the logo's seafoam plus the deep teal already in use.

## Evidence on Hand

- Real photos of María: `public/maria1.webp`, `public/maria2.webp`; more on main (`public/assets/images/maria1-5.webp`).
- Real photos of the practice: `public/oficina.webp`; `public/assets/images/yssana.webp` on main.
- Real credentials: licence number NA-02300, degree in Psychology (clinical track), Máster en Psicología General Sanitaria, specialisation in family and couple therapy.
- Blog articles with their own images (`src/assets/blog/`).
- **None:** no testimonials or reviews, no outcome statistics, no press. Do not fabricate them.

## Product Principles

1. **Truth before persuasion.** Every claim, credential and price is real and verifiable. A visible gap is better than an invented one.
2. **Calm reduces the barrier.** The visitor may be struggling: clarity, warmth and no pressure. Easy to understand what happens next.
3. **Findable and readable.** Content is written and structured to be found in search (services, Pamplona, online, the blog topics) and to read well.
4. **A real person, not a brand.** María's voice, face and practice carry the trust.
5. **Safety first.** The crisis notice and the limits of the practice are never hidden.

## Accessibility & Inclusion

WCAG 2.2 AA as a hard floor. Visitors may be anxious or in a fragile emotional state: plain language, no aggressive motion (respect `prefers-reduced-motion`), and content readable without JavaScript.
