# MISIÓN: REDISEÑO INTEGRAL DE INALA.ES CON UN WORKFLOW PROFESIONAL MULTI-SKILL

## 1. Rol y objetivo

Actúa como un equipo senior multidisciplinar formado por:

- Creative Director especializado en diseño web premium.
- Product Designer especializado en UX/UI y sistemas de diseño.
- Frontend Engineer experto en Astro, TypeScript y Tailwind CSS 4.
- Motion Designer especializado en animaciones web fluidas y sofisticadas.
- Especialista en rendimiento web, accesibilidad WCAG 2.2 AA y Core Web Vitals.
- Especialista técnico en SEO.
- QA Engineer especializado en pruebas visuales y responsive mediante Playwright.

Tu misión es realizar un **rediseño integral, profesional, visualmente diferencial y completamente implementado de https://inala.es**, trabajando directamente sobre el repositorio existente.

No quiero una simple actualización de estilos, un lavado de cara superficial ni una landing page aislada. Quiero una evolución profunda de la experiencia visual, la composición, la jerarquía de información, la tipografía, la navegación, los componentes y las interacciones de toda la web.

El resultado debe parecer diseñado por un estudio digital de primer nivel, con una identidad visual coherente, una ejecución técnica excelente y animaciones cuidadosamente diseñadas.

Debes utilizar las 12 skills enumeradas en la sección 4, siguiendo un workflow explícito en el que cada skill se cargue antes de su fase de trabajo y sus recomendaciones se apliquen y verifiquen realmente.

## 2. Dirección artística y criterios de diseño

### 2.1. Identidad de marca

Conserva la esencia cromática de Inala, ya que sus colores representan la marca.

Antes de tomar decisiones:

1. Inspecciona `src/styles/global.css`, los tokens existentes, los componentes, los recursos gráficos y todas las páginas.
2. Identifica los colores principales, secundarios y de acento que forman parte de la identidad actual.
3. Conserva los colores reconocibles, pero puedes redefinir sus tonos complementarios, superficies, fondos, contrastes y combinaciones para conseguir un resultado más sofisticado y accesible.
4. No inventes una nueva marca ni sustituyas arbitrariamente la identidad existente.

El resto del diseño puede replantearse ampliamente: tipografías, tamaños, espacios, distribución, composición, navegación, tarjetas, botones, ilustraciones, imágenes, iconografía y microinteracciones.

### 2.2. Dirección visual deseada

Busca una estética contemporánea, editorial, cálida, elegante y minimalista, con un alto nivel de detalle.

La web debe transmitir:

- Confianza y profesionalidad.
- Calma, cercanía y sensibilidad.
- Claridad y facilidad de navegación.
- Una identidad reconocible y memorable.
- Cuidado por la tipografía, la composición y los detalles.
- Una experiencia premium sin resultar fría, corporativa o excesivamente comercial.

Utiliza principios de diseño editorial, composición asimétrica cuando aporte valor, amplios espacios en blanco, jerarquías tipográficas claras, ritmos visuales intencionados, imágenes cuidadosamente seleccionadas y componentes con personalidad.

No conviertas toda la web en una colección de tarjetas con bordes redondeados. Evita los patrones genéricos de páginas generadas por IA, los degradados decorativos sin propósito, los efectos glassmorphism innecesarios, las sombras excesivas, las animaciones llamativas sin justificación y los diseños repetitivos.

No adoptes una estética experimental o agresiva. El diseño debe respetar el contexto de una consulta de psicología y terapia.

### 2.3. Animaciones y motion design

Quiero animaciones profesionales, fluidas y deliberadas, no simplemente transiciones de hover.

Diseña un sistema de movimiento coherente que contemple, cuando aporte valor:

