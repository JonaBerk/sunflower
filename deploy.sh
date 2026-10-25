#!/bin/bash
# Veröffentlicht den aktuellen Stand von ~/website auf jonathanberkmann.eu
set -e
cd ~/website
grep -qx "deploy.sh" .gitignore || echo "deploy.sh" >> .gitignore
git add -A
if git diff --cached --quiet; then echo "Keine Änderungen."; exit 0; fi
git commit -m "Update $(date +%Y-%m-%d)"
git push origin main
echo ""
echo "Fertig. In 1-2 Minuten ist die neue Version online."
