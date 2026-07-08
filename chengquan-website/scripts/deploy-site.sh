#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MESSAGE="${1:-Update Chengquan website}"
REMOTE_URL="${CHENGQUAN_DEPLOY_REMOTE:-git@github.com:linsunjie2016-dotcom/chengquan-website.git}"
REMOTE_SUBDIR="${CHENGQUAN_DEPLOY_SUBDIR:-chengquan-website}"
BRANCHES="${CHENGQUAN_DEPLOY_BRANCHES:-main cloudflare/workers-autoconfig}"
SSH_KEY="${CHENGQUAN_DEPLOY_SSH_KEY:-$HOME/.ssh/chengquan_website_deploy_ed25519}"
GITHUB_REPO="${CHENGQUAN_GITHUB_REPO:-linsunjie2016-dotcom/chengquan-website}"
PRIMARY_BRANCH="${CHENGQUAN_PRIMARY_BRANCH:-main}"
MAIN_COMMIT=""

cd "$ROOT"

"$ROOT/scripts/check-site.sh"

if [ -f "$SSH_KEY" ]; then
  export GIT_SSH_COMMAND="ssh -i $SSH_KEY -o IdentitiesOnly=yes"
fi

publish_branch() {
  local branch="$1"
  local safe_branch="${branch//\//-}"
  local work_dir="$ROOT/.deploy-worktree-$safe_branch"

  rm -rf "$work_dir"
  git clone --depth 1 --filter=blob:none --single-branch --branch "$branch" "$REMOTE_URL" "$work_dir"

  mkdir -p "$work_dir/$REMOTE_SUBDIR"

  rsync -a --delete \
    --exclude '.git' \
    --exclude '.DS_Store' \
    --exclude '.wrangler' \
    --exclude 'deploy' \
    --exclude '.deploy-worktree' \
    --exclude '.deploy-worktree-*' \
    "$ROOT/" "$work_dir/$REMOTE_SUBDIR/"

  cd "$work_dir"
  git config user.name "linsunjie2016-dotcom"
  git config user.email "linsunjie2016-dotcom@users.noreply.github.com"
  git add "$REMOTE_SUBDIR"

  if git diff --cached --quiet; then
    echo "No website changes for $branch."
  else
    git status --short
    git commit -m "$MESSAGE"
    git push origin "HEAD:$branch"
  fi

  local commit
  commit="$(git rev-parse HEAD)"
  if [ "$branch" = "$PRIMARY_BRANCH" ]; then
    MAIN_COMMIT="$commit"
  fi

  cd "$ROOT"
}

wait_for_cloudflare_build() {
  local commit="$1"
  local api_url="https://api.github.com/repos/$GITHUB_REPO/commits/$commit/check-runs"
  local i result status conclusion name

  if ! command -v curl >/dev/null 2>&1 || ! command -v node >/dev/null 2>&1; then
    echo "Skip Cloudflare check polling: curl or node is unavailable."
    return 0
  fi

  echo "Waiting for Cloudflare Workers build on $commit..."
  for i in $(seq 1 36); do
    result="$(
      curl -fsS -H 'Accept: application/vnd.github+json' "$api_url" 2>/dev/null | node -e '
let s = "";
process.stdin.on("data", d => s += d);
process.stdin.on("end", () => {
  try {
    const j = JSON.parse(s);
    const r = (j.check_runs || []).find(x => (x.name || "").includes("Workers Builds"));
    if (!r) return console.log("missing||");
    console.log([r.name, r.status || "", r.conclusion || ""].join("|"));
  } catch {
    console.log("parse-error||");
  }
});
' || true
    )"

    IFS='|' read -r name status conclusion <<< "$result"
    if [ "$status" = "completed" ] && [ "$conclusion" = "success" ]; then
      echo "Cloudflare build succeeded."
      return 0
    fi
    if [ "$status" = "completed" ] && [ "$conclusion" != "success" ]; then
      echo "Cloudflare build failed: $result" >&2
      return 1
    fi
    sleep 5
  done

  echo "Cloudflare build did not finish in time. Check GitHub Actions/Checks manually." >&2
  return 1
}

for branch in $BRANCHES; do
  publish_branch "$branch"
done

if [ -n "$MAIN_COMMIT" ]; then
  wait_for_cloudflare_build "$MAIN_COMMIT"
fi

echo "Published Chengquan website."
