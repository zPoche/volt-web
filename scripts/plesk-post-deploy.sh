#!/bin/bash
# Plesk Git → Zusätzliche Bereitstellungsaktionen
#
# In Plesk EINEN Befehl eintragen (eine Zeile / mit PATH=…):
#   bash scripts/plesk-post-deploy.sh 2>&1 | tee -a plesk-deploy.log
#
# Wichtig: Git-Deploy-Shell hat oft KEIN node im PATH → wir setzen
#   /opt/plesk/node/*/bin explizit.
set -e

echo "[volt] $(date -Is 2>/dev/null || date)"
echo "[volt] pwd=$(pwd) user=$(whoami)"

# Node von Plesk in PATH (Git-Hook sieht sonst nur /usr/bin:/bin)
NODE_BIN=""
for d in /opt/plesk/node/*/bin; do
  if [ -x "$d/node" ]; then
    NODE_BIN="$d"
  fi
done
# Domain-lokales nodenv (manche Plesk-Setups)
for d in "$HOME"/.nodenv/shims /var/www/vhosts/*/nodevenv/*/bin; do
  if [ -x "$d/node" ] 2>/dev/null || [ -x "${d%/shims}/versions" ] 2>/dev/null; then
    export PATH="$d:$PATH"
  fi
done

if [ -n "$NODE_BIN" ]; then
  export PATH="$NODE_BIN:$PATH"
fi

echo "[volt] PATH=$PATH"
echo "[volt] node=$(command -v node || echo FEHLT) npm=$(command -v npm || echo FEHLT)"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "[volt] FEHLER: node/npm nicht gefunden."
  echo "[volt] → Domains → volt-erp.de → Node.js aktivieren (Version wählen)"
  echo "[volt] → Hosting & DNS → SSH-Zugang: /bin/bash (nicht chrooted)"
  echo "[volt] → ls /opt/plesk/node/  sollte Versionen zeigen"
  exit 1
fi

echo "[volt] $(node -v) / npm $(npm -v)"

# Arbeitsverzeichnis = App-Root mit package.json
if [ ! -f package.json ]; then
  for d in \
    "$HOME/httpdocs" \
    /var/www/vhosts/volt-erp.de/httpdocs \
    /var/www/vhosts/*/httpdocs
  do
    if [ -f "$d/package.json" ]; then
      cd "$d"
      break
    fi
  done
fi

if [ ! -f package.json ]; then
  echo "[volt] FEHLER: package.json nicht gefunden (cwd=$(pwd))"
  exit 1
fi

echo "[volt] app root=$(pwd)"

# DevDependencies werden für Vite-Build gebraucht
npm install --include=dev
npm run build

if [ ! -f dist/index.html ]; then
  echo "[volt] FEHLER: dist/index.html fehlt"
  exit 1
fi

# Passenger / Plesk Node.js neu starten
mkdir -p tmp
touch tmp/restart.txt

echo "[volt] OK — dist/ gebaut, Passenger restart getriggert"
ls -la dist | head -20
