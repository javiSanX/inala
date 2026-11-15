# SEO local: plan de acción

Lo que queda por hacer fuera del código para mejorar la posición de inala.es, en orden. Los cambios en la web ya están hechos en la rama `web2`.

## 1. Justo después de publicar `web2`

- [ ] **Search Console → Sitemaps:** enviar `https://inala.es/sitemap-index.xml`.
- [ ] **Search Console → Inspección de URLs:** pedir indexación de la home, `/contacto/`, `/sobre-mi/` y las cinco páginas de servicio.
- [ ] **Redirecciones nuevas:** comprobar que `https://inala.es/servicios` lleva a `/servicios/` y que `/política-de-privacidad` lleva a `/politica-de-privacidad/`.
- [ ] **Search Console → Páginas:** revisar durante 2–3 semanas que las URLs antiguas de `main` aparecen como «Página con redirección» y no como 404. Si sale un 404 de una URL antigua, hay que añadirla a `vercel.json` y a `redirects` en `astro.config.mjs`.
- [ ] **Rich Results Test** (https://search.google.com/test/rich-results): pasar la home y un artículo del blog. No debe haber errores.
- [ ] **PageSpeed Insights** (https://pagespeed.web.dev): pasar la home y una página de servicio en móvil. LCP < 2,5 s, INP < 200 ms, CLS < 0,1.
- [ ] **Bing Webmaster Tools** (https://www.bing.com/webmasters): «Importar desde Google Search Console».

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
- [ ] **Publicaciones:** una al mes, por ejemplo cada artículo nuevo del blog o cada taller.
- [ ] **Preguntas y respuestas:** añadir y responder tú misma las dudas típicas («¿Hacéis sesiones online?», «¿Cuánto dura una sesión?»).

## 5. Directorios y enlaces locales

Usa **exactamente** estos datos en todas partes. Si un directorio dice otra dirección, Google duda:

```
INALA Centro de Psicoterapia
Calle Dra. Ariz, frente al portal 13 (Centro Yssana)
31006 Pamplona, Navarra
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
| **Páginas por problema** | Qué problemas quiere trabajar María como página propia (por ejemplo ansiedad, duelo) y el texto escrito o revisado por ella. |
| **Política de cookies** | Revisión por quien lleve lo legal. Ya está corregida con los datos técnicos reales: cookies de GA4, cookie de consentimiento y funcionamiento del aviso. |
