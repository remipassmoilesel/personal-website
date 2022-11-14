#!/usr/bin/env bash

set -e

export CI=true

npm ci --cache .npm-cache --prefer-offline
npm run format
npm run build

