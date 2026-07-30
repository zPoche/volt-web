#!/bin/bash
# Plesk Git — OHNE Node/npm: legt den mitgelieferten dist/-Build live.
# Zusatzaktion in Plesk:
#   bash scripts/plesk-publish-dist.sh 2>&1 | tee -a plesk-deploy.log
set -e

echo "[volt] publish dist $(date -Is 2>/dev/null || date)"
echo "[volt] pwd=$(pwd)"

if [ ! -f dist/index.html ]; then
  echo "[volt] FEHLER: dist/index.html fehlt im Repo. CI/Build auf main prüfen."
  exit 1
fi

if ! grep -q 'assets/' dist/index.html; then
  echo "[volt] FEHLER: dist/index.html ist kein Vite-Build"
  exit 1
fi

# Build-Dateien nach Document Root (httpdocs) — ersetzt Quell-index.html
cp -a dist/. ./

# Aufräumen, damit Apache nicht wieder Quellcode ausliefert
rm -rf src node_modules 2>/dev/null || true

mkdir -p tmp
touch tmp/restart.txt

echo "[volt] OK — Live-index nutzt assets/"
grep -o 'src="[^"]*assets[^"]*"' index.html | head -3
ls -la | head -25