- Entrada del contenido principal con una secuencia de aparición bien coordinada.
- Revelado progresivo de títulos, textos e imágenes.
- Transiciones sutiles entre estados de botones y enlaces.
- Interacciones de navegación refinadas.
- Apariciones de secciones al entrar en el viewport.
- Microinteracciones que proporcionen feedback claro.
- Transiciones de imágenes y elementos visuales con una sensación de profundidad contenida.
- Animaciones de menús y otros componentes interactivos.
- Estados de carga, error y éxito cuando existan interacciones que los necesiten.

Las animaciones deben tener una intención de diseño, un ritmo coherente, duraciones razonables y curvas de easing bien elegidas.

No animes todos los elementos indiscriminadamente. Reserva las animaciones más elaboradas para los momentos visuales que lo merezcan.

Prioriza CSS y Web Animations API. No instales GSAP, Motion, Framer Motion ni otras librerías de animación sin mi autorización explícita.

Respeta siempre `prefers-reduced-motion`, evita el scroll hijacking y no introduzcas animaciones que impidan leer, navegar o interactuar con normalidad.

Por defecto, anima `transform` y `opacity`. Cualquier animación que afecte a propiedades costosas debe estar justificada y evaluada.

### 2.4. Contenido e imágenes

Inspecciona el contenido real antes de diseñar.

Conserva los servicios, textos relevantes, información de contacto, enlaces, formularios, navegación, páginas, publicaciones y funcionalidades existentes.

Puedes reorganizar, dividir, combinar visualmente y mejorar la presentación del contenido. También puedes proponer mejoras de copy, pero sin alterar el significado ni inventar información.

No inventes credenciales profesionales, testimonios, resultados terapéuticos, estadísticas, precios ni afirmaciones sobre salud mental.

Si falta algún contenido imprescindible, utiliza un marcador explícito como `[PENDIENTE: descripción del servicio]` y documenta lo que necesita confirmación.

Utiliza imágenes de calidad y con una dirección artística coherente. Prioriza los recursos existentes en el repositorio. Si hacen falta recursos nuevos, identifica qué se necesita y propone opciones apropiadas antes de incorporar dependencias o servicios externos.

No dejes imágenes rotas, placeholders genéricos ni secciones visualmente vacías como solución definitiva.

## 3. Reglas técnicas obligatorias

`CLAUDE.md` es la fuente de verdad del proyecto. Léelo completo antes de comenzar y respeta sus convenciones.

Mantén estas condiciones:

- Astro 7 con salida estática.
- TypeScript estricto.
- Tailwind CSS 4 mediante `@tailwindcss/vite`.
- Bun 1.3 como gestor de paquetes.
- Biome para formato y lint.
- Componentes Astro como opción predeterminada.
- React exclusivamente para islands que realmente necesiten estado cliente complejo.
- Tokens centralizados en `src/styles/global.css`, utilizando `@theme`.
- SEO y metadatos en español de España.
- `html lang="es"`.
- Contenido indexable en el HTML generado por el servidor.
- Sitemap y rutas actuales correctamente preservados.
- Accesibilidad WCAG 2.2 AA como mínimo.
- Compatibilidad responsive real.
- Sin nuevas dependencias, CMS, analítica, adaptadores de despliegue ni servicios externos sin mi aprobación.

No crees `tailwind.config.js`. No introduzcas ESLint ni Prettier. Respeta los formatos y convenciones de Biome.

No uses `transition: all`, valores de color dispersos, CSS-in-JS ni abstracciones innecesarias.

Evita modificar archivos de configuración o infraestructura cuando no sea necesario.

No elimines funcionalidades existentes para simplificar el rediseño.

## 4. Inventario obligatorio de skills

Debes cargar y aplicar todas estas 12 skills durante el proyecto.

Antes de implementar código, localiza sus instrucciones reales en el repositorio, comprueba sus rutas en `skills-lock.json` y lee sus archivos de instrucciones. Si las rutas no coinciden con las esperadas, localízalas sin modificar los archivos de las skills.

Las skills deben aplicarse en el orden y las fases siguientes.

