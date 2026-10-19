# Inala

Website for **inala.es**, a psychology / therapy practice for a Spanish-speaking audience.

## Stack

- **Astro 7**: static output, no adapter yet, `.astro` components, zero client JS by default. `site` is `https://inala.es`.
- **`@astrojs/sitemap`** generates `sitemap-index.xml` at build time from `site`. Pages with `noindex` should be filtered out of it.
- **`@vitejs/plugin-basic-ssl`**: the dev server runs on **HTTPS with a self-signed certificate**. Use `https://localhost:4321`, and `curl -k` when checking it from the shell.
- **Tailwind CSS 4** via `@tailwindcss/vite`. Config is CSS-first in `src/styles/global.css` (`@import "tailwindcss"` plus design tokens in `@theme`). There is no `tailwind.config.js`; don't create one.
- **TypeScript strict** (`astro/tsconfigs/strict`).
- **Bun 1.3** as package manager and script runner (`bun.lock`). Node >= 22.12.
- **Biome 2.5** for formatting and linting (tabs, double quotes, organize imports). No ESLint, no Prettier.
- **React (islands only, when needed)**: approved as the one UI framework for interactive islands, through `@astrojs/react`. It is not installed yet: add it with `bun astro add react` the first time an island is actually needed, and say so in the plan. See *React islands* below for when it is justified.
- **Playwright MCP** (`.mcp.json`, server `playwright`): a headless Chrome the agent drives to check pages in the browser during *Verify*. It runs through `bunx` with a pinned version; it is not a project dependency and not a test suite. Screenshots go to `.playwright-mcp/` (gitignored).
- No test runner, CMS, analytics or deploy adapter yet. Adding any of them is the user's decision: **ask first**.

## Commands

| Task | Command |
| --- | --- |
| Install | `bun install` |
| Add dependency | `bun add <pkg>` / `bun add -d <pkg>` (only after the user agrees) |
| Dev server (agents) | `bun astro dev --background`, then `bun astro dev status`, `bun astro dev logs`, `bun astro dev stop` |
| Build | `bun run build` |
| Preview build | `bun run preview` |
| Format + lint | `bun run check` (Biome; `biome.json` excludes `.claude/` and `.impeccable/`) |
| Type check | `bun run typecheck` (`astro check`; needs TypeScript 6, it does not support TypeScript 7 yet) |

Always start the dev server in background mode. Never leave a foreground dev server blocking the session.

## Conventions

- **Language:** everything users see is in Spanish (es-ES): copy, `<title>`, meta descriptions, `alt` text and URL slugs. Set `<html lang="es">` (the starter still has `en`; fix it when you touch `Layout.astro`). Code identifiers and code comments are in English.
- **Astro-first:** use `.astro` components and native `<script>` for small bits of interactivity. Use a React island only under the rules in *React islands*.
- **React islands:**
  - **Use React when** the UI has real client-side state that would be awkward in a native `<script>`: a multi-step form with validation, filters or search over a list, a booking or price calculator, any widget whose markup re-renders from state.
  - **Don't use React for** static content, layout, menus, accordions (`<details>`), tabs, a single toggle, scroll effects or anything that renders once. These stay in `.astro` + `<script>`.
  - Keep the island small: the page and its content stay in `.astro`; only the interactive part is a `.tsx` component in `src/components/`, typed with a `Props` interface.
  - Hydrate as late as possible: `client:visible` or `client:idle` by default, `client:load` only for above-the-fold UI needed immediately. Never `client:only` for content that must be indexed.
  - Content must stay readable without JS. Style islands with the same Tailwind tokens; no CSS-in-JS and no component libraries without asking.
  - Animation libraries (`motion/react`, GSAP) still need the user's OK; use CSS transitions or the Web Animations API first.
