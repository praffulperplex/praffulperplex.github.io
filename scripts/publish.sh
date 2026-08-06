#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
npm run build
touch dist/.nojekyll
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp -R dist/. "$TMP/"
cd "$TMP"
git init -b main
git add -A
git -c user.name='Prafful Kumar Singh' -c user.email='praffulkumarsingh08@gmail.com' commit -m "Publish portfolio static site."
git remote add origin https://github.com/praffulperplex/praffulperplex.github.io.git
git push -f origin main
echo "Published → https://praffulperplex.github.io"
