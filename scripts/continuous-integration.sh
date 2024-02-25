#!/usr/bin/env bash

set -x
set -e

export CI=true
export XDG_RUNTIME_DIR=/tmp/personal-website-runtime-dir

pnpm config set store-dir .pnpm-store
pnpm install
pnpm run lint
pnpm run build

set +x
echo "Done 🥳"