- **Structure:**
  - `src/pages`: routes.
  - `src/layouts`: page shells. One base `Layout` takes SEO props.
  - `src/components`: UI primitives and page sections (`.astro`), plus React islands (`.tsx`) when justified.
  - `src/content` and `src/content.config.ts`: content collections (blog).
  - `src/assets`: images rendered through `astro:assets` (`<Image>` / `<Picture>`).
  - `public/`: only files that need a fixed URL (favicon, `robots.txt`).
- **Styling:** use Tailwind utilities. Define design tokens (colors, fonts, radii, easing) once in `@theme` in `global.css`. Don't hard-code hex values or use scattered arbitrary values in components. Never use `transition: all`.
- **Fonts, icons, themes:** self-host fonts with Astro's font support or `@fontsource`, with `font-display: swap`. Use a single icon family and no hand-drawn icon paths. Add dark mode only if the user or `DESIGN.md` asks for it.
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
   - For UI changes: run the dev server in background and check the touched pages with the Playwright MCP at `https://localhost:4321` (see *Browser checks*).
   - For React islands: no hydration errors in `browser_console_messages`, and the content is in the server HTML (`curl -k` the page and find the text) so it survives with JS disabled.
   - Deal with every impeccable hook finding (raised after Edit/Write and on Stop): fix it, or explain why it doesn't apply.
6. **Review.** One review pass per task, picked from the table below. Don't stack reviews that cover the same ground (for example `polish` + `audit` + `accessibility`). Fix what the pass finds in one batch, confirm with at most one more round, and stop.

   | Task | Review |
   | --- | --- |
   | Copy fix, content port, small tweak | None beyond step 5 and the hooks |
   | New page or section, redesign | impeccable `polish` (its flow may spawn `impeccable-finish-reviewer`) |
   | React island | impeccable `harden` on the island (states, errors, edge cases) |
   | Accessibility work | `accessibility` checklist (not impeccable `audit` as well) |
   | Performance or responsive problems | impeccable `audit` |
   | Page that matters for search | add the `seo` checklist (it covers a different dimension, so it stacks with the design review) |
   | Motion | check the animated properties against `animation-performance` (composite-only by default), then suggest `/review-animations` to the user |

7. **Report.** Say what changed, how you verified it, and what you did not verify (for example, a check the browser could not do). Commit only when the user asks, and never push. Commit messages are short, lowercase and imperative (for example `add services page`), matching the history.

### Browser checks

With the dev server running, use the `playwright` MCP tools:

- `browser_navigate` to the page, then `browser_resize` to **1280×800** and **375×812**. At each size, take a `browser_take_screenshot` and look at it: no horizontal scroll, no clipped or overlapping content, and readable type.
- `browser_snapshot` (accessibility tree): one `h1`, a logical heading order, landmarks, and labelled links, buttons and form fields.
- Keyboard: `browser_press_key` `Tab` through the page; every interactive element is reachable in a sensible order and has a visible focus ring (screenshot it).
- `browser_console_messages`: no errors or hydration warnings.
- `prefers-reduced-motion` (only if the page has motion): emulate `reducedMotion: "reduce"` with `browser_emulate_media`, reload, and confirm that the animations stop or simplify.
- Contrast: the impeccable detector checks it. Use the screenshots for a visual sanity check, and flag any pair you can't confirm instead of guessing.

Close the browser with `browser_close` when you're done. If the MCP is unavailable, say so in the report and list the checks you skipped.

## Skills usage

Use skills according to the task. Load only the skills that apply: a one-line copy fix doesn't need three design skills. Skills live only in `.claude/skills/` (this project uses Claude Code only; there is no `.agents/` folder) and are tracked in `skills-lock.json`. Don't edit vendored skill files; update them through the skills installer, targeting Claude Code only: `bunx skills add <repo> -s <skill> -a claude-code`.

