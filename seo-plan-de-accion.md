# SEO local: plan de acción

Lo que queda por hacer para mejorar la posición de inala.es, en orden. Los cambios en la web están hechos en la rama `web2`, que todavía no está publicada: la web actual (`main`) no los tiene.

Última actualización: 16/11/2026.


## 0. Antes de publicar: dirección de la ficha de Google

La web usa ya la dirección de la autorización sanitaria (Resolución 857/2025, registro **C03912**): **Calle María Lacunza 6, portal 4, local 4.1, 31011 Pamplona**. La ficha de Google ya está actualizada con esa dirección (antes decía «Calle Dra. Ariz, frente al portal 13, 31006»).

- [x] **Corregir la ficha de Google Business Profile:** dirección actualizada a María Lacunza 6 (16/11/2026). El botón «Ver la ubicación en Google Maps» de la web usa el enlace estable de la ficha, así que ya lleva a la ubicación nueva.
- [ ] **Confirmar el código postal.** La resolución no lo indica; la web usa 31011, el mismo que la web actual (`main`).
- [ ] **Usar la misma dirección en todas partes:** Google, Bing Places, Apple Business Connect, directorios y COP.

## 1. Justo después de publicar `web2`

- [ ] **Search Console → Sitemaps:** enviar `https://inala.es/sitemap-index.xml`.
- [ ] **Search Console → Inspección de URLs:** pedir indexación de la home, `/contacto/`, `/sobre-mi/`, las cinco páginas de servicio y `/taller-miedo-a-volar/`.
- [ ] **Redirecciones nuevas:** comprobar que `https://inala.es/servicios` lleva a `/servicios/` y que `/política-de-privacidad` lleva a `/politica-de-privacidad/`.
- [ ] **Search Console → Páginas:** revisar durante 2–3 semanas que las URLs antiguas de `main` aparecen como «Página con redirección» y no como 404. Si sale un 404 de una URL antigua, hay que añadirla a `vercel.json` y a `redirects` en `astro.config.mjs`.
- [ ] **Rich Results Test** (https://search.google.com/test/rich-results): pasar la home y un artículo del blog. No debe haber errores.
- [ ] **PageSpeed Insights** (https://pagespeed.web.dev): pasar la home y una página de servicio en móvil. LCP < 2,5 s, INP < 200 ms, CLS < 0,1.
- [ ] **Bing Webmaster Tools** (https://www.bing.com/webmasters): «Importar desde Google Search Console».
- [ ] **Cabeceras de seguridad:** comprobar en https://securityheaders.com que salen HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` y `Permissions-Policy`.
- [ ] **Compartir un enlace** de un servicio y de Sobre mí por WhatsApp: cada página debe mostrar su propia imagen.

## 2. Medir contactos en Google Tag Manager

La web ya envía estos eventos al `dataLayer`. No incluyen datos personales ni el servicio elegido:

| Evento | Cuándo se dispara |
| --- | --- |
| `whatsapp_click` | Clic en cualquier enlace de WhatsApp |
| `phone_click` | Clic en el teléfono |
| `email_click` | Clic en un enlace de email |
| `directions_click` | Clic en «Ver la ubicación en Google Maps» |
| `contact_form_submit` | Envío correcto del formulario de Contacto (solo cuando el mensaje se ha enviado) |

### Antes de empezar: evitar contar dos veces

Hay dos formas de cargar Google Analytics y conviene usar solo una:

- **A través de GTM (recomendado):** si el contenedor `GTM-W39Z2VCV` ya tiene una etiqueta «Etiqueta de Google» con tu ID `G-…`, deja **vacía** la variable `PUBLIC_GA_TRACKING_ID` en Vercel.
- **Desde la web:** si el contenedor no tiene esa etiqueta y prefieres no crearla, rellena `PUBLIC_GA_TRACKING_ID` en Vercel. En ese caso, en el paso 3 de abajo pon tu ID `G-…` directamente en cada etiqueta de evento.

### Pasos en GTM (tagmanager.google.com)

1. **Activadores → Nuevo → Evento personalizado.** Crea uno por cada evento de la tabla. En «Nombre del evento» pon el nombre exacto, por ejemplo `whatsapp_click`, y llama al activador «Evento – whatsapp_click».
2. **Etiquetas → Nueva → Google Analytics → Evento de GA4.** Crea una por cada evento:
   - ID de medición: tu `G-…`.
   - Nombre del evento: el mismo, por ejemplo `whatsapp_click`.
   - Activación: el activador del paso 1.
3. **Consentimiento:** las etiquetas de Google ya respetan el Consent Mode de la web. Mientras el visitante no acepta las cookies de análisis, GA4 no instala cookies. No hace falta configurar nada más.
4. **Vista previa:** con «Vista previa» activa, abre la web, haz clic en WhatsApp y comprueba que la etiqueta se dispara. Luego **Enviar → Publicar**.
5. **En GA4 → Administrar → Eventos:** cuando los eventos aparezcan (puede tardar 24 h), marca `whatsapp_click`, `phone_click` y `contact_form_submit` como **eventos clave**. Son los que de verdad indican que alguien quiere pedir cita.

Con esto, en GA4 se puede ver qué páginas y qué búsquedas traen personas que acaban contactando, no solo visitas.

## 3. Reseñas en Google

Objetivo: pasar de 4 a 15–20 reseñas, poco a poco. La frecuencia también cuenta.

**Enlace para pedir reseñas:** en el panel de Google Business Profile, «Pedir reseñas» → copiar enlace.

**A quién pedírselas:** a personas que han terminado un taller o un proceso y se han ido contentas. Nunca en mitad de una terapia ni en un momento delicado. Los talleres son la mejor fuente: quien los hace no suele tener reparo en decirlo públicamente.

**Mensaje para participantes de un taller** (WhatsApp o email):

> Hola, [nombre]. Gracias por participar en el taller de [tema]. Si te resultó útil y te apetece, una reseña en Google ayuda a que otras personas lo encuentren: [enlace]. Sin ningún compromiso. ¡Un abrazo!

**Mensaje al cerrar un proceso de terapia** (solo si la persona ha mostrado que está contenta):

> Hola, [nombre]. Ha sido un placer acompañarte. Si en algún momento te apetece compartir tu experiencia, una reseña en Google ayuda a que otras personas se animen a dar el paso: [enlace]. Por supuesto, es totalmente opcional, y puedes firmarla solo con tus iniciales.

**Lo que no se puede hacer:**
- Ofrecer nada a cambio, como un descuento o una sesión.
- Pedirlas solo a quien sabes que pondrá 5 estrellas.
- Escribirlas o pedir a familiares que lo hagan.

**Cómo responder.** Responde a todas, pero sin confirmar nunca que la persona es o ha sido paciente: es secreto profesional, aunque ella lo diga primero.

- Reseña de un taller: «Muchas gracias, [nombre]. Me alegra mucho que el taller te resultara útil.»
- Reseña de terapia: «Gracias de corazón por dedicar un momento a escribir esto.»
- Reseña negativa: agradece, no entres en detalles y ofrece hablar en privado: «Siento que tu experiencia no fuera la que esperabas. Si quieres, puedes escribirme a hola@inala.es y lo hablamos.»

## 4. Ficha de Google Business Profile

- [ ] **Categoría principal:** Psicólogo (ya está). Añadir como secundarias las que encajen, por ejemplo «Terapeuta familiar» o «Consejero matrimonial».
- [ ] **Servicios:** uno por cada servicio de la web, con su descripción corta y enlace a su página (`https://inala.es/servicios/terapia-de-pareja/`, etc.).
- [ ] **Descripción:** la misma idea que la home: psicoterapia para adultos, parejas y familias en Pamplona y online, con María Sánchez, psicóloga general sanitaria, Nº col. N-02300.
- [ ] **Fotos:** consulta, sala de espera y entrada del Centro Yssana, para que la gente reconozca el sitio al llegar.
- [ ] **Publicaciones:** una al mes, por ejemplo cada artículo nuevo del blog o cada taller. La primera puede ser la charla de miedo a volar del 27/11/2026, con enlace a `https://inala.es/taller-miedo-a-volar/`.
- [ ] **Preguntas y respuestas:** añadir y responder tú misma las dudas típicas («¿Hacéis sesiones online?», «¿Cuánto dura una sesión?»).

## 5. Directorios y enlaces locales

Usa **exactamente** estos datos en todas partes. Si un directorio dice otra dirección, Google duda.

```
INALA Centro de Psicoterapia
Calle María Lacunza 6, portal 4, local 4.1 (Centro Yssana)
31011 Pamplona, Navarra
623 05 07 73
https://inala.es
```

- [ ] **Doctoralia** (perfil básico gratuito) y/o **TopDoctors**.
- [ ] **Centro Yssana:** pedir que incluyan a María en su web con enlace a inala.es.
- [ ] **COP Navarra:** comprobar si el registro o el «Listado de centros y servicios de psicología» permite añadir la web de Inala.
- [ ] **Piloto del taller de miedo a volar:** enlace mutuo entre las dos webs, desde `https://inala.es/taller-miedo-a-volar/`.
- [ ] **Bing Places** y **Apple Business Connect:** importan los datos desde Google en pocos minutos.

**Mensaje para el Centro Yssana:**

> Hola, ¿qué tal? Soy María Sánchez, psicóloga en el centro. He renovado mi web, inala.es. ¿Sería posible que en vuestra web, en la parte de profesionales, mi nombre enlazara a inala.es? Si necesitáis un texto corto o una foto, os lo paso. ¡Muchas gracias!

## 6. Calendario de temas para el blog

El blog no publica desde el 20/12/2025: retomar el ritmo de un artículo al mes es lo que más puede ayudar al tráfico. Si da tiempo, adelantar el tema de miedo a volar para publicarlo antes de la charla del 27/11/2026.

Son propuestas que María puede aceptar, cambiar o descartar; el texto lo escribe o lo revisa ella. Cada artículo debe enlazar a su servicio (campo `services` en la cabecera del artículo) y, si hay otro artículo del mismo tema, a ese también (campo `related`).

| Mes | Tema (pregunta que la gente busca) | Enlaza a |
| --- | --- | --- |
| 1 | ¿Cómo saber si necesito ir al psicólogo? | Terapia individual |
| 2 | ¿Cuántas sesiones de terapia de pareja hacen falta? | Terapia de pareja |
| 3 | Qué esperar de la primera sesión de terapia | Terapia individual, Cómo trabajo |
| 4 | Discusiones que se repiten en pareja: por qué pasan | Terapia de pareja |
| 5 | Adolescentes y familia: cuándo pedir ayuda | Terapia familiar |
| 6 | Cansancio y culpa en la crianza | Psicología perinatal y crianza |
| 7 | ¿Funciona igual la terapia online que la presencial? | Terapia online |
| 8 | Duelo: cuándo el dolor necesita acompañamiento | Terapia individual |
| 9 | Miedo a volar: de dónde viene y cómo se trabaja | Taller de miedo a volar (`/taller-miedo-a-volar/`) |
| 10 | Vuelta al cole y cambios de etapa en familia | Terapia familiar |
| 11 | Separación con hijos: cómo cuidar a los niños | Terapia familiar |
| 12 | Navidad y reuniones familiares (actualizar el artículo que ya existe y poner `updatedDate`) | Terapia familiar |

Cuando se revise un artículo antiguo, añadir `updatedDate: AAAA-MM-DD` en su cabecera: actualiza el sitemap y el schema. Cada artículo nuevo debe llevar `imageAlt` (descripción de la imagen) y, si su título pasa de 60 caracteres, `seoTitle`. Al indicar sus `services`, aparece solo en «Artículos relacionados» de esas páginas de servicio.

## 7. Datos que faltan para seguir con la web

| Para | Necesito |
| --- | --- |
| **Taller de miedo a volar** | Hora y lugar de la charla del 27/11/2026 y precio (la página muestra «[PENDIENTE: …]»). Opcional: nombre del piloto y su web. Cuando haya hora y lugar se puede añadir el schema `Event`, que puede salir destacado en Google. Tras cada edición, cambiar la fecha en `src/pages/taller-miedo-a-volar.astro`. |
| **Código postal** | Confirmar que es 31011 (ver punto 0). |
| **Coordenadas de la consulta** | La ficha de Google ya tiene la dirección de María Lacunza 6: comprobar que la chincheta está en el portal 4 y pasarme sus coordenadas para volver a ponerlas en el schema (`geo`). Las quité porque eran las de la dirección antigua. |
| **Páginas por problema** | Qué problemas quiere trabajar María como página propia (por ejemplo ansiedad, duelo) y el texto escrito o revisado por ella. |
| **Política de cookies** | Revisión por quien lleve lo legal. Ya está corregida con los datos técnicos reales: cookies de GA4, cookie de consentimiento y funcionamiento del aviso. |
| **`PRODUCT.md`** | Está desactualizado (dirección, número de colegiada NA-02300, horario y formulario antiguos). No afecta a la web, pero conviene actualizarlo para futuras sesiones de trabajo. |

## 8. Recomendaciones adicionales de SEO

Por orden de impacto aproximado. Las que necesitan texto nuevo las escribe o revisa María: no se inventan datos, resultados ni testimonios.

1. **Un artículo para Psicología perinatal.** Es el único servicio sin «Artículos relacionados». El tema 6 del calendario («Cansancio y culpa en la crianza») lo cubre.
2. **Autoría visible en cada artículo:** «Escrito por María Sánchez, psicóloga general sanitaria, Nº col. N-02300», con enlace a Sobre mí. Ya está en el schema, pero Google valora que se vea quién firma, sobre todo en temas de salud.
3. **Enlaces dentro del texto de los artículos** hacia el servicio y los artículos relacionados, además del bloque del final. Con anclas descriptivas («terapia de pareja en Pamplona»), no «aquí».
4. **Más preguntas frecuentes** con lo que la gente busca: «¿cuánto cuesta un psicólogo en Pamplona?», «¿cuántas sesiones necesito?», «¿la primera sesión es diferente?». Pueden ir en la página de cada servicio o en una página general.
5. **Schema `Event` en el taller** en cuanto haya hora y lugar. Google puede mostrar la fecha en los resultados.
6. **Fotos reales:** de la consulta, de la entrada del Centro Yssana y de María, en la web y en la ficha de Google. Ayudan en Maps y en Google Imágenes, y dan confianza. Ojo: según la resolución sanitaria, publicar imágenes puede requerir autorización previa de publicidad sanitaria; consultarlo antes.
7. **Reseñas en la web** cuando haya 10 o más en Google: solo con un enlace o un widget oficial, nunca copiadas como testimonios propios.
8. **Contenido local:** una sección o artículo sobre cómo llegar (barrio, aparcamiento, villavesa) ayuda en las búsquedas de «psicóloga cerca de mí» y «psicólogo en [barrio de la consulta]».
9. **Revisión mensual en Search Console:** buscar consultas con muchas impresiones y pocos clics y mejorar el título y la descripción de esas páginas. Revisar también qué artículos antiguos bajan y actualizarlos con `updatedDate`.
10. **Velocidad real con la web publicada.** El vídeo de la home (1,9 MB) es lo que más pesa. Si PageSpeed da un LCP en móvil por encima de 2,5 s, preparar una versión más ligera para móvil o usar solo la imagen.
11. **Más enlaces locales de calidad:** asociaciones de Pamplona (crianza, duelo, salud mental perinatal), colegios o escuelas de padres donde María dé charlas, y medios locales si hay ocasión (por ejemplo, una entrevista sobre el miedo a volar). Un buen enlace local vale más que muchos directorios.