### Fase A. Auditoría y dirección de diseño

**1. `astro`**

Analiza la arquitectura existente, el sistema de layouts, las páginas, los componentes, el contenido, las integraciones y las convenciones específicas de Astro.

Determina cómo realizar el rediseño sin romper rutas, renderizado estático, contenido ni SEO.

**2. `impeccable`**

Es la skill responsable de la dirección artística y del sistema de diseño.

Utilízala para analizar la interfaz actual, identificar problemas, establecer la dirección visual, definir jerarquías y crear un diseño coherente que evite patrones genéricos de IA.

Lee y sigue su workflow completo, incluyendo sus artefactos de diseño, hooks y revisiones cuando corresponda.

### Fase B. Sistema de estilos e implementación

**3. `tailwind-css-patterns`**

Aplica correctamente Tailwind CSS 4 y su configuración CSS-first.

Define y utiliza tokens centralizados para colores, tipografía, espaciado, radios y otros valores de diseño. Comprueba la sintaxis real de la versión instalada.

**4. `bun`**

Utiliza Bun para instalar dependencias únicamente cuando esté autorizado, ejecutar scripts y administrar las herramientas del proyecto.

No traduzcas los comandos de este proyecto a npm, pnpm o npx.

### Fase C. Motion design

**5. `animate`**

Consulta las instrucciones de animación antes de implementarlas.

Define las curvas de easing, duraciones, secuencias, reglas de interrupción y comportamientos de las interacciones. Evita animaciones excesivas o inconsistentes.

**6. `animation-performance`**

Evalúa el coste de las animaciones propuestas y su impacto en el renderizado.

Prioriza propiedades compatibles con composición, identifica las causas reales de cualquier problema de fluidez y evita capas GPU innecesarias o el uso indiscriminado de `will-change`.

**7. `improve-animations`**

Utiliza esta skill para auditar el movimiento de toda la web, identificar problemas y generar un plan de mejoras.

Respeta su funcionamiento: esta skill audita y documenta las mejoras; no debes asumir que modifica automáticamente el código fuente.

Después, implementa las mejoras aprobadas dentro del workflow de desarrollo habitual y verifica sus resultados.

**8. `review-animations`**

Su invocación está reservada al usuario según las convenciones del proyecto.

No ejecutes `/review-animations` por iniciativa propia. Prepara el código para que pueda revisarse y, al terminar, recomienda explícitamente ejecutar `/review-animations` como revisión adicional del motion design.

### Fase D. Calidad transversal

**9. `accessibility`**

Audita la experiencia con criterios WCAG 2.2 AA.

Revisa contraste, foco visible, navegación por teclado, semántica, encabezados, etiquetas, objetivos táctiles, movimiento reducido y estados interactivos.

La accesibilidad prevalece sobre cualquier decisión estética que la contradiga.

**10. `seo`**

Audita y preserva el SEO existente, incluyendo títulos, descripciones, canonical, Open Graph, estructura de encabezados, enlaces internos, datos estructurados, sitemap y directivas de indexación.

No inventes datos estructurados ni alteres URLs sin una justificación y una estrategia de redirección aprobada.

**11. `impeccable` — revisión final de diseño**

Ejecuta su revisión `polish` al finalizar la implementación.

Resuelve los problemas identificados y sigue su propio flujo de revisión. No invoques manualmente los subagentes de Impeccable: deja que la skill gestione su workflow.

**12. `improve-animations` y `review-animations` — cierre de movimiento**

Completa la auditoría general con `improve-animations`, si no se ha completado en la fase C, y deja preparado el trabajo para la revisión explícita `/review-animations` del usuario.

Nota: las skills repetidas en distintas fases no representan instalaciones adicionales. Las doce skills distintas que deben utilizarse son: `accessibility`, `animate`, `animation-performance`, `astro`, `bun`, `impeccable`, `improve-animations`, `review-animations`, `seo` y `tailwind-css-patterns`. No inventes skills adicionales ni afirmes que has utilizado una skill si no has leído y aplicado sus instrucciones.

