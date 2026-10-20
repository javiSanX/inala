# Web Copy & UX Audit — Claude Code Skill

## Install in one project

Copy the `web-copy-ux-audit` folder into the root of your website repository so the final path is:

`.claude/skills/web-copy-ux-audit/SKILL.md`

If the `.claude/skills/` folders do not exist, create them.

## Install globally

To make it available across projects, copy the folder to:

`~/.claude/skills/web-copy-ux-audit/SKILL.md`

Use project installation if you want the skill versioned with the website repository.

## Use it

Open Claude Code at the project root and ask:

> Run the `web-copy-ux-audit` skill on this website. Audit the available pages and provide the full report in Spanish. Do not modify files.

For a focused audit:

> Use `web-copy-ux-audit` to audit the homepage and the individual therapy service page. Prioritize value proposition, CTAs, section order, and brand voice. Do not edit files.

The skill can only assess what Claude Code can access. For a broad live-site audit, provide the public URL and ensure suitable browser/crawl access is available.

## Qué analizará la skill

1. Copywriting y argumentos de venta
Revisará titulares, subtítulos, párrafos, beneficios, objeciones, llamadas a la acción y claridad de los mensajes.
2. Propuesta de valor
Evaluará qué ofreces, a quién te diriges, qué problema resuelves, qué te diferencia y por qué deberían elegirte.
3. Estructura y experiencia de usuario
Analizará el orden de las secciones, la navegación, la carga cognitiva, la información difícil de encontrar y la continuidad del recorrido del usuario.



4. Voz y tono de marca
Comprobará la coherencia entre páginas, la personalidad de los textos, su adecuación al público y los cambios de tono según la fase del proceso de compra.

## Promp example for claude code

Utiliza la skill `web-copy-ux-audit` para auditar esta web de forma completa.

Analiza las páginas disponibles y genera el informe en español siguiendo la estructura definida en la skill. Prioriza los problemas por impacto, esfuerzo y confianza, aporta ejemplos concretos de los textos actuales y propone alternativas cuando sea posible.

No modifiques ningún archivo. Quiero un diagnóstico y un plan de mejoras antes de implementar cambios.
