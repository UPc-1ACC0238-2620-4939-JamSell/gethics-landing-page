# Gethics — Landing Page

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step) que implementa el diseño "Warm" aprobado en 3.1.3.2, responsive de desktop a mobile.

## Archivos

- `index.html` — contenido y estructura
- `styles.css` — estilos y breakpoints responsive (mobile en `max-width: 768px`)
- `script.js` — toggle del menú hamburguesa en mobile
- `assets/favicon.svg` — ícono de pestaña

No hay build step: al ser HTML/CSS/JS plano, Vercel lo sirve directo.

## Cómo subirlo al repo

Desde la raíz de tu clon local de `gethics-landing-page`:

```bash
# copia estos archivos (index.html, styles.css, script.js, assets/, README.md)
# a la raíz del repo, reemplazando lo que exista

git add .
git commit -m "Add landing page (Warm design, 3.1.3.2)"
git push origin main
```

Si el repo está vacío, esto también funciona:

```bash
git clone https://github.com/UPc-1ACC0238-2620-4939-JamSell/gethics-landing-page.git
cd gethics-landing-page
# copia estos archivos aquí dentro
git add .
git commit -m "Add landing page (Warm design, 3.1.3.2)"
git push origin main
```

## Cómo desplegarlo en Vercel (según 4.1.1)

**Opción recomendada — conectar el repo de GitHub (deploys automáticos):**

1. Entra a [vercel.com](https://vercel.com) con la cuenta del equipo (o la tuya) e inicia sesión con GitHub.
2. **Add New... → Project**.
3. Selecciona el repo `gethics-landing-page` (si no aparece, dale acceso a Vercel desde la configuración de GitHub → Applications → Vercel).
4. En **Framework Preset** elige **Other** (es HTML plano, no necesita build command ni output directory especiales — Vercel lo detecta solo).
5. **Deploy**. En ~30 segundos tendrás una URL tipo `gethics-landing-page.vercel.app`.
6. Cada push a `main` vuelve a desplegar automáticamente.

**Alternativa — Vercel CLI (deploy manual desde tu máquina):**

```bash
npm i -g vercel
cd gethics-landing-page
vercel        # primer deploy (preview), te pedirá login
vercel --prod # deploy a producción
```

## Pendiente para antes de la entrega final

- El bloque "Mockup de la app (pantalla real)" dentro del Hero es un placeholder intencional (documentado en 3.1.3.2): se reemplaza por una captura real de la app cuando los mock-ups de pantallas móviles (3.1.4) estén listos.
- Los íconos de Funcionalidades, el precio de los planes Pro/Finca ("S/ XX") y los links del footer (Términos, Privacidad, Centro de ayuda) quedan como placeholders de contenido hasta que el equipo defina esos valores.
