---
name: seo-optimizer
description: Optimize search visibility for websites and content. Use when working on technical SEO audits, metadata, structured data, keyword mapping, internal linking, crawlability, indexation, title and meta description improvements, blog SEO, Core Web Vitals changes with SEO intent, sitemap or robots reviews, or broader ranking and organic traffic improvements.
---

# SEO Optimizer

Use this skill to turn an SEO request into a concrete implementation plan, targeted edits, and validation notes.

## Work Sequence

1. Classify the request.
2. Inspect the affected pages, layouts, components, content collections, and config before changing anything.
3. Identify the SEO surface involved:
   - metadata and headings
   - canonical, robots, sitemap, and indexation
   - structured data
   - internal linking and information architecture
   - content quality, intent match, and keyword coverage
   - performance issues with SEO impact
4. Make the smallest effective change that improves search visibility without breaking the site structure or content workflow.
5. Validate the outcome and report residual risks.

## Audit Checklist

Check only the parts relevant to the task:

- Search intent: confirm the page matches the likely user intent and business goal.
- Keyword targeting: confirm one primary topic per page and avoid obvious overlap with nearby pages.
- SERP snippets: review title, meta description, canonical URL, and social preview fields when present.
- Heading structure: keep one clear `h1` and a sensible `h2`/`h3` hierarchy.
- Indexation: confirm robots directives, canonical behavior, sitemap presence, and duplicate-path handling.
- Internal linking: strengthen links from related pages using natural anchor text.
- Structured data: use the narrowest valid schema type that matches the page content.
- Content quality: prefer specific, useful, non-generic copy with clear expertise signals.
- Performance: flag render-blocking assets, oversized media, and layout instability when they affect SEO intent.

## Implementation Rules

- Preserve the existing framework and content model unless the SEO gain clearly requires broader changes.
- Prefer updating shared SEO primitives before duplicating metadata logic page by page.
- Keep copy in the site language unless the task explicitly calls for another language.
- Do not add schema markup that overstates facts or content that is not visible on the page.
- Do not create doorway pages, keyword-stuffed copy, or duplicate near-empty pages.
- For local-business or professional-service pages, prioritize clarity, trust, and specific service/location relevance over broad keyword stuffing.

## Common Patterns

### Metadata work

- Write concise, distinct titles with the primary topic near the front.
- Write meta descriptions for click-through value first, then keyword inclusion.
- Keep canonical URLs absolute and aligned with the preferred public route.

### Content optimization

- Improve the intro, heading structure, and internal links before adding large amounts of copy.
- Remove repetitive phrasing and merge overlapping sections when the page dilutes intent.
- Support claims with concrete service details, process, audience, or outcomes.

### Structured data

- Start from the page type, then map to the simplest valid schema.
- Ensure required properties are derived from real page data.
- Keep schema generation centralized when multiple routes share the same pattern.

### Technical SEO

- Check whether routing, pagination, dynamic paths, and canonical generation can create duplicates.
- Review sitemap and robots behavior when adding or removing content types.
- Treat performance changes as SEO work only when they affect crawlability, rendering, or user experience signals.

## Validation

After editing, validate the smallest set that proves the change:

- Build the site when routes, content, config, layout logic, or structured data changed.
- Inspect rendered HTML for title, meta tags, canonical, robots, headings, and schema output when relevant.
- Note any assumptions, especially around target keywords, preferred URLs, or indexation strategy.

## Deliverable Shape

Report back with:

- what changed
- why it improves SEO
- what you validated
- any open questions or follow-up opportunities