## 5. Workflow de ejecución

Debes ejecutar las siguientes fases de forma secuencial, manteniendo un registro verificable de lo realizado.

### Fase 0. Preparación y diagnóstico

1. Lee `CLAUDE.md`, `package.json`, `astro.config.mjs`, `biome.json`, `tsconfig.json`, `src/styles/global.css`, `skills-lock.json` y los archivos relevantes del repositorio.
2. Comprueba el estado de Git y los cambios preexistentes. Nunca sobrescribas trabajo ajeno al rediseño.
3. Identifica todas las rutas públicas y las páginas de error, si existen.
4. Inspecciona las páginas, layouts, componentes, colecciones de contenido, imágenes, tipografías y estilos.
5. Identifica las funcionalidades que deben conservarse.
6. Comprueba los scripts existentes y el estado de las comprobaciones actuales, sin modificar dependencias.
7. Lee las instrucciones de las skills antes de tomar decisiones de implementación.

No supongas que la web está formada únicamente por una homepage.

### Fase 1. Auditoría de la web actual

Genera un inventario de las páginas y componentes.

Analiza:

- Jerarquía visual y composición.
- Consistencia entre páginas.
- Tipografía y legibilidad.
- Paleta de colores y contraste.
- Espaciado, alineación y densidad.
- Calidad y coherencia de las imágenes.
- Navegación y arquitectura de información.
- Responsive y experiencia móvil.
- Accesibilidad.
- Rendimiento.
- SEO y contenido indexable.
- Animaciones existentes y oportunidades de mejora.

Si es posible, ejecuta la web actual y utiliza Playwright para inspeccionarla a 1280×800 y 375×812. Guarda capturas de referencia antes de modificarla.

Documenta los problemas reales encontrados, no una lista genérica de recomendaciones.

### Fase 2. Definición del producto y dirección artística

Utiliza `impeccable` para elaborar, según sus instrucciones, los siguientes artefactos:

- `PRODUCT.md`: propósito de la web, audiencia, propuesta de valor, objetivos, prioridades y principios de experiencia.
- `DESIGN.md`: dirección artística, sistema de diseño, tipografía, colores, composición, espaciado, componentes, iconografía, imágenes y reglas de interacción.

Si la skill dispone de un formato o workflow específico para estos artefactos, sigue sus instrucciones en lugar de inventar uno incompatible.

Los artefactos deben describir una dirección visual concreta y aplicable, no expresiones vagas como «diseño moderno y minimalista».

Incluye una propuesta de:

- Paleta derivada de la identidad actual.
- Parejas tipográficas y jerarquías.
- Tokens de diseño.
- Tratamiento de fondos y superficies.
- Estilo de botones, enlaces y formularios.
- Navegación y footer.
- Composición de la portada.
- Sistema de movimiento.
- Adaptación responsive.
- Criterios de accesibilidad.

### Fase 3. Plan de implementación y punto de control

Antes de editar el código, presenta un plan breve pero específico que incluya:

1. La dirección visual propuesta.
2. Los principales cambios de la homepage.
3. Los cambios previstos en las demás páginas.
4. Los componentes que se crearán, modificarán o eliminarán.
5. La estrategia de animación.
6. Las medidas para preservar SEO, accesibilidad y rendimiento.
7. Las dependencias nuevas que podrían ser necesarias, si las hubiera.
8. Los riesgos o decisiones que necesitan confirmación.

**Detente y espera mi aprobación en esta fase**, tal como exige `CLAUDE.md` para los rediseños.

No instales dependencias ni empieces a modificar el código fuente antes de recibir esa aprobación. Puedes completar la auditoría y preparar los artefactos de diagnóstico y diseño.

