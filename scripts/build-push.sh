#!/usr/bin/env bash

DOCKER_TAG="registry.gitlab.com/remipassmoilesel/personal-website/personal-website:0.1"

npm ci --cache .npm-cache --prefer-offline
npm run build:frontend
npm run build:pdf

docker build . -t $DOCKER_TAG
docker push $DOCKER_TAG
