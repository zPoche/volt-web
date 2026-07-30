# Plesk: nur pullen → Site läuft

Ziel: **Git pull / Auto-Deploy** — fertig. Kein manuelles `pnpm build` auf dem Server.

Dafür liegt der fertige Build im Repo unter **`dist/`** (CI aktualisiert ihn bei jedem Push auf `main`).

## Empfohlen (ohne Node-Build auf dem Server)

### A) Document Root = `dist` (am einfachsten)

1. **Git** deployed nach `httpdocs` (wie bisher), Branch `main`, Automatisch  
2. **Keine** zusätzlichen Bereitstellungsaktionen nötig  
3. **Hosting-Einstellungen → Document Root** auf:

```text
httpdocs/dist
```

(oder bei dir: `/volt-erp.de/httpdocs/dist`)

4. Speichern, einmal deployen / Hard-Reload  

Apache liefert direkt den Build. Pull = live.

### B) Document Root bleibt `httpdocs`

Git → Zusatzaktion aktivieren, **nur** dieser Befehl (kein Node):

```sh
bash scripts/plesk-publish-dist.sh 2>&1 | tee -a plesk-deploy.log
```

Kopiert `dist/` nach `httpdocs` und entfernt `src/`.

---

## Optional: Node.js

Nur nötig, wenn du `server.js` nutzen willst. Startup File: `server.js`.  
Für die Marketing-Site reicht Variante A oder B.

## Check

Nach Deploy in `index.html` (die, die der Browser lädt):

- gut: `./assets/index-….js`
- schlecht: `/src/main.tsx` → dann Document Root / Publish-Skript prüfen