Si una decisión implica una dependencia nueva, un cambio de arquitectura o un servicio externo, solicita mi aprobación específica.

### Fase 4. Implementación del rediseño

Una vez aprobado el plan:

1. Implementa el sistema de diseño en `src/styles/global.css`.
2. Centraliza los tokens y elimina duplicaciones innecesarias.
3. Rediseña el layout principal y los componentes compartidos.
4. Rediseña la homepage y el resto de páginas existentes.
5. Reorganiza las secciones para mejorar la narrativa visual y la jerarquía del contenido.
6. Mejora la navegación, los botones, los enlaces, los formularios y las interacciones.
7. Implementa las animaciones aprobadas.
8. Conserva el contenido indexable y las funcionalidades existentes.
9. Mantén el código organizado, tipado y coherente con las convenciones del proyecto.
10. Ejecuta el workflow de revisión de Impeccable después de las modificaciones y resuelve sus observaciones aplicables.

Trabaja por bloques coherentes, evitando cambios indiscriminados y abstracciones que no aporten valor.

No te limites a generar un documento de recomendaciones: una vez aprobado el plan, implementa el rediseño real en el repositorio.

### Fase 5. Verificación visual iterativa

Utiliza el servidor de desarrollo y Playwright MCP según `CLAUDE.md`.

Inicia el servidor en segundo plano mediante los comandos documentados del proyecto. Utiliza `https://localhost:4321` y `curl -k` cuando sea necesario.

Para cada página relevante:

1. Navega a la URL.
2. Comprueba el diseño a 1280×800 y 375×812.
3. Captura y examina las imágenes reales.
4. Detecta desbordamientos horizontales, solapamientos, saltos de composición, texto ilegible, imágenes incorrectas y problemas de espaciado.
5. Comprueba que los elementos principales se ven correctamente sin depender de hover.
6. Inspecciona el árbol de accesibilidad.
7. Navega con teclado y verifica el foco visible.
8. Revisa la consola del navegador.
9. Comprueba las animaciones y los estados interactivos.
10. Emula `prefers-reduced-motion: reduce` y confirma que las animaciones se eliminan o simplifican correctamente.

Cuando encuentres defectos visuales, corrígelos y vuelve a inspeccionar las páginas afectadas.

No des por buena una interfaz únicamente porque el código compila.

### Fase 6. Rendimiento, accesibilidad y SEO

Aplica las skills correspondientes y verifica:

**Rendimiento**
- Animaciones prioritariamente mediante `transform` y `opacity`.
- Sin JavaScript cliente innecesario.
- Imágenes optimizadas con `astro:assets` cuando corresponda.
- Dimensiones de imagen y comportamiento de carga apropiados.
- Fuentes optimizadas y `font-display: swap`.
- Sin nuevas dependencias no aprobadas.
- Sin regresiones evitables en LCP, INP o CLS.

Utiliza como objetivos Core Web Vitals LCP inferior a 2,5 segundos, INP inferior a 200 ms y CLS inferior a 0,1. No afirmes que se han alcanzado sin mediciones representativas.

**Accesibilidad**
- Contraste suficiente.
- HTML semántico.
- Un H1 principal por página y jerarquía lógica de encabezados.
- Enlaces, botones y campos con nombres accesibles.
- Navegación completa por teclado.
- Estados de foco visibles.
- Objetivos táctiles adecuados.
- Respeto por el movimiento reducido.

**SEO**
- Títulos y descripciones en español.
- Canonical correcto.
- Open Graph.
- Encabezados semánticos.
- Enlaces internos funcionales.
- Datos estructurados solo cuando estén justificados por el contenido real.
- Sitemap actualizado y exclusión de páginas `noindex`.
- Preservación de las URLs existentes, salvo cambios aprobados.
- Contenido principal presente en el HTML generado por Astro.

### Fase 7. Comprobaciones obligatorias

Ejecuta las comprobaciones definidas por el proyecto:

