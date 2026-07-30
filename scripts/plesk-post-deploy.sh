#!/usr/bin/env bash
# Läuft in Plesk unter: Git → Zusätzliche Bereitstellungsaktionen
# Voraussetzung: Repo wird nach httpdocs deployed (Serverpfad = httpdocs)
set -euo pipefail

ROOT="$(pwd)"
echo "[volt] Plesk post-deploy in: $ROOT"

# Node finden (Plesk legt oft Versionen unter /opt/plesk/node ab)
export PATH="/opt/plesk/node/22/bin:/opt/plesk/node/20/bin:/opt/plesk/node/18/bin:$HOME/.local/share/pnpm:$PATH"

if ! command -v node >/dev/null 2>&1; then
  echo "[volt] FEHLER: node nicht gefunden. In Plesk Node.js aktivieren oder ZIP-Deploy nutzen."
  exit 1
fi

echo "[volt] node $(node -v) / npm $(npm -v 2>/dev/null || echo '?')"

# pnpm bevorzugen, sonst npm
if command -v pnpm >/dev/null 2>&1; then
  PKG=pnpm
elif command -v corepack >/dev/null 2>&1; then
  corepack enable >/dev/null 2>&1 || true
  corepack prepare pnpm@latest --activate >/dev/null 2>&1 || true
  PKG=pnpm
else
  PKG=npm
fi

echo "[volt] package manager: $PKG"

if [[ "$PKG" == "pnpm" ]]; then
  pnpm install --frozen-lockfile || pnpm install
  pnpm build
else
  npm ci || npm install
  npm run build
fi

if [[ ! -f dist/index.html ]]; then
  echo "[volt] FEHLER: dist/index.html fehlt nach dem Build"
  exit 1
fi

# Build nach Document-Root legen, Quellcode aus dem Webroot entfernen
echo "[volt] dist/ → Document Root"
TMP="$(mktemp -d)"
cp -a dist/. "$TMP/"

# Alles im Webroot außer .git entfernen, dann Build hinein
find "$ROOT" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a "$TMP"/. "$ROOT"/
rm -rf "$TMP"

# Sicherstellen, dass kein /src/main.tsx mehr ausgeliefert wird
if [[ -e "$ROOT/src" ]]; then
  rm -rf "$ROOT/src"
fi

if ! grep -q 'assets/' "$ROOT/index.html"; then
  echo "[volt] FEHLER: index.html referenziert keine assets/ — Deploy abgebrochen"
  exit 1
fi

echo "[volt] Fertig. index.html nutzt ./assets/…"
ls -la "$ROOT" | head -20
