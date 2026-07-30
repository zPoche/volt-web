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

**Option B — Plesk Git (automatisch aus `main`):**

In **Git → Einstellungen von volt-web**:

1. Bereitstellungsmodus: **Automatisch** (bleibt)
2. Serverpfad: `httpdocs` / `/volt-erp.de/httpdocs` (bleibt)
3. **Zusätzliche Bereitstellungsaktionen aktivieren** ← anhaken
4. Befehl eintragen (mit Log):

```sh
bash -x scripts/plesk-post-deploy.sh 2>&1 | tee -a plesk-deploy.log
```

5. **Anwenden**, dann Deploy. Bei Warnung-Dreieck: `httpdocs/plesk-deploy.log` lesen.

Das Skript macht `install` → `build` → legt `dist/` nach `httpdocs` und entfernt `src/`.

**Voraussetzung:** Plesk-Erweiterung **Node.js** für die Domain (18+).  
Orange Warnung / leeres Log-Fenster = meist kein `node` in der Git-Shell → dann **Option A (ZIP)**, kein Build auf dem Server.

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
