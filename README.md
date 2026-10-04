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

## Pendiente para antes de la entrega final

- El bloque "Mockup de la app (pantalla real)" dentro del Hero es un placeholder intencional: se reemplaza por una captura real de la app cuando los mock-ups de pantallas móviles (3.1.4) estén listos.
- Los montos del modelo de negocio están pendientes de definición (mencionado explícitamente en la sección, no se inventó ningún número).
- Los links de Términos y Privacidad en el footer siguen sin una página real detrás — quedan como placeholders hasta que el equipo decida si los necesita para esta entrega.
