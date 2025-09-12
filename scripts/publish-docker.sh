#!/usr/bin/env bash

set -x
set -e

export CI=true
export DOCKER_TAG="registry.gitlab.com/remipassmoilesel/personal-website/personal-website:0.19"

pnpm install
pnpm run build:cv:en
pnpm run build:cv:fr

docker build . -t $DOCKER_TAG
docker push $DOCKER_TAG
