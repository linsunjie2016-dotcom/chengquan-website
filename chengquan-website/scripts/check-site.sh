#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "Checking required files..."
for file in \
  index.html about.html services.html cases.html team.html aw-agents.html insights.html join.html contact.html global.html \
  _headers _redirects robots.txt sitemap.xml assets/styles.css assets/jack-executive-v2.jpg assets/aw-packages.js assets/accio-guide.js assets/business-agent-library.js assets/jack-skill-library.js \
  downloads/jack-skills/alibaba-product-6images.md downloads/jack-skills/b2b-factory-market-positioning.md downloads/jack-skills/international-station-training-mentor.md
do
  if [ ! -f "$ROOT/$file" ]; then
    echo "Missing: $file" >&2
    exit 1
  fi
done

echo "Checking JavaScript syntax..."
node --check "$ROOT/assets/accio-guide.js" >/dev/null
node --check "$ROOT/assets/aw-packages.js" >/dev/null
node --check "$ROOT/assets/business-agent-library.js" >/dev/null
node --check "$ROOT/assets/jack-skill-library.js" >/dev/null

echo "Checking AI tools page..."
if grep -q '<script src="assets/aw-packages.js"' "$ROOT/aw-agents.html"; then
  echo "aw-packages.js should not load before password unlock." >&2
  exit 1
fi

if grep -q '<script src="assets/business-agent-library.js"' "$ROOT/aw-agents.html"; then
  echo "business-agent-library.js should not load before password unlock." >&2
  exit 1
fi

if grep -q '<script src="assets/jack-skill-library.js"' "$ROOT/aw-agents.html"; then
  echo "jack-skill-library.js should not load before password unlock." >&2
  exit 1
fi

if ! grep -q 'JACK_PASSWORD = "JackAI"' "$ROOT/aw-agents.html"; then
  echo "Jack skill library password gate is missing or changed." >&2
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

echo "Checking public navigation..."
if grep -R -E -q \
  --include='*.html' --include='*.css' --include='*.js' --include='robots.txt' --include='_headers' \
  --exclude-dir=deploy --exclude='.DS_Store' \
  'internal\.html|内部入口|internal-dashboard\.js' "$ROOT"; then
  echo "Removed internal entry is still referenced by the public site." >&2
  exit 1
fi

for page in index.html about.html services.html cases.html team.html aw-agents.html insights.html join.html contact.html global.html; do
  if ! grep -q 'href="/team"' "$ROOT/$page" || ! grep -q 'href="/insights"' "$ROOT/$page"; then
    echo "New navigation is missing from $page." >&2
    exit 1
  fi
done

echo "Checking canonical URLs..."
while IFS='|' read -r page path; do
  if ! grep -q "<link rel=\"canonical\" href=\"https://www.chengquanai.com${path}\"" "$ROOT/$page"; then
    echo "Canonical URL is incorrect in $page." >&2
    exit 1
  fi
done <<'EOF'
index.html|/
about.html|/about
services.html|/services
cases.html|/cases
team.html|/team
aw-agents.html|/aw-agents
insights.html|/insights
join.html|/join
contact.html|/contact
global.html|/global
EOF

if grep -E -q 'href="(index|about|services|cases|team|aw-agents|insights|join|contact|global)\.html' "$ROOT"/*.html; then
  echo "A public internal link still points to an HTML redirect URL." >&2
  exit 1
fi

if grep -qE '<loc>https://www\.chengquanai\.com/[^<]+\.html</loc>' "$ROOT/sitemap.xml"; then
  echo "Sitemap still contains redirect URLs." >&2
  exit 1
fi

if ! grep -q '^/index\.html / 301$' "$ROOT/_redirects" || \
   ! grep -q '^/about\.html /about 301$' "$ROOT/_redirects" || \
   ! grep -q '^/aw-agents\.html /aw-agents 301$' "$ROOT/_redirects"; then
  echo "Permanent canonical redirects are incomplete." >&2
  exit 1
fi

echo "OK"
