# Auditoría de copy y UX — inala.es (rama `web2`)

Fecha: 16-11-2026 · Alcance: build local de `web2` (`bun run build`), texto visible extraído del HTML generado y lectura de `src/`. No se ha modificado ningún archivo del proyecto.

---

## 1. Resumen ejecutivo

**Diagnóstico general.** Es una web honesta, cálida y bien ordenada, por encima de la media del sector. Lo que se ofrece, a quién y cuánto cuesta queda claro, y la confianza se apoya en datos verificables y no en promesas. Los puntos débiles son tres. La diferenciación real de María existe, pero está escondida en *Sobre mí* y no llega a las páginas de servicio. En móvil, la portada pierde casi toda la propuesta de valor. Y hay huecos de información práctica (primera sesión, pago, cancelación) y un texto provisional publicado.

**Tres fortalezas que hay que conservar**
1. **Transparencia como argumento de confianza.** Precio y duración en cada servicio («Sesión de 60 minutos · 65 €»), «sin cuotas ni permanencias», número de colegiada enlazado al registro del Colegio, nº de centro sanitario C03912 y aviso de crisis (024/112) en el pie de todas las páginas.
2. **FAQs que resuelven objeciones de verdad.** Por ejemplo, en pareja: «¿Qué pasa si una de las partes no está del todo convencida de venir?», «¿La terapeuta se pondrá del lado de alguno de los dos?» y «¿Y si nuestro objetivo termina siendo separarnos?». Es el mejor copy de la web.
3. **Barrera de entrada muy baja y voz coherente.** «No hace falta que me cuentes mucho», «Si prefieres no dar detalles por escrito, basta con tu nombre y tu teléfono», «Leo y respondo yo misma cada mensaje». Primera persona, «tú» o «vosotros» según el servicio, y un tono sereno.

**Cinco problemas más importantes**
1. **P1. Texto provisional publicado en el taller.** «[PENDIENTE: hora y lugar]» y «[PENDIENTE: precio]» para una edición del *viernes, 27 de noviembre de 2026*, a 11 días.
2. **P2. La portada en móvil no dice quién, para quién ni cómo.** El párrafo «Soy María Sánchez…» y la lista de datos (Pamplona y online, desde 65 €, nº col.) llevan `max-lg:hidden`. En móvil solo se ve «Psicóloga en Pamplona, terapia adaptada a cada situación», un titular genérico que además omite «online».
3. **P2. Los diferenciadores no llegan a los servicios.** El Máster en Terapia Sistémica de Familia y Pareja no aparece en *Terapia de Pareja* ni en *Familiar*, el Máster en Salud Mental Perinatal no aparece en *Psicología Perinatal* y la experiencia en empresa no aparece en *Terapia Individual* (estrés laboral, autoexigencia).
4. **P2. «Psicología perinatal» habla sobre todo de crianza.** Embarazo y posparto apenas se mencionan («posparto» aparece una vez). En cambio salen pantallas, etapa escolar y preadolescencia. Quien busca apoyo en el embarazo o tras una pérdida puede no reconocerse.
5. **P2. Faltan las respuestas prácticas que se buscan antes de reservar:** si la primera sesión cuesta lo mismo, formas de pago, política de cancelación, si emite factura o justificante. *Tarifas* solo dice «¿Primera vez? En la primera sesión revisamos tu situación…».

**El cambio que más mejoraría la comprensión:** que el hero de la portada muestre en todos los tamaños una frase que diga quién atiende, a quién y cómo, por ejemplo «Soy María Sánchez, psicóloga general sanitaria. Pamplona y online.», con el titular «Psicóloga en Pamplona y online».

**Cobertura y limitaciones**
- Revisadas: `/`, `/servicios/`, las 5 páginas de servicio, `/sobre-mi/`, `/nuestro-metodo/`, `/tarifas/`, `/contacto/`, `/taller-miedo-a-volar/`, `/blog/`, un artículo completo (`/blog/burnout/`) y la estructura del resto, `/404`, cabecera, pie y banner de cookies.
- No revisadas en profundidad: el cuerpo de 6 de los 7 artículos (solo títulos, subtítulos y metadescripciones) y las páginas legales.
- **No se ha inspeccionado en navegador.** Las observaciones visuales, como lo oculto en móvil, salen de las clases CSS del código, no de capturas.
- No hay analítica ni investigación con usuarios disponible, así que ninguna afirmación es de rendimiento o conversión.
- Según la memoria del proyecto, el texto visible se ha mantenido literal respecto a `main` por decisión de la propietaria. **Todas las propuestas de copy de este informe son recomendaciones que ella debe aprobar.**

---

## 2. Comprensión del negocio y la audiencia

