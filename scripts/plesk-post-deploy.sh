#!/bin/bash
# Alias: bevorzugt Publish ohne Node (dist liegt im Repo).
# Wenn dist fehlt: versucht npm-Build mit Plesk-Node-PATH.
set -e
cd "$(dirname "$0")/.." 2>/dev/null || true

if [ -f dist/index.html ] && grep -q 'assets/' dist/index.html; then
  exec bash scripts/plesk-publish-dist.sh "$@"
fi

echo "[volt] dist/ fehlt — versuche Build mit Plesk-Node…"
for d in /opt/plesk/node/*/bin; do
  [ -x "$d/node" ] && export PATH="$d:$PATH"
done
if ! command -v npm >/dev/null 2>&1; then
  echo "[volt] FEHLER: weder dist/ noch npm. Document Root auf httpdocs/dist setzen oder CI-dist pullen."
  exit 1
fi
npm install --include=dev
npm run build
exec bash scripts/plesk-publish-dist.sh
