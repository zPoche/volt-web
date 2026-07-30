#!/usr/bin/env bash
# Erzeugt volt-web-dist.zip — Inhalt direkt nach Plesk httpdocs entpacken.
set -euo pipefail
cd "$(dirname "$0")/.."
pnpm install
pnpm build
rm -f volt-web-dist.zip
(cd dist && zip -r ../volt-web-dist.zip .)
echo ""
echo "Fertig: $(pwd)/volt-web-dist.zip"
echo "In Plesk: ZIP in httpdocs entpacken (index.html + assets/ + .htaccess)."
echo "Nicht das Repo-Root hochladen."
