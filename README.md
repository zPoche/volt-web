# volt-web

Öffentliche Produkt-Website für **Volt** — Designsprache am echten ERP ausgerichtet.

## Design

Markenfarbe und Wordmark bleiben am ERP ausgerichtet. Die Marketing-Site darf
expressiver sein (Glass, Display-Typo, Atmosphere) — ohne die Teal-Marke zu
verlassen.

| Token | Wert |
| --- | --- |
| Font | Plus Jakarta Sans |
| Primary | `#2dd4bf` (wie ERP Dark) |
| Background | `#080c14` (Marketing-Ink, tiefer als ERP `.dark`) |
| Card / Glass | `#121b2a` + `.volt-glass` |
| Logo | Lucide `Zap` + „Volt“ (wie `VoltLogo` in der App) |
| Typo | `.text-display` / `.text-section` + `.text-highlight` / `.eyebrow` |
| Radius / Look | `rounded-xl` / `rounded-2xl`, Glass + Soft-Bloom |

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

**Wichtig:** Nicht das Git-Repo hochladen. Browser können `.tsx` nicht ausführen.
Nur den **Build** (`dist/`) gehört nach `httpdocs`.

### Schnell (empfohlen)

**Option A — fertiges ZIP (ohne Build auf dem Server):**

```sh
pnpm pack:dist
```

Erzeugt `volt-web-dist.zip`. In Plesk nach `httpdocs` hochladen und **entpacken**.
Alte Dateien vorher leeren (`src/`, `package.json`, `node_modules/` weg).

Nach jedem Push auf `main` baut GitHub Actions ebenfalls `volt-web-dist.zip`
(Artifact + Release „Deploy package“).

**Option B — Plesk Git, nur pullen (empfohlen):**

`dist/` liegt im Repo; CI aktualisiert ihn bei Push auf `main`. Siehe **[PLESK.md](./PLESK.md)**.

Am einfachsten in Plesk:

1. Document Root → **`httpdocs/dist`**
2. Git Auto-Deploy auf `main` — **keine** Build-Zusatzaktion nötig

Fertig: pullen = live.

### Manuell

```sh
pnpm install
pnpm build
```

Inhalt von `dist/` nach `httpdocs` kopieren:

- `index.html` (muss `./assets/index-….js` referenzieren — **nicht** `/src/main.tsx`)
- Ordner `assets/`
- `.htaccess`, `favicon.svg`, …

### Check im Browser (DevTools → Netzwerk)

| Gut | Falsch (aktueller Fehler) |
| --- | --- |
| `./assets/index-xxxxx.js` lädt mit 200 | `/src/main.tsx` → MIME-Fehler, Seite weiß |

### Typische Fehler

| Symptom | Ursache |
| --- | --- |
| Splash weg, dann weiß | Repo-Root deployed statt `dist/` |
| Ladeanimation bleibt ewig | Alte Version / JS 404 |
| 404 auf Assets | `assets/`-Ordner fehlt auf dem Server |

## Hinweis

Marketing-Site — getrennt vom ERP-Monorepo. Keine Secrets, kein Backend.
