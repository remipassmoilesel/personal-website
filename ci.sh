#!/usr/bin/env bash

set -e

export CI=true
npm config set cache .npm-cache

npm install
npm run format
npm run build:frontend
npm run build:pdf
