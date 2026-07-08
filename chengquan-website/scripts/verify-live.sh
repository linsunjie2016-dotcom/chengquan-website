#!/usr/bin/env bash
set -euo pipefail

SITE_URL="${CHENGQUAN_SITE_URL:-https://www.chengquanai.com}"
PATH_TO_CHECK="${1:-/}"
shift || true
TRIES="${CHENGQUAN_VERIFY_TRIES:-18}"
SLEEP_SECONDS="${CHENGQUAN_VERIFY_SLEEP:-5}"

if [[ "$PATH_TO_CHECK" != /* ]]; then
  PATH_TO_CHECK="/$PATH_TO_CHECK"
fi

URL="$SITE_URL$PATH_TO_CHECK"

if [ "$#" -eq 0 ]; then
  echo "Usage: scripts/verify-live.sh /about \"must contain\" \"!must not contain\""
  exit 2
fi

check_once() {
  local html="$1"
  local pattern
  for pattern in "$@"; do
    if [[ "$pattern" == "$html" ]]; then
      continue
    fi
    if [[ "$pattern" == !* ]]; then
      local absent="${pattern:1}"
      if grep -Fq "$absent" "$html"; then
        echo "Found forbidden text: $absent" >&2
        return 1
      fi
    else
      if ! grep -Fq "$pattern" "$html"; then
        echo "Missing required text: $pattern" >&2
        return 1
      fi
    fi
  done
}

for i in $(seq 1 "$TRIES"); do
  tmp_file="$(mktemp)"
  if curl -L -fsS -H 'Cache-Control: no-cache' "$URL?cachebust=$(date +%s)-$i" > "$tmp_file"; then
    if check_once "$tmp_file" "$@"; then
      rm -f "$tmp_file"
      echo "Live verification passed: $URL"
      exit 0
    fi
  fi
  rm -f "$tmp_file"
  sleep "$SLEEP_SECONDS"
done

echo "Live verification failed after $TRIES attempts: $URL" >&2
exit 1
