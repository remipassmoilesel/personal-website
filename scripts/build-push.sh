#!/usr/bin/env bash

set -e

DOCKER_TAG="registry.gitlab.com/remipassmoilesel/personal-website/personal-website:0.1"

npm ci --cache .npm-cache --prefer-offline
npm run format
npm run build

docker build . -t $DOCKER_TAG
docker push $DOCKER_TAG
