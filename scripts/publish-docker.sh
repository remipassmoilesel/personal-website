#!/usr/bin/env bash

set -x
set -e

export CI=true
export DOCKER_TAG="registry.gitlab.com/remipassmoilesel/personal-website/personal-website:0.17"

pnpm install
pnpm run lint
pnpm run build

docker build . -t $DOCKER_TAG
docker push $DOCKER_TAG