- **Oferta (hecho):** psicoterapia individual (niños, adolescentes y adultos), de pareja, familiar y perinatal y crianza, presencial en Pamplona (Centro Yssana) u online. Además, un taller de miedo a volar en grupo junto a un piloto comercial.
- **Audiencia (PRODUCT.md):** sin un segmento prioritario. Personas que suelen buscar psicólogo por primera vez, en Pamplona o en cualquier lugar por vía online.
- **Necesidad principal (hipótesis):** saber si María puede ayudar con «lo mío», cómo es el proceso y cuánto cuesta, sin sentirse presionado.
- **Conversión principal:** «Solicitar primera cita» (formulario). Las secundarias son WhatsApp y el email. Según PRODUCT.md, la métrica de éxito declarada es el tráfico del blog y el SEO.
- **Diferenciadores confirmados:** formación sistémica en familia y pareja, formación perinatal, experiencia en desprotección infantil (trauma complejo y duelo temprano) y una carrera previa en la empresa.
- **Señales de confianza:** colegiada con enlace al registro, centro sanitario registrado, fotos reales de María y de la consulta, precios públicos, secreto profesional y aviso de crisis. No hay testimonios, y no deben inventarse.
- **Por confirmar:** horario (la web dice L–V 10:00–19:00, PRODUCT.md da otro horario partido), qué casos perinatales atiende (embarazo, pérdida gestacional, fertilidad), los enfoques concretos que integra y las condiciones de pago y cancelación.

---

## 3. Scorecard

### Global (0–5)

| Dimensión | Nota | Motivo principal | Confianza |
| --- | --- | --- | --- |
| Claridad y relevancia del copy | 4 | Concreto y empático. Algunos listados se vuelven técnicos y nominales («visibilización del esfuerzo invisible», «permisividad reactiva») | Alta |
| Propuesta de valor | 3 | Oferta, público y precio claros. Diferenciación débil fuera de *Sobre mí*, y el hero móvil es genérico | Alta |
| Argumentos y credibilidad | 4 | Credenciales verificables y FAQs sólidas. «Enfoque integrador» sin explicar | Alta |
| CTA | 4 | Una sola acción coherente y de baja presión. Falla el taller (sin precio ni hora) y el índice del blog no tiene CTA | Alta |
| Arquitectura y encontrabilidad | 4 | Navegación previsible. Faltan pago y cancelación, el pie no tiene teléfono ni WhatsApp y no hay enlace «Contacto» en la cabecera | Media |
| Carga cognitiva y escaneabilidad | 3 | Las páginas de servicio repiten el temario en «Para quién» y «Qué problemas» (2 bloques de 3 + 6 tarjetas) | Media |
| Voz y adecuación al público | 4 | Voz de María muy consistente. Desentonan el 404, el banner de cookies y algunos subtítulos del blog | Alta |

### Por página

| Página | Copy | Prop. valor | Argumentos | CTA | Arquitectura | Carga | Voz |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Inicio `/` | 4 | 3 | 3 | 5 | 4 | 3 | 4 |
| Servicios `/servicios/` | 4 | 4 | 3 | 4 | 4 | 5 | 4 |
| Terapia individual | 4 | 3 | 3 | 5 | 3 | 3 | 4 |
| Terapia de pareja | 5 | 4 | 4 | 5 | 4 | 3 | 5 |
| Terapia familiar | 4 | 4 | 4 | 5 | 4 | 3 | 4 |
| Psicología perinatal | 3 | 2 | 3 | 5 | 3 | 3 | 4 |
| Terapia online | 5 | 4 | 5 | 5 | 4 | 4 | 5 |
| Sobre mí | 4 | 4 | 4 | 4 | 4 | 4 | 5 |
| Cómo trabajo | 3 | 2 | 3 | 4 | 3 | 3 | 3 |
| Tarifas | 4 | 4 | 3 | 4 | 3 | 4 | 4 |
| Contacto | 5 | 4 | 4 | 5 | 4 | 4 | 5 |
| Taller miedo a volar | 3 | 3 | 3 | 2 | 3 | 4 | 4 |
| Blog (índice) | 3 | 2 | 2 | 2 | 3 | 4 | 3 |

Son juicios editoriales, no predicciones de conversión.

---

## 4. Hallazgos por página

### Inicio — `/` (`src/pages/index.astro`)
**Propósito:** orientar a quien llega por primera vez y llevarle a un servicio o a pedir cita.
**Qué funciona:** el orden de las secciones (servicios → quién soy → motivos → cómo empezar → presencial/online → CTA) responde a las preguntas en una secuencia lógica. «Cómo empezar» quita miedo («No hace falta que me cuentes mucho»). El bloque «Hola, soy María» con los tres diferenciadores es lo más distintivo de la web.

| # | Prioridad | Hallazgo | Evidencia | Recomendación | Impacto / Esfuerzo / Confianza |
| --- | --- | --- | --- | --- | --- |
| H1 | P2 | En móvil desaparecen el subtítulo y los datos clave | `max-lg:hidden` en el párrafo «Soy María Sánchez…» y en `FactList` | Mostrar en todos los tamaños una versión corta del subtítulo (ver §9) | Alto / Bajo / Alta (código; sin captura) |
| H2 | P2 | Titular genérico que omite «online» | «Psicóloga en Pamplona, terapia adaptada a cada situación» | «Psicóloga en Pamplona y online». PRODUCT.md dice que ambos alcances cuentan igual, y la meta y el eyebrow ya dicen «Pamplona y online» | Alto / Bajo / Alta |
| H3 | P3 | Dos citas inspiracionales sin autoría ni contenido propio | «La salud mental es un viaje de crecimiento y descubrimiento, no un destino al que llegar.» (con efecto máquina de escribir) | Sustituir por una frase de María con sustancia o atribuirla. La de «Hola, soy María» sí funciona | Bajo / Bajo / Media |
| H4 | P3 | «Motivos de consulta» no enlaza a ningún sitio | 6 áreas (ansiedad, duelo…) sin enlaces | Enlazar cada área a su servicio o a un artículo del blog: ayuda al usuario y al SEO | Medio / Bajo / Alta |
| H5 | P4 | El rango de público difiere entre portada y pie | Portada: «niños, adultos, parejas, familias y orientación en la crianza». Pie: «adultos, parejas y familias» | Unificar | Bajo / Bajo / Alta |