| Task | Owner skill | Supporting |
| --- | --- | --- |
| Astro pages, components, routing, content collections, integrations, `astro.config.mjs` | `astro` | — |
| React island (`.tsx` component, `@astrojs/react`, hydration directives) | `astro` | `impeccable` → `harden` and Operate mode (interaction states, errors, edge cases) |
| Dependencies, scripts, running tooling | `bun` | — |
| Tailwind v4 mechanics: `@theme`, variants, responsive utilities, syntax | `tailwind-css-patterns` | — |
| Design direction, new page or section, redesign, critique, polish, typography, color, layout, UX copy | `impeccable` | — |
| Building an animation or transition | `animate` | `impeccable` → `animate` (whether motion fits the design), `animation-performance` (which properties, CSS vs WAAPI) |
| Janky or dropped-frame animation, `will-change`, GPU layers | `animation-performance` | — |
| Reviewing motion code (one diff or component) | `review-animations` (**user-invoked only**: `/review-animations`) | — |
| Auditing all the site's motion and planning fixes | `improve-animations` (only when the user asks for a motion audit) | — |
| Accessibility | `accessibility` | `impeccable` → `audit` |
| SEO: titles, meta, Open Graph, structured data, sitemap, robots, heading outline | `seo` | `astro` (implementation: `site`, `@astrojs/sitemap`) |

**Agents:** the four `impeccable-*` subagents in `.claude/agents/` (asset-producer, finish-reviewer, documenter, manual-edit-applier) belong to the impeccable workflow. Only the impeccable skill's own flow spawns them. Don't call them on their own.

**Hooks:** `.claude/settings.local.json` runs impeccable's design detector on SessionStart, after every Edit/Write, and on Stop (deep pass). Treat its output as review comments.

**Impeccable paths:** the CLI is at `.claude/skills/impeccable/scripts/impeccable`.

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

- **`impeccable` is the only design skill.** It owns design direction, `PRODUCT.md`, `DESIGN.md`, the hooks and the agents, and its `craft-floor.md` is the anti-slop checklist. Its "go all out, dream big and bold" stance is bounded by this project's tone (see *Sensitive domain*) and by `PRODUCT.md` once it exists.
- **Motion (`impeccable` animate, `animate`, `animation-performance`, `review-animations`, `improve-animations`).** Each one has a single job:
  - `impeccable` decides *whether* and *where* motion belongs.
  - `animate` decides *how*: its easing curves, durations and interruptibility rules are the numbers to use.
  - `animation-performance` decides *what it costs*: `transform` and `opacity` by default, and it names the cause before fixing jank. It doesn't pick easing or duration.
  - `review-animations` judges one diff, and only when the user invokes it.
  - `improve-animations` audits the whole site and writes plans to `plans/` without touching source code. Executing a plan is a normal task: run step 5 on it.
  - Every animation ships with `prefers-reduced-motion` handling. No scroll-hijacking, and no GSAP or `motion/react` unless the user explicitly asks. Their Framer Motion and React Native advice doesn't apply here.
- **Accessibility vs any design skill.** `accessibility` wins on contrast, focus visibility, target size, semantics and motion. If a design calls for low contrast or hover-only affordances, change the design.
- **`tailwind-css-patterns` vs design skills.** Tailwind decides *how* to express a style (v4 syntax, `@theme`, variants). The design skills and `DESIGN.md` decide *what* the values are. Values become tokens in `@theme`.
- **`seo` vs `astro`.** `seo` decides *what* goes in (titles, descriptions, schema types, heading outline). `astro` decides *how* to implement it (`site` config, sitemap integration, layout props). SEO copy is in Spanish.
- **`bun` vs other skills' commands.** Translate any `npx`, `npm` or `pnpm` command from a skill to `bunx` or `bun`.
- **Code style.** `biome.json` beats every skill snippet, including React/TSX examples.
- **TypeScript.** Prefer simple types and Astro's generated types (`CollectionEntry`, a `Props` interface). No advanced type gymnastics unless a real type problem needs it.
- **Unresolved tie.** If two skills set contradictory hard rules and nothing above settles it, pick the more conservative option (more accessible, less JS, fewer dependencies) and mention the conflict in your reply.
