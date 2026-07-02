#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MESSAGE="${1:-Update website}"
REMOTE_URL="${CHENGQUAN_DEPLOY_REMOTE:-https://github.com/linsunjie2016-dotcom/chengquan-website.git}"
REMOTE_SUBDIR="${CHENGQUAN_DEPLOY_SUBDIR:-chengquan-website}"
WORK_DIR="$ROOT/.deploy-worktree"

cd "$ROOT"

"$ROOT/scripts/check-site.sh"

if ! git config user.name >/dev/null 2>&1 && ! git config --global user.name >/dev/null 2>&1; then
  git config --global user.name "linsunjie2016-dotcom"
fi

if ! git config user.email >/dev/null 2>&1 && ! git config --global user.email >/dev/null 2>&1; then
  git config --global user.email "linsunjie2016-dotcom@users.noreply.github.com"
fi

rm -rf "$WORK_DIR"
git clone --depth 1 --filter=blob:none "$REMOTE_URL" "$WORK_DIR"

mkdir -p "$WORK_DIR/$REMOTE_SUBDIR"

rsync -a --delete \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude 'deploy' \
  --exclude '.deploy-worktree' \
  "$ROOT/" "$WORK_DIR/$REMOTE_SUBDIR/"

cd "$WORK_DIR"
git add "$REMOTE_SUBDIR"

if git diff --cached --quiet; then
  echo "No website changes to publish."
  exit 0
fi

git status --short
git commit -m "$MESSAGE"
git push origin HEAD

echo "Published. Cloudflare Pages will deploy from GitHub."
