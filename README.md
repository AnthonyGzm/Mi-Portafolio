# Anthony Guzman — Portfolio

Portafolio personal de Anthony Guzman, desarrollador Full Stack. Construido con React, Vite y Tailwind CSS.

**Demo:** https://anthonyguzman.vercel.app

## Stack

- React 18 + Vite 5
- Tailwind CSS
- Framer Motion
- EmailJS (formulario de contacto)
- Lucide React (iconos)

## Requisitos

- Node.js 18+

## Setup local

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

| Variable | Descripción |
|---|---|
| `VITE_MAINTENANCE_MODE` | `true` muestra la página de mantenimiento en vez del sitio. |
| `VITE_EMAILJS_SERVICE_ID` | Service ID de tu cuenta de [EmailJS](https://www.emailjs.com/). |
| `VITE_EMAILJS_TEMPLATE_ID` | Template ID del formulario de contacto. |
| `VITE_EMAILJS_PUBLIC_KEY` | Public key de EmailJS. |

Las variables `VITE_EMAILJS_*` son necesarias para que el formulario de contacto pueda enviar correos. En el dashboard de EmailJS, restringe los "Allowed Origins" al dominio de producción para evitar abuso.

## Scripts

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción -> dist/
npm run preview   # sirve el build de producción localmente
```

## Despliegue (Vercel)

El sitio se despliega automáticamente en Vercel al hacer push a `main`. Las variables de entorno se configuran en **Settings → Environment Variables** del proyecto en Vercel (deben marcarse para el ambiente **Production**).

Como Vite incrusta las variables `VITE_*` en el bundle durante el build, cualquier cambio a una variable de entorno requiere un **Redeploy** desde el dashboard de Vercel con **"Use existing Build Cache" desmarcado** para que tome el nuevo valor.

## Licencia

Ver [LICENSE](LICENSE).
