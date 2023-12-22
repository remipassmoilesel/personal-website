#!/usr/bin/env bash

set -x
set -e

export CI=true

pnpm config set store-dir .pnpm-store
pnpm install
pnpm run lint
pnpm run build

