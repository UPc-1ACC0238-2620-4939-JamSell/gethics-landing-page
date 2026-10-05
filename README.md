# Gethics — Landing Page

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step), con el diseño "Warm" de 3.1.3.2 llevado a un nivel más pulido: animaciones al hacer scroll, header sticky, hover states, y contenido ampliado a partir del informe real del proyecto (Capítulos 1 y 2).

## Archivos

- `index.html` — contenido y estructura
- `styles.css` — estilos, animaciones (scroll-reveal, float, hover) y breakpoints responsive (mobile en `max-width: 768px`)
- `script.js` — menú hamburguesa, header sticky con sombra al hacer scroll, scroll-reveal con IntersectionObserver
- `assets/gethics-icon.png` — logo real del proyecto (tomado del informe), usado como favicon y en el header/footer

No hay build step: al ser HTML/CSS/JS plano, Vercel lo sirve directo.

## Qué cambió respecto a la primera versión

Secciones nuevas, todas basadas en contenido real del informe (Capítulos 1 y 2), no inventado:

- **Para quién (Segmentos):** dos tarjetas — Ganaderos y Veterinarios/técnicos — con los datos reales de la investigación (tamaño de hato, edades, dispositivos).
- **Validado en campo:** reemplaza los testimonios genéricos por citas que describen el *problema* real que encontramos en las entrevistas exploratorias (cuadernos, doble digitación, falta de historial clínico a la mano) — no afirman que alguien ya usó la app, porque las entrevistas de validación (4.3.1) todavía no se han hecho.
- **Modelo de negocio:** reemplaza la tabla de precios inventados ("S/ XX") por el modelo real descrito en el Capítulo 1 — suscripción ajustada al tamaño del hato + licencias institucionales — sin montos inventados.
- **Equipo:** los 5 integrantes reales del equipo, tomados del informe.
- Logo real del proyecto (`GethicsIcon.png` del repo del informe) en vez de solo texto.
- Links reales en el footer a los repos del informe, app móvil y backend.

Polish visual/interacción (inspirado en la landing de referencia que me pasaste):
- Header que gana sombra al hacer scroll.
- Animación de aparición (fade + slide) en cada sección al hacer scroll.
- Flotación sutil en el mockup del Hero.
- Hover states en tarjetas (se levantan ligeramente) y botones.
- Respeta `prefers-reduced-motion` (desactiva animaciones si el usuario lo tiene activado en su sistema).

## Cómo actualizar el sitio ya desplegado

Tu repo y Vercel ya están conectados, así que solo necesitas actualizar los archivos y hacer push — Vercel vuelve a desplegar solo:

```bash
cd gethics-landing-page   # tu clon local
# copia/reemplaza index.html, styles.css, script.js, assets/ y README.md con los de este zip
git add .
git commit -m "Rediseño: secciones basadas en el informe + animaciones"
git push origin main
```

En ~30 segundos Vercel actualiza tu URL automáticamente.

## v4 — fotos reales (las que mandaste)

- Tarjeta **Ganaderos**: foto real de un ganadero con su hato en el campo.
- Tarjeta **Veterinarios**: foto real de un veterinario atendiendo a un ternero.
- Nueva franja **"Pensado desde el campo real"**: foto panorámica de hato + montañas, de fondo completo.
- Sección **Equipo**: las 5 fotos reales de ustedes, reemplazando los círculos con iniciales — esta sí es honesta al 100%, porque es literalmente el equipo.
- Las citas de "problema validado" se mantienen con ícono de rol (no foto), por la misma razón de siempre: nadie validó Gethics todavía.

## v3 — nivel "pro" (imágenes, tarjetas, dinamismo)

No usamos fotos de stock ni fotos generadas por IA de personas, por dos razones prácticas y una ética:

- Este entorno no tiene acceso a bancos de imágenes (Unsplash, Pexels, Wikimedia, etc. están bloqueados por política de red del sandbox), y la búsqueda de imágenes no me devuelve URLs usables para incrustar en el sitio.
- Aunque las consiguiera, poner una foto de una persona real (de stock o generada) junto a las citas de "problema validado" implicaría que esa persona específica ya usó/opinó sobre Gethics — y las entrevistas de validación (4.3.1) todavía no se han hecho. Eso rompe la misma honestidad que ya aplicamos al reformular testimonios y precios.

En su lugar, el nivel "pro" se logró con más contenido ilustrado (HTML/CSS/SVG, cero imágenes externas):

- **Mockup de app ilustrado:** el placeholder de texto en el Hero ahora es una pantalla de app dibujada en CSS (lista de animales con estado de color), igual que la propuesta visual ya mostrada en Figma 3.1.3.2.
- **Sección "Así se ve Gethics":** 3 teléfonos ilustrados (Inventario, Calendario, Alertas) a modo de showcase del producto.
- **Franja de cifras animadas:** 4 datos reales del informe (Cap. 1 y 2) con animación de conteo al hacer scroll.
- **Comparación "Hoy, sin Gethics" vs "Con Gethics":** tarjetas lado a lado con los mismos dolores reales de las entrevistas (cuaderno, doble digitación, historial no disponible) vs. el beneficio correspondiente.
- **Ícono-avatar por testimonio:** un ícono de rol (no una foto ni un nombre) en cada cita, para dar más peso visual sin fingir una identidad.
- Polish adicional: patrón de puntos decorativo, más profundidad en las tarjetas (hover + ícono que cambia de color), fondo degradado en la franja de cifras.

## Pendiente para antes de la entrega final

- El mockup de app en el Hero y en "Así se ve Gethics" es una ilustración (no una captura real): se puede reemplazar por capturas reales cuando los mock-ups de pantallas móviles (3.1.4) estén listos y la app tenga una build navegable.
- Los montos del modelo de negocio están pendientes de definición (mencionado explícitamente en la sección, no se inventó ningún número).
- Los links de Términos y Privacidad en el footer siguen sin una página real detrás — quedan como placeholders hasta que el equipo decida si los necesita para esta entrega.
