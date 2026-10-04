# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Spanish-speaking adults in Pamplona (Navarra) and anywhere in Spain (online sessions) who are considering therapy, often for the first time and often while going through something hard: anxiety, stress, grief, low self-esteem, relationship or family conflict, pregnancy, postpartum, fertility or gestational loss. Also parents looking for help for a child or adolescent, and couples or families deciding together. They arrive uncertain and need to feel safe, understood and clear about the next step before they reach out.

## Product Purpose

Website of **Inala**, a general health psychology practice (psicología general sanitaria). It explains how therapy works at Inala, presents the services and prices, introduces the psychologist, and turns a hesitant visitor into a first contact. Success means a visitor books a first session through the contact form or WhatsApp.

## Positioning

Inala is branded as a *centro de psicoterapia*, but today one professional attends: **María Sánchez Cobos**, psicóloga sanitaria (colegiada 02300, Colegio Oficial de Psicología de Navarra), specialised in family and couple therapy and in perinatal mental health. Her path started in the corporate world, then clinical psychology, child-protection work (complex trauma, early-childhood grief) and perinatal training; she is a mother. The approach is integrative, close and evidence-based, in person in Pamplona or online.

Design must balance the "centro" brand with the reality of one person: present María honestly as the person behind Inala; never imply a team that does not exist.

## Operating Context

- Practice address: Maria Lacunza 6, portal 4, Pamplona, inside the Yssana centre ("Nos encontramos en centro Yssana").
- Sessions: 60 minutes, in person or online (videoconference).
- Services: terapia individual (adults, adolescents, children), terapia de pareja, terapia familiar, psicología perinatal, terapia online.
- Prices (from `main`): individual or online session 65 €; couple or family session 75 €.
- Contact: form on `/contacto` plus WhatsApp / phone +34 623 050 773 and email hola@inala.es.

## Capabilities and Constraints

- Static Astro site; no backend yet. The contact form has no submission backend (open decision).
- Primary contact path: the form, with WhatsApp and phone highly visible as the immediate alternative.
- Blog exists in the old site but is out of scope for now; nav keeps a link to `/blog`.
- Cookie banner and analytics are not ported (open decision); the cookie policy text still describes Google Analytics.
- Open data inconsistencies inherited from `main`: postcode 31011 vs 31006, email hola@inala.es vs inalapsicologia@gmail.com, colegiada "02300" vs "NA-02300".

## Brand Commitments

- Name: Inala. Spanish (es-ES) only.
- Logo: watercolour teal/aqua spiral held in a hand-like shape (`main:public/logo-light.webp`, `logo-dark.webp`, 500×500 raster). Binding brand asset.
- Voice: calm, warm, close, respectful; never clinical-cold, never salesy. Copy is taken from `main`; do not rewrite it without approval.

## Evidence on Hand

- Real photos of María: `main:public/assets/images/maria1.webp` … `maria5.webp` (portraits; 1 and 2 seated and relaxed, 3–5 standing against a light wall).
- Real photo of the consulting room: `main:public/assets/images/oficina.webp`.
- Yssana centre logo: `main:public/assets/images/yssana.webp`.
- Stock photos and clip-art illustrations in `main` are **not** to be used.
- No testimonials, reviews, statistics, awards or press exist. Do not fabricate any.

## Product Principles

1. Safety before persuasion: the visitor must feel calm and respected before being asked to act.
2. Honesty about who they will meet: one real person, real photos, real credentials, real prices.
3. Always one clear, low-pressure next step: book a first session by form or WhatsApp.
4. Clarity over cleverness: plain structure, readable text, no friction for someone who is struggling.

## Accessibility & Inclusion

WCAG 2.2 AA is the floor (see `CLAUDE.md`). Visitors may be anxious, tired or distressed: favour generous reading comfort, predictable navigation, no surprising motion, full `prefers-reduced-motion` support, and large tap targets on mobile.
