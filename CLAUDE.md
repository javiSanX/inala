# Inala

Website for **inala.es**, a psychology / therapy practice for a Spanish-speaking audience.

- Branch `newWeb` is a **from-scratch rebuild**. Right now it is an Astro starter (`Layout.astro`, `index.astro`, a placeholder `Welcome.astro`). There is no visual identity to preserve yet, and there is no `PRODUCT.md` or `DESIGN.md`.
- Branch `main` holds the previous production site (Astro 5 + Keystatic + React + Vercel + pnpm). It is the **source of truth for content**: copy, service pages, prices (`src/pages/tarifas.astro`), blog posts (`src/content/blog/`) and images. Read it with `git show main:<path>` and `git ls-tree -r --name-only main`. Port its content, not its stack or components.

## Stack

- **Astro 7**: static output, no adapter yet, `.astro` components, zero client JS by default. `site` is `https://inala.es`.
- **`@astrojs/sitemap`** generates `sitemap-index.xml` at build time from `site`. Pages with `noindex` should be filtered out of it.
- **`@vitejs/plugin-basic-ssl`**: the dev server runs on **HTTPS with a self-signed certificate**. Use `https://localhost:4321`, and `curl -k` when checking it from the shell.
- **Tailwind CSS 4** via `@tailwindcss/vite`. Config is CSS-first in `src/styles/global.css` (`@import "tailwindcss"` plus design tokens in `@theme`). There is no `tailwind.config.js`; don't create one.
- **TypeScript strict** (`astro/tsconfigs/strict`).
- **Bun 1.3** as package manager and script runner (`bun.lock`). Node >= 22.12.
- **Biome 2.5** for formatting and linting (tabs, double quotes, organize imports). No ESLint, no Prettier.
- No test runner, React, CMS, analytics or deploy adapter yet. Adding any of them is the user's decision: **ask first**.

## Commands

| Task | Command |
| --- | --- |
| Install | `bun install` |
| Add dependency | `bun add <pkg>` / `bun add -d <pkg>` (only after the user agrees) |
| Dev server (agents) | `bun astro dev --background`, then `bun astro dev status`, `bun astro dev logs`, `bun astro dev stop` |
| Build | `bun run build` |
| Preview build | `bun run preview` |
| Format + lint | `bun run check` (Biome; `biome.json` excludes `.agents/`, `.claude/` and `.impeccable/`) |
| Type check | `bun run typecheck` (`astro check`; needs TypeScript 6, it does not support TypeScript 7 yet) |

Always start the dev server in background mode. Never leave a foreground dev server blocking the session.

## Conventions

- **Language:** everything users see is in Spanish (es-ES): copy, `<title>`, meta descriptions, `alt` text and URL slugs. Set `<html lang="es">` (the starter still has `en`; fix it when you touch `Layout.astro`). Code identifiers and code comments are in English.
- **Astro-first:** use `.astro` components and native `<script>` for small bits of interactivity. Add a framework island only when it is clearly needed and the user agrees.
- **Structure:**
  - `src/pages`: routes.
  - `src/layouts`: page shells. One base `Layout` takes SEO props.
  - `src/components`: UI primitives and page sections.
  - `src/content` and `src/content.config.ts`: content collections (blog).
  - `src/assets`: images rendered through `astro:assets` (`<Image>` / `<Picture>`).
  - `public/`: only files that need a fixed URL (favicon, `robots.txt`).
- **Styling:** use Tailwind utilities. Define design tokens (colors, fonts, radii, easing) once in `@theme` in `global.css`. Don't hard-code hex values or use scattered arbitrary values in components. Never use `transition: all`.
- **Formatting belongs to Biome:** tabs and double quotes. Ignore the code style in skill examples (2 spaces, single quotes, `npx`).
- **Keep edits small and targeted.** Reuse the layout and existing components before adding new abstractions.
- **Sensitive domain (mental health):** never invent claims, credentials, testimonials, prices, statistics or results. Take content from `main` or ask the user, and mark any placeholder clearly (`[PENDIENTE: ...]`). The tone is calm, warm, trustworthy and accessible, not flashy. Bold or experimental visual pushes (`bolder`, `overdrive`) need an explicit request.

## Development workflow

Follow these steps for every task. Scale the effort to the size of the task, but don't skip step 5.

1. **Understand.** Read the files involved. When porting a page or content, read the `main` version first. For anything non-trivial, restate the goal in one line.
2. **Select skills.** Use the routing table in *Skills usage* and load the owner skill **before** writing code, not afterwards to justify it.
3. **Plan.** For multi-file changes, new pages or sections, new dependencies, or architecture and design-direction changes, give a short plan. Wait for the user's OK when the plan adds a dependency, changes the architecture or redesigns something.
4. **Implement.** Work in small steps and follow the conventions above. When a skill snippet and project config disagree, see *Priority rules*.
5. **Verify.** This step is required before saying a task is done:
   - `bun run check` and `bun run typecheck` pass.
   - `bun run build` succeeds, with no new warnings.
   - For UI changes: run the dev server in background and check desktop and mobile (375 px), keyboard navigation and focus, `prefers-reduced-motion`, and contrast.
   - Deal with every impeccable hook finding (raised after Edit/Write and on Stop): fix it, or explain why it doesn't apply.
