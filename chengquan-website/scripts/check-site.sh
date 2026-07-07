#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "Checking required files..."
for file in \
  index.html about.html services.html cases.html aw-agents.html internal.html join.html contact.html global.html \
  _headers robots.txt sitemap.xml assets/styles.css assets/aw-packages.js assets/accio-guide.js assets/internal-dashboard.js assets/business-agent-library.js
do
  if [ ! -f "$ROOT/$file" ]; then
    echo "Missing: $file" >&2
    exit 1
  fi
done

echo "Checking JavaScript syntax..."
node --check "$ROOT/assets/accio-guide.js" >/dev/null
node --check "$ROOT/assets/aw-packages.js" >/dev/null
node --check "$ROOT/assets/internal-dashboard.js" >/dev/null
node --check "$ROOT/assets/business-agent-library.js" >/dev/null

echo "Checking AI tools page..."
if grep -q '<script src="assets/aw-packages.js"' "$ROOT/aw-agents.html"; then
  echo "aw-packages.js should not load before password unlock." >&2
  exit 1
fi

if grep -q '<script src="assets/business-agent-library.js"' "$ROOT/aw-agents.html"; then
  echo "business-agent-library.js should not load before password unlock." >&2
  exit 1
fi

if grep -q '可下载智能体' "$ROOT/aw-agents.html"; then
  echo "AI tools page should not show downloadable agent count before unlock." >&2
  exit 1
fi

if grep -q '诊断' "$ROOT/aw-agents.html" "$ROOT/assets/accio-guide.js"; then
  echo "AI tools page or guide still contains the disallowed word." >&2
  exit 1
fi

echo "Checking home page..."
if grep -Eq 'Boss|岗位|正在招募|投递|客户经理招聘' "$ROOT/index.html"; then
  echo "Home page still contains recruiting content." >&2
  exit 1
fi

echo "Checking internal page..."
if grep -q '<script src="assets/internal-dashboard.js"' "$ROOT/internal.html"; then
  echo "internal-dashboard.js should not load before password unlock." >&2
  exit 1
fi

if ! grep -q 'PASSWORD = "cqyy"' "$ROOT/internal.html"; then
  echo "Internal page password gate is missing or changed." >&2
  exit 1
fi

if grep -q 'internal.html' "$ROOT/sitemap.xml"; then
  echo "Internal page should not be listed in sitemap.xml." >&2
  exit 1
fi

echo "OK"