### Servicios — `/servicios/`
**Qué funciona:** la intro es una guía de decisión excelente: «individual si es algo que te pasa a ti, de pareja si el malestar está en la relación… Si no lo tienes claro, escríbeme y lo vemos juntos».
- **P3:** no muestra el precio de cada servicio, que sí aparece en *Tarifas*. Bastaría con añadir «60 min · 65 €» en cada tarjeta, que ya está en `services`.
- **P4:** el taller y el online no aparecen como tarjetas, aunque sí en el menú. Es coherente con la idea de «online es una modalidad», pero conviene que el taller se pueda encontrar desde aquí.

### Páginas de servicio (patrón común)
Estructura: hero → «¿Qué ocurre durante una sesión?» → «¿Para quién es…?» → «¿Qué problemas se trabajan?» → CTA → FAQ → blog → otros servicios.
- **P2 · Diferenciación ausente.** Ninguna página de servicio menciona la formación específica que respalda ese servicio. Recomendación: una línea de credencial por página, junto al CTA o en «Qué ocurre», por ejemplo: «Tengo un Máster en Terapia Sistémica de Familia y Pareja (AVAPSI, 2023)». Es un dato real, ya está en `site.ts`.
- **P3 · Redundancia.** «Para quién» y «Qué problemas» repiten el mismo temario. En *Individual*, «Adultos» ya enumera «ansiedad, estrés laboral, rupturas de pareja, duelo…» y debajo vuelven seis tarjetas con ansiedad, duelo, relaciones… Recomendación: que «Para quién» describa situaciones o perfiles (quién soy yo, cuándo vengo) y «Qué problemas» los temas, o fusionar las dos secciones.
- **P3 · Citas genéricas en posición privilegiada.** Justo después del hero: «Cuidar de tu mente es el primer paso para habitar tu propia vida con calma y presencia», «El amor no es solo sentirlo, sino saber cuidarlo…». No informan y suenan a frase de catálogo. Si son de María, atribuirlas. Si no, valorar quitarlas.
- **P3 · Lenguaje técnico o nominal en los listados.** «Reequilibrio de las responsabilidades domésticas y logísticas, visibilización del esfuerzo invisible y prevención del resentimiento silencioso». «Sin caer en el autoritarismo ni en la permisividad reactiva». «Alineamiento de tus decisiones con tus valores». Mejor con verbos y en segunda persona, como ya hace el resto: «Repartir de forma más justa las tareas y la carga mental, antes de que se acumule el resentimiento».
- **P4 · «Otros servicios» incluye la página actual** (en *Terapia Individual* aparece «Terapia Individual»).
- **P4 · H1 compuestos.** «Terapia individual entender lo que te pasa» se lee sin separador para lectores de pantalla y buscadores. Bastaría con una coma o dos puntos ocultos visualmente.

**Terapia individual.** Lo mejor es la FAQ «¿Qué pasa si nunca he ido al psicólogo antes?». Falta aprovechar la experiencia en empresa en «estrés laboral» y «autoexigencia», que es su diferenciador más claro para adultos (P2).

**Terapia de pareja.** La mejor página de servicio: neutralidad, separación consciente y reticencia de una de las partes. Conservar tal cual, salvo la redundancia general.

**Terapia familiar.** Las FAQs «¿Tienen que venir todos…?» y «¿La terapeuta juzgará cómo educamos…?» son muy buenas. Sin problemas propios aparte de los del patrón.

**Psicología perinatal y crianza (P2).**
- Evidencia: los tres perfiles son «primeros años y primera infancia», «desbordamiento, culpa y autoexigencia parental» y «etapa escolar, preadolescencia y cambios de ciclo». Las seis tarjetas tratan de rabietas, límites, discrepancias, vínculo y transiciones. El embarazo no aparece. La FAQ «¿Tienen que venir los hijos a las sesiones de psicología perinatal?» presupone hijos ya nacidos.
- Por qué importa: «perinatal» designa embarazo, parto y posparto. Quien llega por ese término (búsqueda o recomendación) no encuentra su situación, y quien busca «crianza» de un preadolescente no se identifica con «perinatal».
- Recomendación: dividir la página en dos bloques claramente titulados, «Embarazo y posparto» y «Crianza», con contenido confirmado por María. Necesita datos: qué situaciones perinatales atiende y con qué frecuencia de sesiones (marcado como indeciso en PRODUCT.md).

**Terapia online.** El bloque «Mitos y realidad» y el paso a paso en 4 pasos resuelven bien las objeciones. Incluye precios para todas las modalidades y la atención fuera de España. Es la página más completa. Detalle: el aviso «Si en algún caso no es el formato adecuado, te lo diré» genera mucha confianza y podría ir también en la FAQ.

