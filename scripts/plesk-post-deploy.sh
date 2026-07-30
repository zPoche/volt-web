#!/usr/bin/env bash
# Plesk → Git → Zusätzliche Bereitstellungsaktionen
# Empfohlener Aufruf in Plesk:
#   bash -x scripts/plesk-post-deploy.sh 2>&1 | tee -a plesk-deploy.log
set -euo pipefail

LOG_PREFIX="[volt]"
echo "$LOG_PREFIX start $(date -Is 2>/dev/null || date)"
echo "$LOG_PREFIX pwd=$(pwd)"
echo "$LOG_PREFIX PATH=$PATH"
ls -la | head -30 || true

# In Document Root wechseln, falls Plesk woanders startet
if [[ ! -f package.json && -f httpdocs/package.json ]]; then
  cd httpdocs
  echo "$LOG_PREFIX cd httpdocs → $(pwd)"
fi
if [[ ! -f package.json ]]; then
  # typische Plesk-Pfade
  for d in \
    "$HOME/httpdocs" \
    /var/www/vhosts/volt-erp.de/httpdocs \
    /var/www/vhosts/*/httpdocs
  do
    if [[ -f "$d/package.json" ]]; then
      cd "$d"
      echo "$LOG_PREFIX cd $d"
      break
    fi
  done
fi

ROOT="$(pwd)"
echo "$LOG_PREFIX ROOT=$ROOT"

if [[ ! -f "$ROOT/package.json" ]]; then
  echo "$LOG_PREFIX FEHLER: package.json nicht gefunden. Falsches Arbeitsverzeichnis."
  exit 1
fi

# Node von Plesk einsammeln
for b in /opt/plesk/node/*/bin; do
  [[ -d "$b" ]] && export PATH="$b:$PATH"
done
export PATH="$HOME/nodevenv/*/bin:$PATH"

if ! command -v node >/dev/null 2>&1; then
  cat <<EOF
$LOG_PREFIX FEHLER: node nicht im PATH der Git-Deploy-Shell.
→ In Plesk „Node.js“ für die Domain aktivieren
  ODER fertiges ZIP deployen (kein Build auf dem Server):
  pnpm pack:dist → volt-web-dist.zip nach httpdocs entpacken
EOF
  exit 1
fi

echo "$LOG_PREFIX node=$(command -v node) $(node -v)"
echo "$LOG_PREFIX npm=$(command -v npm || true) $(npm -v 2>/dev/null || true)"

PKG=npm
if command -v corepack >/dev/null 2>&1; then
  corepack enable >/dev/null 2>&1 || true
  corepack prepare pnpm@9.15.9 --activate >/dev/null 2>&1 || true
fi
if command -v pnpm >/dev/null 2>&1; then
  PKG=pnpm
fi
echo "$LOG_PREFIX using $PKG"

if [[ "$PKG" == "pnpm" ]]; then
  pnpm install --frozen-lockfile || pnpm install
  pnpm build
else
  npm ci || npm install
  npm run build
fi

test -f dist/index.html

echo "$LOG_PREFIX publish dist/ → $ROOT"
TMP="$(mktemp -d)"
cp -a dist/. "$TMP/"
find "$ROOT" -mindepth 1 -maxdepth 1 ! -name '.git' ! -name 'plesk-deploy.log' -exec rm -rf {} +
cp -a "$TMP"/. "$ROOT"/
rm -rf "$TMP"
rm -rf "$ROOT/src" "$ROOT/node_modules" 2>/dev/null || true

grep -q 'assets/' "$ROOT/index.html"
echo "$LOG_PREFIX OK — Live sollte ./assets/… laden"
ls -la "$ROOT" | head -25
