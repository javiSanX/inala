# Inala Repository Guide

This repository is a content-driven Astro site for `inala.es`, focused on a psychology practice website with service pages, blog content, analytics, and a contact flow.

## Project Snapshot

- Framework: Astro 5
- Runtime: Node.js 20+
- Styling: Tailwind CSS 4 via Vite
- UI mix: mostly `.astro` components with React enabled
- Content: Astro content collections plus Keystatic CMS
- Deployment target: Vercel static output

Key references:
- `package.json`
- `astro.config.mjs`
- `keystatic.config.ts`
- `src/content.config.ts`

## Main Areas

- `src/pages`: route entry points for the website
- `src/layouts`: shared page shells and SEO/meta handling
- `src/components`: UI and page-building blocks
- `src/content/blog`: editorial content
- `src/content/work`: portfolio-style content collection
- `src/actions`: Astro server actions
- `src/services`: service-layer logic, including email
- `public`: static assets
- `.claude/agents` and `.claude/skills`: local Claude-specific agent and skill definitions

## Likely Entry Points

- Homepage: `src/pages/index.astro`
- Global layout and metadata: `src/layouts/Layout.astro`
- Blog routes: `src/pages/blog/[...page].astro` and `src/pages/blog/[...id].astro`
- Contact flow: `src/actions/index.ts`
- Email transport: `src/services/email.ts`

## Commands

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Production build: `pnpm build`
- Preview build: `pnpm preview`
- Formatting: `pnpm format`

There is currently no dedicated `test` or `lint` script in `package.json`.

## Working Conventions

- Prefer minimal, targeted edits over broad refactors.
- Preserve the existing Astro-first structure unless a change clearly requires React.
- Keep copy and metadata in Spanish unless the task explicitly calls for another language.
- Reuse the shared layout and existing UI primitives before introducing new abstractions.
- Treat content collections and Keystatic schema as coupled systems; when one changes, verify the other still matches.

## Important Constraints

- The site is configured with `output: 'static'` and `@astrojs/vercel/static`.
- The repo also contains Astro server actions for contact form handling.
- Before changing contact or backend-like behavior, verify that the intended deployment model still supports it.

## Risk Areas

### Contact and email flow

- `src/actions/index.ts` handles form submissions.
- `src/services/email.ts` uses Nodemailer and environment-backed SMTP credentials.
- Changes here can affect production lead capture.

### SEO and structured metadata

- `src/layouts/Layout.astro` centralizes canonical tags, OG tags, and JSON-LD.
- Small edits here have site-wide impact.

### Content schema

- `src/content.config.ts` defines Astro collection validation.
- `keystatic.config.ts` defines CMS editing structure.
- Keep them aligned to avoid broken content editing or build failures.

### Analytics and consent

- `src/config/analytics.ts` and `src/components/custom/CookieBanner.astro` affect tracking behavior.
- The layout uses Partytown and consent-mode related scripts; avoid casual edits here.

## Before Making Changes

1. Check whether the work touches routing, schema, SEO metadata, or contact handling.
2. Read the nearest layout/component/schema file before editing.
3. Validate with `pnpm build` when changes affect routes, content, or config.

## Notes For Future Agents

- The `README.md` is still the default Astro starter and is not a reliable source of project-specific guidance.
- There are stray `.DS_Store` files in the repo; ignore them unless cleanup is explicitly requested.
- `.claude/agents/seo-specialist.md` and `.claude/skills/seo-optimizer/SKILL.md` are custom workflow assets, not app runtime code.

## Task Routing

When a task is primarily about SEO, search visibility, metadata, structured data, keyword strategy, content optimization, internal linking, crawlability, indexation, or ranking improvements:

- First use `.claude/skills/seo-optimizer/SKILL.md` as the default workflow.
- If the task is broad, strategic, or requires a dedicated specialist, delegate to `.claude/agents/seo-specialist.md`.
- For complex SEO tasks, use both:
  - use the skill for execution standards and checklist
  - use the agent for specialist reasoning and planning

Examples of SEO-triggering tasks:
- technical SEO audit
- title/meta description optimization
- schema markup changes
- sitemap/robots review
- blog SEO improvements
- keyword mapping
- internal linking strategy
- Core Web Vitals changes with SEO intent