### Sobre mí — `/sobre-mi/`
**Qué funciona:** la narrativa en tres tiempos (inicios en la empresa → vocación → propósito) es humana y explica de dónde vienen los diferenciadores. La formación está fechada, el registro enlazado y las fotos son reales.
- **P3:** la formación aparece después del CTA de cierre, así que quien evalúa credenciales tiene que bajar más allá del «¿Damos el primer paso juntos?». Valorar ponerla antes del CTA.
- **P3:** la sección no conecta la trayectoria con los servicios: «por eso trabajo con parejas y familias» enlazando a cada servicio.
- **P4:** las etiquetas «Luz natural / Un espacio tranquilo y cómodo / Secreto profesional» se repiten con variaciones en Inicio, Método, Tarifas y Contacto.

### Cómo trabajo — `/nuestro-metodo/`
**Qué funciona:** «Jamás te forzaré a abrir recuerdos o heridas para los que tu sistema nervioso aún no esté preparado» es una promesa concreta y tranquilizadora.
- **P2:** «Enfoque integrador y basado en la evidencia» no se explica nunca. «Combino distintos enfoques con respaldo científico» no dice cuáles. La formación cita sistémica e IFS. Recomendación: nombrar 2 o 3 enfoques reales y explicar en una frase qué aporta cada uno [dato por confirmar].
- **P3:** etiquetas con aire de jerga: «Transparencia activa», «Autonomía vital», «Escucha activa real». La última insinúa que otros no escuchan de verdad. Mejor rótulos llanos: «Te explico en qué punto estamos», etc.
- **P3:** el proceso tiene 3 pasos en Inicio, 4 aquí y 4 en Online, con nombres distintos. No es grave, pero conviene que los pasos compartidos (primer contacto, primera sesión) se llamen igual.
- **P3:** hay cuatro bloques de valores (enfoque / un espacio para ti / objetivos / resumen) que dicen cosas parecidas. Se podría condensar.

### Tarifas — `/tarifas/`
**Qué funciona:** precio, duración y «Pagas cada sesión por separado, sin cuotas ni permanencias». Muy claro.
- **P2 · Objeciones sin responder:** ¿la primera sesión tiene el mismo precio? ¿Cómo se paga (efectivo, tarjeta, Bizum, transferencia)? ¿Con cuánta antelación se cancela? ¿Hay factura o justificante para mutuas o reembolso? Recomendación: un bloque FAQ breve con datos confirmados por María. Ninguno debe inventarse.
- **P4:** «Acompañamiento durante todo el proceso… hasta que sientas que puedes seguir por tu cuenta» está bien, pero repite contenido de *Cómo trabajo*.

### Contacto — `/contacto/`
**Qué funciona:** es la página mejor resuelta para alguien con ansiedad. Opción «Me da igual (Lo valoramos juntos)», mensaje opcional, «basta con tu nombre y tu teléfono», tiempo de respuesta, aviso de crisis junto a los datos de contacto, cómo llegar y estados de éxito y error claros.
- **P3:** el horario «Lunes a viernes: de 10:00 a 19:00 h» no coincide con PRODUCT.md (L–M 15–19; X–J 9–13 y 16–18; V 9–13). Hay que confirmar cuál es el real. El código dice que sigue la ficha de Google.
- **P4:** el formulario no ofrece la opción «Taller de miedo a volar». Hoy se canaliza por WhatsApp, lo cual es razonable, pero «Consulta general / Información» podría mencionarlo.

### Taller de miedo a volar — `/taller-miedo-a-volar/`
**Qué funciona:** expectativas honestas: «No se pretende que salgas de la charla sin miedo…». Formato y temario claros.
- **P1:** «[PENDIENTE: hora y lugar]» y «[PENDIENTE: precio]» visibles para el usuario en una edición del 27-11-2026. Si esta rama se publica así, el CTA principal («reservar plaza») no se puede usar sin preguntar antes. Completar o, como mínimo, sustituir por «Escríbeme y te paso hora, lugar y precio».
- **P3:** el piloto comercial no se identifica. Si aceptara aparecer, aportaría credibilidad [dato por confirmar].
- **P4:** «Próximamente» (grupo online) sin forma de apuntarse. Se podría añadir «Escríbeme si te interesa y te aviso».

### Blog — `/blog/` y artículos
**Qué funciona:** autoría visible (María Sánchez), CTA al final de cada artículo («¿Te has reconocido en este artículo?»), enlace al servicio relacionado.
- **P3:** el índice no tiene CTA ni presentación de la autora, aunque el blog es la principal puerta de entrada según la métrica de éxito declarada.
- **P3:** tres artículos sobre el mismo tema (ansiedad o duelo ante un diagnóstico) con títulos muy parecidos: «Cómo superar la ansiedad ante un diagnóstico», «El coraje de seguir adelante: ansiedad ante la incertidumbre médica» y «Navegar en la nueva realidad: el duelo ante un diagnóstico». Se confunden entre sí y hay riesgo de que compitan en búsqueda. Diferenciar los enfoques en título y subtítulo, o consolidarlos.
- **P3:** subtítulos con un tono más comercial que la voz de María: «Descubre cómo la terapia de pareja virtual puede transformar tu relación», «guía profesional para…», «una inmersión en…».
- **P4:** en el artículo, el primer H2 repite el H1 («Burnout: cuando el estrés se vuelve agotamiento crónico»).
- **Observación:** el último artículo es del 20-12-2025, casi 11 meses sin publicar. Si el éxito se mide por SEO del blog, la frecuencia de publicación es una decisión de negocio pendiente.