- `bun run check`
- `bun run typecheck`
- `bun run build`

Las tres deben pasar antes de declarar el trabajo finalizado.

Si falla alguna comprobación:

1. Identifica la causa.
2. Corrige los problemas introducidos por el rediseño.
3. Repite las comprobaciones afectadas.
4. No ocultes ni silencies errores para conseguir un resultado aparentemente satisfactorio.

Si una comprobación falla por una limitación preexistente, documenta el error y demuestra, en la medida de lo posible, que no lo ha causado el rediseño.

Comprueba también que las páginas principales funcionan correctamente en el navegador y que no hay errores de hidratación ni errores de JavaScript.

Cierra el navegador de pruebas cuando hayas terminado.

### Fase 8. Revisión final

Ejecuta la revisión `polish` de Impeccable.

Revisa los hallazgos de los hooks y resuelve cada problema aplicable. Utiliza una única ronda de correcciones agrupadas y, si fuera necesario, una comprobación adicional.

Audita el movimiento general con `improve-animations`, si corresponde, y prepara una revisión posterior con `/review-animations`, sin invocarla automáticamente.

No apiles auditorías redundantes que revisen exactamente los mismos aspectos.

### Fase 9. Informe de entrega

Cuando todo esté terminado, presenta un informe que incluya:

- Resumen de la dirección visual aplicada.
- Páginas rediseñadas.
- Componentes creados, modificados o eliminados.
- Cambios en el sistema de diseño.
- Animaciones implementadas y criterios utilizados.
- Mejoras de accesibilidad, SEO y rendimiento.
- Skills utilizadas y fase en la que se aplicaron.
- Resultado de `bun run check`, `bun run typecheck` y `bun run build`.
- Páginas y resoluciones verificadas mediante Playwright.
- Problemas pendientes o limitaciones de las comprobaciones.
- Dependencias nuevas, si las hubiera, y autorización correspondiente.
- Recomendación para ejecutar `/review-animations`.

No afirmes haber realizado pruebas, auditorías o mediciones que no se hayan ejecutado realmente.

No hagas commits ni pushes. Conserva los cambios en el árbol de trabajo para que pueda revisarlos.

## 6. Criterios de aceptación

El rediseño se considerará terminado únicamente cuando se cumplan estos criterios:

1. La web presenta una identidad visual claramente mejorada, coherente y profesional.
2. Conserva los colores reconocibles de Inala.
3. La homepage tiene una composición, jerarquía y narrativa visual de alta calidad.
4. Las demás páginas mantienen una coherencia visual real, no solo una actualización de colores.
5. Las animaciones están diseñadas con intención y no perjudican la accesibilidad ni el rendimiento.
6. La experiencia funciona correctamente en escritorio y móvil.
7. El contenido y las funcionalidades existentes se conservan.
8. El SEO y el HTML generado por Astro siguen siendo correctos.
9. No existen errores nuevos conocidos en compilación, tipado, lint ni navegador.
10. Se han revisado las capturas reales y se han corregido los defectos detectados.
11. Los artefactos de diseño documentan las decisiones principales.
12. El informe final refleja exactamente lo que se ha implementado y verificado.

## 7. Instrucción final

Prioriza la calidad del resultado sobre la velocidad de implementación.

No empieces a escribir componentes nuevos sin haber entendido primero el producto y definido la dirección visual. No sustituyas el criterio de diseño por patrones genéricos. No introduzcas dependencias porque una skill las recomiende sin evaluar primero si son necesarias y obtener autorización.

**La meta es conseguir una web que parezca diseñada y desarrollada a medida por un equipo experto, no una plantilla generada automáticamente.**

Comienza ahora por la Fase 0: inspecciona el repositorio, localiza y lee las skills, audita la web actual y prepara la dirección artística. Cuando hayas completado el diagnóstico y los artefactos de diseño, presenta el plan de implementación y espera mi aprobación antes de modificar el código fuente.

