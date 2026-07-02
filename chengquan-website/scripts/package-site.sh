#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/deploy"
DATE_STAMP="$(date +%Y%m%d-%H%M)"
ZIP_NAME="chengquan-website-$DATE_STAMP.zip"

"$ROOT/scripts/check-site.sh"

mkdir -p "$OUT_DIR"
cd "$(dirname "$ROOT")"
zip -qr "$OUT_DIR/$ZIP_NAME" "$(basename "$ROOT")" \
  -x '*/.DS_Store' \
  -x '*/deploy/*' \
  -x '*/.git/*'

echo "$OUT_DIR/$ZIP_NAME"