### Elementos globales
- **Cabecera:** el botón dice «Solicitar cita» y todo lo demás dice «Solicitar primera cita» (P4). No hay enlace «Contacto», así que quien busca dirección o teléfono tiene que deducir que está tras el botón (P3).
- **Pie:** muestra el email y la dirección, pero **no el teléfono ni WhatsApp**, que son canales principales, ni el horario (P3).
- **Banner de cookies (P2 por confianza):** «Utilizamos cookies propias y de terceros…» y «Cookies de Marketing: Se utilizan para rastrear a los visitantes… para mostrar anuncios relevantes y atractivos». En una consulta de salud mental cuyo pie dice «Espacio seguro y confidencial», hablar de rastreo publicitario resta confianza. Además, la voz es de empresa («utilizamos») y no de María. Confirmar si de verdad se hace publicidad: si no, quitar la categoría y reescribir en un tono sobrio. Hay que revisarlo junto con el aviso legal.
- **404:** «¡Ups!», «¡No te preocupes! Vamos a volver al sendero principal juntos». Exclamaciones y tono infantil fuera de la voz serena del resto (P4).

---

## 5. Propuesta de valor

| Pregunta | Nota | Qué comunica hoy | Qué tiene que deducir el visitante |
| --- | --- | --- | --- |
| ¿Qué ofreces? | 5 | Cuatro servicios con nombre, precio y duración, presencial u online | Nada relevante |
| ¿Para quién? | 4 | Cada servicio abre con «Para…». La guía de *Servicios* es clara | En móvil, la portada no lo dice. La página perinatal confunde embarazo con crianza |
| ¿Qué problema resuelve? | 4 | Listados detallados de situaciones | A veces en lenguaje técnico |
| ¿Qué resultado esperar? | 3 | Resultados prudentes y realistas («entender lo que te pasa», «herramientas desde las primeras sesiones»), sin garantías, como debe ser | Cómo es un proceso típico, cuánto dura de forma orientativa. Solo hay frecuencia (semanal y luego espaciado) |
| ¿Qué te diferencia? | 2 | Tres líneas en la portada y la trayectoria en *Sobre mí* | Por qué María para pareja, familia o perinatal: la formación específica no aparece donde se decide |
| ¿Por qué elegirte? | 4 | Colegiada y verificable, centro sanitario registrado, precios públicos, respuesta personal | Qué significa «integrador» |
| ¿Qué pasa después? | 4 | Pasos claros, respuesta en 24–48 h, «acordar día, hora y modalidad» | Coste de la primera sesión, pago, cancelación. El taller no tiene hora, lugar ni precio |

---

## 6. Arquitectura de la información y recorrido

**Navegación actual:** Servicios (desplegable: 4 servicios + Terapia online + Taller) · Cómo trabajo · Sobre mí · Tarifas · Blog · [Solicitar cita].

**Fricciones**
1. Quien llega a un servicio desde Google no ve por qué María (su formación) en esa página. Tiene que ir a *Sobre mí*.
2. Las preguntas de «letra pequeña» (pago, cancelación, primera sesión) no tienen respuesta en ningún sitio.
3. En móvil, la portada no da contexto antes de los botones.
4. El pie no recoge el teléfono, WhatsApp ni el horario, que es donde muchos usuarios buscan el contacto.

**Orden propuesto para las páginas de servicio** (sin añadir secciones nuevas, reordenando y fusionando):
1. **Hero:** qué es, para quién, modalidad y CTA. Responde «¿es para mí?».
2. **Para quién y qué se trabaja** (fusionadas): el visitante se reconoce una sola vez, sin repetición.
3. **Qué ocurre en una sesión:** reduce la incertidumbre del primer paso.
4. **Por qué conmigo:** una línea de formación específica y una foto o enlace a *Sobre mí*. Es la diferenciación en el momento de decidir.
5. **FAQ:** objeciones.
6. **CTA con precio.**
7. **Blog relacionado y otros servicios.**

Hoy el CTA va antes de la FAQ. Moverlo después, o repetirlo, cierra las objeciones antes de pedir la acción.

**Cabecera:** valorar añadir «Contacto» como enlace de texto o unificar el botón a «Solicitar primera cita» si cabe. **Pie:** añadir el teléfono/WhatsApp y el horario.

---

## 7. Voz y tono

**Perfil actual (deducido de los mejores ejemplos):** primera persona, tuteo, frases cortas, validación sin dramatismo («Es normal sentir nervios»), autonomía del usuario («Tú marcas el ritmo»).

**Incoherencias**
- «Nosotros» corporativo: banner de cookies («Utilizamos»), 404 («nos hemos perdido»), meta del 404 («nuestras páginas»), blog («escritos desde la consulta de Inala»).
- Registro técnico en los listados de servicios frente al tono llano de las FAQs.
- Tono comercial en subtítulos del blog («Descubre cómo… puede transformar tu relación»).
- Tono infantil en el 404.
- Marcas de género mezcladas: «solo/a», «juzgado/a», «hijos/as» junto a «Niños y niñas» y «solos». No es grave, pero conviene elegir una convención.

**Atributos propuestos (provisionales)**

