# volt-web

Öffentliche Produkt-Website für **Volt** — Designsprache am echten ERP ausgerichtet.

## Design (Source of Truth: Volt ERP)

| Token | Wert |
| --- | --- |
| Font | Plus Jakarta Sans |
| Primary | `#14b8a6` (Türkis) |
| Background | `#f9fafb` |
| Logo | Lucide `Zap` + „Volt“ (wie `VoltLogo` in der App) |
| Radius / Look | flach, `rounded-xl` / `rounded-lg`, wenig Schatten |

Tokens liegen in `src/index.css` und spiegeln `apps/frontend/src/styles/globals.css` aus dem Monorepo `volt`.

## Stack

- React 19, Vite 7/8, TypeScript, Tailwind 4, Lucide
- `pnpm` (wie Volt)

## Entwicklung

```sh
pnpm install
pnpm dev
```

Build:

```sh
pnpm build
pnpm preview
```

## Hinweis Deploy

Marketing-Site — getrennt vom ERP-Monorepo. Keine Secrets, kein Backend-Zugriff auf Kundendaten.