6. **Review.** After significant UI work, run an impeccable `polish` or `audit` on the surface you touched. For pages that matter for search, run the `seo` checklist. For motion, suggest `/review-animations` to the user.
7. **Report.** Say what changed, how you verified it, and what you did not verify. Commit only when the user asks, and never push. Commit messages are short, lowercase and imperative (for example `add services page`), matching the history.

## Skills usage

Use skills according to the task. Load only the skills that apply: a one-line copy fix doesn't need three design skills. Skills live in `.agents/skills/` (installed from `skills-lock.json`) and `.claude/skills/impeccable/`. Don't edit vendored skill files; update them through the skills installer.

| Task | Owner skill | Supporting |
| --- | --- | --- |
| Astro pages, components, routing, content collections, integrations, `astro.config.mjs` | `astro` | `typescript-advanced-types` (only for complex types) |
| Dependencies, scripts, running tooling | `bun` | — |
| Tailwind v4 mechanics: `@theme`, variants, responsive utilities, syntax | `tailwind-css-patterns` | — |
| Design direction, new page or section, redesign, critique, polish, typography, color, layout, UX copy | `impeccable` | `design-taste-frontend` (anti-slop checklist only) |
| Building an animation or transition | `animate` | `impeccable` → `animate` (whether motion fits the design) |
| Reviewing motion code | `review-animations` (**user-invoked only**: `/review-animations`) | — |
| Accessibility | `accessibility` | `impeccable` → `audit` |
| SEO: titles, meta, Open Graph, structured data, sitemap, robots, heading outline | `seo` | `astro` (implementation: `site`, `@astrojs/sitemap`) |
| Advanced TypeScript types | `typescript-advanced-types` | — |

**Agents:** the four `impeccable-*` subagents in `.claude/agents/` (asset-producer, finish-reviewer, documenter, manual-edit-applier) belong to the impeccable workflow. Only the impeccable skill's own flow spawns them. Don't call them on their own.

**Hooks:** `.claude/settings.local.json` runs impeccable's design detector on SessionStart, after every Edit/Write, and on Stop (deep pass). Treat its output as review comments.

**Impeccable paths:** use the Claude copy at `.claude/skills/impeccable/scripts/impeccable`. The `.agents/` copy is for other agents (it uses `$command` syntax).

## Priority rules

Several skills have opinions about the same thing. When sources disagree, the **higher** item wins:

1. The user's explicit instruction in the current conversation.
2. This `CLAUDE.md` (stack, tooling, language, workflow).
3. Repo config: `biome.json`, `tsconfig.json`, `astro.config.mjs`, `package.json`.
4. Project design artifacts, once they exist: `PRODUCT.md`, `DESIGN.md`, `.impeccable/` briefs.
5. **Hard floors**, never traded for looks: accessibility (WCAG 2.2 AA), Core Web Vitals (LCP < 2.5 s, INP < 200 ms, CLS < 0.1), truthful content.
6. The owner skill for the task (routing table).
7. Supporting skills.
8. Generic defaults baked into skills (assumed stack, example code style).

### Known conflicts and how they resolve

- **`design-taste-frontend` vs the project stack.** Its defaults don't apply here: React/Next.js, Server Components, the Motion (`motion/react`) library, `next/font`, its icon library list, and "dark mode is mandatory". Instead, use Astro components and CSS transitions or the Web Animations API (a motion library only with the user's OK). Self-host fonts with Astro's font support or `@fontsource`, with `font-display: swap`. Use a single icon family and no hand-drawn icon paths. Add dark mode only if the user or `DESIGN.md` asks for it.
- **`impeccable` vs `design-taste-frontend`.** `impeccable` leads design direction: it owns `PRODUCT.md`, `DESIGN.md`, the hooks and the agents. `design-taste-frontend` is only a second-opinion checklist (AI tells, layout discipline, content density). Never run both full workflows on the same task. If they disagree on a design call, `impeccable` and `DESIGN.md` win.
- **Motion (`animate` vs `impeccable` animate vs `design-taste-frontend` §5).** `impeccable` decides *whether* and *where* motion belongs. `animate` decides *how*: its easing curves, durations and interruptibility rules are the numbers to use. Every animation ships with `prefers-reduced-motion` handling. `design-taste-frontend`'s scroll-hijack and GSAP patterns are out unless the user explicitly asks for them.
- **Accessibility vs any design skill.** `accessibility` wins on contrast, focus visibility, target size, semantics and motion. If a design calls for low contrast or hover-only affordances, change the design.
- **`tailwind-css-patterns` vs design skills.** Tailwind decides *how* to express a style (v4 syntax, `@theme`, variants). The design skills and `DESIGN.md` decide *what* the values are. Values become tokens in `@theme`.
- **`seo` vs `astro`.** `seo` decides *what* goes in (titles, descriptions, schema types, heading outline). `astro` decides *how* to implement it (`site` config, sitemap integration, layout props). SEO copy is in Spanish.
- **`bun` vs other skills' commands.** Translate any `npx`, `npm` or `pnpm` command from a skill to `bunx` or `bun`.
- **Code style.** `biome.json` beats every skill snippet.
- **`typescript-advanced-types`.** Use it only when a real type problem needs it. Prefer simple types and Astro's generated types (`CollectionEntry`, a `Props` interface).
- **Unresolved tie.** If two skills set contradictory hard rules and nothing above settles it, pick the more conservative option (more accessible, less JS, fewer dependencies) and mention the conflict in your reply.