| Atributo | Sí | Evitar |
| --- | --- | --- |
| **Serena** | «No hace falta estar en una crisis para pedir ayuda.» | «¡Ups!», exclamaciones, urgencia |
| **Concreta** | «Vemos juntos qué hace que las discusiones escalen (retirarse, atacar, enfriarse)» | «Alineamiento de tus decisiones con tus valores» |
| **Personal** | «Leo y respondo yo misma cada mensaje.» | «Utilizamos…», «nuestras páginas» |
| **Honesta** | «Si en algún caso no es el formato adecuado, te lo diré.» | «Transformar tu relación», «Escucha activa real» |
| **Respetuosa con la autonomía** | «Tú decides cuánto quieres contar.» | Imperativos de venta («Descubre», «No esperes») |

**Tono por etapa:** descubrimiento (blog) informativo y sin venta, con un cierre amable · evaluación (servicios, método, sobre mí) concreto y con pruebas (formación, proceso) · decisión (tarifas, contacto) práctico y exhaustivo en la letra pequeña · avisos (crisis, cookies, legal) sobrio y claro, en primera persona cuando se pueda.

---

## 8. Plan de acción priorizado

| Prioridad | Problema | Acción | Impacto | Esfuerzo | Confianza | Depende de |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | Taller con [PENDIENTE] visibles | Completar hora, lugar y precio, o cambiar por «Escríbeme y te paso los detalles» | Alto | Bajo | Alta | Datos de María |
| P2 | Hero móvil sin contexto | Mostrar un subtítulo corto en todos los tamaños | Alto | Bajo | Alta (código) | Aprobación del copy |
| P2 | H1 de portada genérico y sin «online» | «Psicóloga en Pamplona y online» | Alto | Bajo | Alta | Aprobación del copy |
| P2 | Diferenciadores ausentes en servicios | Una línea de formación específica por servicio | Alto | Bajo | Alta | Ninguna (datos ya en `site.ts`) |
| P2 | Perinatal = crianza | Separar «Embarazo y posparto» y «Crianza» | Alto | Medio | Alta | Qué casos perinatales atiende |
| P2 | Letra pequeña sin responder | FAQ en Tarifas: primera sesión, pago, cancelación, factura | Alto | Bajo | Alta | Políticas reales |
| P2 | Cookies de «marketing» | Confirmar el uso real, quitar la categoría si no aplica y reescribir en primera persona | Medio | Bajo | Media | Configuración de GTM, aviso legal |
| P2 | «Integrador» sin explicar | Nombrar los enfoques reales en *Cómo trabajo* | Medio | Bajo | Alta | Confirmación de María |
| P3 | Redundancia «Para quién» / «Qué problemas» | Fusionar o diferenciar (perfiles vs temas) | Medio | Medio | Media | — |
| P3 | Jerga en listados | Reescribir con verbos y en segunda persona | Medio | Medio | Alta | Aprobación del copy |
| P3 | Pie sin teléfono, WhatsApp ni horario | Añadirlos | Medio | Bajo | Alta | Horario confirmado |
| P3 | Horario incoherente | Unificar web, Google y PRODUCT.md | Medio | Bajo | Alta | María |
| P3 | Blog sin CTA en el índice y 3 artículos solapados | Bloque de autora y CTA. Diferenciar o consolidar artículos | Medio | Medio | Media | Estrategia SEO |
| P3 | Motivos de consulta sin enlaces | Enlazar a servicio o artículo | Medio | Bajo | Alta | — |
| P4 | 404 infantil, «Solicitar cita» vs «primera cita», autoenlace en «Otros servicios», H2 = H1 en artículos, género | Ajustes puntuales | Bajo | Bajo | Alta | — |

**Mejoras rápidas:** taller, hero móvil y H1, formación en cada servicio, pie, enlaces en motivos, 404, autoenlace.
**Cambios estratégicos de mensaje:** página perinatal, explicación de «integrador», diferenciación por servicio, voz del blog.
**Cambios estructurales:** fusionar secciones de servicio, mover el CTA tras la FAQ, FAQ de tarifas, enlace «Contacto».
**Requieren datos o investigación:** horario real, políticas de pago y cancelación, casos perinatales, uso de cookies publicitarias, frecuencia del blog. Con analítica (GA4/Search Console) se podría priorizar qué páginas de entrada mejorar primero.

---

## 9. Ejemplos de reescritura

**1. Hero de la portada**
- *Actual:* H1 «Psicóloga en Pamplona, terapia adaptada a cada situación». El subtítulo «Soy María Sánchez, psicóloga general sanitaria en Pamplona. Terapia presencial y online para niños, adultos, parejas, familias y orientación en la crianza.» está oculto en móvil.
- *Propuesta:* H1 «Psicóloga en Pamplona y online». Subtítulo visible siempre: «Soy María Sánchez, psicóloga general sanitaria. Acompaño a niños, adolescentes, adultos, parejas y familias, y a madres y padres en la crianza.»
- *Por qué:* responde quién, para quién y dónde en la primera pantalla, también en móvil.
- *A validar:* que la propietaria acepte cambiar el texto heredado de `main`.

**2. Credencial en Terapia de Pareja** (junto al CTA)
- *Actual:* no existe.
- *Propuesta:* «Tengo un Máster en Terapia Sistémica de Familia y Pareja: trabajo con la relación, no con un culpable.»
- *Por qué:* une el diferenciador real con la objeción principal (la neutralidad).
- *A validar:* ninguno factual (AVAPSI, 2023 está en `site.ts`). Solo la aprobación del texto.

