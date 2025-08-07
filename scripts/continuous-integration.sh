#!/usr/bin/env bash

set -x
set -e

export CI=true

corepack enable
pnpm config set store-dir .pnpm-store

pnpm install
pnpm run format
pnpm run build:cv:en
pnpm run build:cv:fr

# If this command fail, you should format and commit the result.
git diff --exit-code

set +x
echo "Done 🥳"