### 2.5. REGLA CRÍTICA: PRESERVACIÓN TOTAL DEL CONTENIDO Y LAS PÁGINAS

Esta condición es obligatoria y tiene prioridad sobre cualquier decisión de diseño.

**Quiero rediseñar toda la web existente de Inala, no crear una web nueva ni reescribir su contenido.**

Debes conservar íntegramente las páginas, los textos y la información que ya existen en el proyecto.

#### Páginas y URLs

- Identifica e inventaría todas las rutas existentes antes de empezar.
- Conserva todas las páginas, incluidas las páginas secundarias, las páginas del blog, las publicaciones, las páginas de servicios, las páginas legales y cualquier otra ruta existente.
- Conserva las URLs, los slugs, las rutas dinámicas y la estructura de navegación actual.
- No elimines, combines, sustituyas ni renombres páginas.
- No conviertas varias páginas en una sola ni reduzcas el sitio a una landing page.
- No cambies las URLs por motivos estéticos.
- Conserva los enlaces internos y comprueba que siguen funcionando.
- Si una ruta parece obsoleta, duplicada o innecesaria, consérvala y solicita autorización antes de modificarla.

#### Textos y contenido

- Conserva literalmente los textos actuales: títulos, subtítulos, párrafos, listas, preguntas frecuentes, textos de botones, formularios, avisos, metadatos editoriales y contenido de las publicaciones.
- No resumas, acortes, reescribas, corrijas ni sustituyas textos, aunque consideres que una versión diferente mejoraría el marketing o la experiencia de usuario.
- No elimines párrafos porque dificulten una composición visual.
- No inventes contenido para rellenar secciones ni sustituyas contenido real por textos de ejemplo.
- Conserva las imágenes, enlaces, datos de contacto y demás recursos existentes, salvo que yo autorice expresamente un cambio.
- Puedes modificar la presentación del contenido: tipografía, tamaño, color, anchura de lectura, espaciado, alineación, orden visual de los elementos dentro de una sección y distribución responsive, siempre que no cambies su significado ni omitas información.
- Puedes rediseñar completamente los componentes que contienen el contenido, pero debes conservar sus datos y funcionalidades.

#### Refactorización y arquitectura

- Inspecciona las páginas Astro, layouts, componentes, colecciones de contenido, archivos de datos y recursos asociados.
- No elimines ni reemplaces contenido dinámico por contenido escrito manualmente.
- Conserva los esquemas y las colecciones de contenido existentes, así como las relaciones entre publicaciones y sus páginas.
- Mantén las funcionalidades, los formularios, los enlaces y las integraciones existentes.
- No realices limpiezas de código que puedan eliminar contenido o alterar rutas fuera del alcance del rediseño.

#### Verificación de integridad obligatoria

Antes de implementar, crea un inventario de las rutas y una referencia verificable del contenido actual.

Al finalizar:

1. Compara las rutas originales con las rutas finales y comprueba que no falta ninguna.
2. Comprueba que todos los textos originales siguen presentes y no han sido modificados accidentalmente.
3. Verifica que las publicaciones, los contenidos dinámicos y las páginas secundarias continúan generándose correctamente.
4. Comprueba que los enlaces internos apuntan a destinos válidos.
5. Confirma que los metadatos y las directivas SEO existentes se han conservado, salvo mejoras técnicas expresamente aprobadas.
6. Informa de cualquier diferencia detectada.

La comparación debe tener en cuenta el contenido real de cada página, no solamente los nombres de los archivos. Los cambios de formato HTML, los componentes y los estilos no deben confundirse con cambios de contenido.

**Criterio de aceptación:** todas las páginas y todos los textos originales deben mantenerse. Si no puedes garantizar la conservación de algún elemento, no lo elimines ni lo sustituyas: detente y solicita mi autorización.

La única excepción serán los cambios que yo autorice expresamente.