**3. Taller**
- *Actual:* «Presencial, en grupo pequeño[PENDIENTE: hora y lugar]» · «Precio[PENDIENTE: precio]».
- *Propuesta mínima:* «Presencial en Pamplona, en grupo pequeño · Hora, lugar y precio: [dato por confirmar]». Si no hay datos antes de publicar: «Escríbeme y te paso hora, lugar y precio.»
- *Por qué:* no se puede reservar sin esa información, y el marcador interno resta credibilidad.

**4. Listado en Terapia de Pareja**
- *Actual:* «Reequilibrio de las responsabilidades domésticas y logísticas, visibilización del esfuerzo invisible y prevención del resentimiento silencioso.»
- *Propuesta:* «Repartir de forma más justa las tareas y la carga mental, hacer visible lo que hoy no se ve y evitar que se acumule el resentimiento.»
- *Por qué:* verbos y lenguaje cotidiano, igual que las FAQs.

**5. Tarifas: primera sesión**
- *Actual:* «¿Primera vez? En la primera sesión revisamos tu situación y tus objetivos, y definimos juntos cómo empezar.»
- *Propuesta:* «¿Primera vez? La primera sesión dura 60 minutos y cuesta [dato por confirmar]. En ella revisamos tu situación y tus objetivos, y definimos juntos cómo empezar. Puedes pagar con [dato por confirmar] y cancelar sin coste avisando con [dato por confirmar] de antelación.»

**6. Banner de cookies**
- *Actual:* «Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el uso de nuestra web.»
- *Propuesta (si no hay publicidad):* «Uso cookies técnicas para que la web funcione y, si lo aceptas, cookies de análisis para saber qué páginas se leen. No uso cookies publicitarias.»
- *A validar:* configuración real de GTM y del aviso legal (requiere revisión legal).

---

## 10. Preguntas a validar

1. **Taller:** ¿hora, lugar y precio de la edición del 27 de noviembre? ¿Se puede nombrar al piloto?
2. **Perinatal:** ¿atiendes embarazo, posparto, pérdida gestacional o reproducción asistida, o el servicio es sobre todo crianza?
3. **Primera sesión y condiciones:** ¿mismo precio?, ¿formas de pago?, ¿política de cancelación?, ¿emites factura o justificante?
4. **Horario real:** ¿L–V 10–19 h (ficha de Google) o el horario partido de PRODUCT.md?
5. **Enfoques:** ¿qué corrientes integras concretamente (sistémica, IFS, otras)?
6. **Cookies:** ¿se usan cookies o píxeles publicitarios a través de GTM?
7. **Copy literal:** ¿autorizas cambios de texto respecto a `main`, o la auditoría debe limitarse a orden y presentación?

---

## 11. Lista de cambios propuestos

Todos los cambios que propone esta auditoría, agrupados por zona de la web. Cada uno lleva su prioridad y, si hace falta, el dato que hay que confirmar antes. Los cambios de texto necesitan la aprobación de María (ver pregunta 7).

### Global

- [ ] **P2** · Banner de cookies: confirmar si se usan cookies publicitarias. Si no, quitar la categoría «Cookies de Marketing» y reescribir el aviso en primera persona y en tono sobrio (§9, ejemplo 6). *Necesita: configuración de GTM y revisión legal.* -*no se usa cockies publicitarios cambialo*-
- [ ] **P3** · Cabecera: añadir un enlace de texto «Contacto». -*hazlo*-
- [ ] **P3** · Pie: añadir el teléfono/WhatsApp y el horario. -*hazlo*-
- [ ] **P3** · Unificar el horario entre la web, la ficha de Google y PRODUCT.md. *Necesita: horario real.* -*el horario es el que ya sale en la web*-
- [ ] **P4** · Cabecera: unificar el botón «Solicitar cita» con «Solicitar primera cita». *-hazlo*-
- [ ] **P4** · Unificar el público descrito en la portada y en el pie (el pie omite niños, adolescentes y crianza). -*ignora este cambio*-
- [ ] **P4** · 404: quitar «¡Ups!» y «¡No te preocupes!» y ajustar el texto a la voz serena del resto. -*hazlo*-
- [ ] **P4** · Pasar a primera persona los textos en «nosotros»: meta del 404 («nuestras páginas») y meta del blog («escritos desde la consulta de Inala»). -*hazlo*-
- [ ] **P4** · Elegir una convención para el género («solo/a», «hijos/as», «niños y niñas», «solos») y aplicarla en todas las páginas. -*utiliza el que consideres*-

### Inicio (`/`)

- [ ] **P2** · Mostrar en todos los tamaños una versión corta del subtítulo «Soy María Sánchez…» (hoy está oculto en móvil) (§9, ejemplo 1). -*ignoralo*-
- [ ] **P2** · Cambiar el H1 a «Psicóloga en Pamplona y online». -*hazlo*-
- [ ] **P3** · Sustituir la cita final («La salud mental es un viaje…») por una frase propia de María, o atribuirla. -*ignoralo*-
- [ ] **P3** · Enlazar cada área de «Motivos por los que la gente viene a consulta» a su servicio o a un artículo del blog. -*hazlo*-

### Servicios (`/servicios/`)

- [ ] **P3** · Añadir duración y precio en cada tarjeta de servicio. -*hazlo*-
- [ ] **P4** · Hacer que el taller de miedo a volar se pueda encontrar desde esta página. -*hazlo*-

