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

## Stack

- React 19, Vite, TypeScript, Tailwind 4, Lucide, Motion
- `pnpm`

## Entwicklung

```sh
pnpm install
pnpm dev
```

```sh
pnpm build
pnpm preview
```

## Deploy auf Plesk

**Wichtig:** Nicht das Repo-Root hochladen — nur den Inhalt von `dist/` nach dem Build.

1. Lokal (oder CI):

```sh
pnpm install
pnpm build
```

2. In Plesk ins **Document Root** der Domain (z. B. `httpdocs`) den **Inhalt** von `dist/` hochladen:
   - `index.html`
   - `assets/` (JS + CSS)
   - `favicon.svg`, `icons.svg`, `blitz.html`
   - `.htaccess` (Apache MIME + SPA-Fallback)

3. Nicht hochladen: `src/`, `node_modules/`, `package.json` — die Site ist rein statisch.

4. Hard-Reload im Browser (Cache). Die Blitz-Animation darf max. ~2,5 s sichtbar sein; danach erscheint die Seite auch wenn Fonts/JS zäh sind.

### Typische Fehler

| Symptom | Ursache |
| --- | --- |
| Ladeanimation bleibt ewig | Alte Version ohne Failsafe, oder JS-Bundle 404 (falscher Ordner) |
| Weiße Seite / kein JS | `src/` statt `dist/` deployed, oder fehlende `assets/` |
| 404 auf `/assets/...` | Alte absolute Pfade — Build nutzt jetzt `base: './'` |

## Hinweis

Marketing-Site — getrennt vom ERP-Monorepo. Keine Secrets, kein Backend.
