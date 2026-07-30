# Plesk: Git + Node.js für volt-web

Ja — mit **Git und Node.js** auf Plesk geht das. Der Build bleibt nötig
(Browser versteht kein `.tsx`), läuft aber **automatisch bei jedem Deploy**.

## 1) Node.js (Domain)

**Websites & Domains → volt-erp.de → Node.js**

| Einstellung | Wert |
| --- | --- |
| Node.js | **Aktivieren** |
| Node.js-Version | 18 / 20 / 22 |
| Application Root | `httpdocs` (wo Git hin deployed) |
| Application Startup File | `server.js` |
| Application Mode | `production` |
| Document Root | oft `httpdocs/public` oder laut Plesk — bei unserem Setup reicht Startup `server.js` (serviert `dist/`) |

Danach **NPM install** einmal manuell in der Node.js-UI ist optional; Git-Hook macht das.

## 2) SSH (wichtig für Git-Hooks)

**Hosting & DNS → SSH-Zugang** (oder Web Hosting Access):

- Zugang: **`/bin/bash`**
- **nicht** „chrooted“ — sonst findet der Git-Hook oft kein `/opt/plesk/node/…`

## 3) Git

**Git → Einstellungen von volt-web**

| Einstellung | Wert |
| --- | --- |
| Branch | `main` |
| Bereitstellungsmodus | Automatisch |
| Serverpfad | `httpdocs` |
| Zusätzliche Bereitstellungsaktionen | **aktivieren** |

Befehl (komplett so einfügen):

```sh
(export PATH="/opt/plesk/node/22/bin:/opt/plesk/node/20/bin:/opt/plesk/node/18/bin:$PATH"; bash scripts/plesk-post-deploy.sh) 2>&1 | tee -a plesk-deploy.log
```

Node-Version anpassen, falls bei dir z. B. nur `21` existiert  
(`ls /opt/plesk/node/` per SSH).

## 4) Deploy auslösen

Push auf `main` oder in Plesk **Deploy**.

Erfolg:
- `httpdocs/dist/` existiert
- `httpdocs/plesk-deploy.log` endet mit `OK — dist/ gebaut`
- volt-erp.de zeigt die Site (nicht „Deploy-Fehler“)

## Ablauf

1. Git legt Repo nach `httpdocs`
2. Hook: `npm install` + `npm run build` → `dist/`
3. `tmp/restart.txt` → Passenger startet `server.js` neu
4. `server.js` liefert `dist/` aus

## Wenn die Aktion wieder orange warn’t

Log lesen: `httpdocs/plesk-deploy.log`

| Meldung | Fix |
| --- | --- |
| `node/npm nicht gefunden` | Node.js aktivieren, SSH `/bin/bash`, PATH in Befehl prüfen |
| Build-Fehler TypeScript/Vite | Log-Ausschnitt prüfen, Node ≥ 18 |
| Site noch Deploy-Fehler | Hook lief nicht / altes Deploy — erneut deployen |