### Páginas de servicio (las cinco)

- [ ] **P2** · Añadir una línea de formación específica en cada servicio, junto al CTA o en «¿Qué ocurre durante una sesión?»:
  - Pareja y Familiar: Máster en Terapia Sistémica de Familia y Pareja (AVAPSI, 2023) (§9, ejemplo 2).
  - Psicología Perinatal: Máster en Salud Mental Perinatal (IESMP, 2026).
  - Individual: experiencia previa en la empresa (estrés laboral, autoexigencia).
  -*hazlo*-
- [ ] **P3** · Fusionar «¿Para quién es…?» y «¿Qué problemas se trabajan?», o diferenciarlas (perfiles frente a temas) para no repetir el temario. -*hazlo*-
- [ ] **P3** · Atribuir a María las citas que siguen al hero o quitarlas. -*ignora esto*-
- [ ] **P3** · Reescribir con verbos y en segunda persona los listados técnicos («visibilización del esfuerzo invisible», «permisividad reactiva», «alineamiento de tus decisiones con tus valores») (§9, ejemplo 4). -*hazlo*-
- [ ] **P3** · Mover el CTA de cierre detrás de la FAQ, o repetirlo allí. -*ingnorarlo*-
- [ ] **P4** · Quitar la página actual de «Otros servicios». -*hazlo*-
- [ ] **P4** · Añadir un separador (coma o dos puntos ocultos) en los H1 compuestos («Terapia individual entender lo que te pasa»). -*hazlo*-

### Psicología Perinatal y Crianza

- [ ] **P2** · Dividir el contenido en «Embarazo y posparto» y «Crianza», y ajustar la FAQ «¿Tienen que venir los hijos…?», que presupone hijos ya nacidos. *Necesita: qué situaciones perinatales atiende María y la frecuencia habitual de las sesiones.* -*ignoralo*-

### Terapia online

- [ ] **P4** · Añadir a la FAQ el aviso «Si en algún caso no es el formato adecuado, te lo diré». -*hazlo*-

### Sobre mí (`/sobre-mi/`)

- [ ] **P3** · Colocar el bloque «Formación y experiencia» antes del CTA de cierre. -*hazlo*-
- [ ] **P3** · Conectar la trayectoria con los servicios mediante enlaces (por ejemplo, de la especialización en familia y pareja a esos servicios). -*hazlo*-
- [ ] **P4** · Reducir la repetición de las etiquetas «Luz natural / Un espacio tranquilo / Secreto profesional», que aparecen en varias páginas. -*hazlo*-

### Cómo trabajo (`/nuestro-metodo/`)

- [ ] **P2** · Explicar «enfoque integrador» nombrando 2 o 3 enfoques reales y lo que aporta cada uno. *Necesita: confirmación de María (por ejemplo, sistémica, IFS).* -*ignora este cambio*-
- [ ] **P3** · Cambiar las etiquetas «Transparencia activa», «Autonomía vital» y «Escucha activa real» por rótulos llanos. -*hazlo*-
- [ ] **P3** · Usar los mismos nombres para los pasos del proceso en Inicio, Cómo trabajo y Terapia online. -*hazlo*-
- [ ] **P3** · Condensar los cuatro bloques de valores que repiten ideas. -*hazlo*-

### Tarifas (`/tarifas/`)

- [ ] **P2** · Añadir una FAQ sobre el precio de la primera sesión, las formas de pago, la política de cancelación y la factura o justificante (§9, ejemplo 5). *Necesita: las condiciones reales.* -*hazlo pago en metalico se puede cancelar 24h antes despues la sesion se cobrara unque no puedas asistir por motivos obvios*-
- [ ] **P4** · Evitar repetir «Acompañamiento durante todo el proceso», que ya está en Cómo trabajo. -*hazlo*-

### Contacto (`/contacto/`)

- [ ] **P4** · Mencionar el taller en la opción «Consulta general / Información» del formulario. -*hazlo*-

### Taller de miedo a volar (`/taller-miedo-a-volar/`)

- [ ] **P1** · Completar hora, lugar y precio de la edición del 27/11/2026, o sustituir los «[PENDIENTE]» por «Escríbeme y te paso hora, lugar y precio» (§9, ejemplo 3). *Necesita: datos de María.* -*sustituye por «Escríbeme y te paso hora, lugar y precio» *-
- [ ] **P3** · Identificar al piloto comercial, si acepta aparecer. *Necesita: su permiso.* -*paul bowles belzunegui*-
- [ ] **P4** · Ofrecer una forma de apuntarse al aviso del grupo online («Próximamente»). -*ingoralo*-

### Blog (`/blog/`)

- [ ] **P3** · Añadir en el índice una presentación breve de la autora y un CTA. -*añadelo*-
- [ ] **P3** · Diferenciar en título y subtítulo, o consolidar, los tres artículos sobre ansiedad y duelo ante un diagnóstico. -*hazlo*-
- [ ] **P3** · Reescribir los subtítulos con tono comercial («Descubre cómo… puede transformar tu relación», «guía profesional», «una inmersión en…»). -*hazlo*-
- [ ] **P4** · Evitar que el primer H2 de cada artículo repita el H1. -*hazlo*-
- [ ] **Decisión** · Fijar una frecuencia de publicación (el último artículo es del 20/12/2025). -*ignorar*-
