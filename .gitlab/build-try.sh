#!/usr/bin/env bash

set -e

IMAGE_NAME="registry.gitlab.com/remipassmoilesel/personal-website/build-image:0.10"

docker build . -t $IMAGE_NAME
docker run -v "$(pwd)/..:/build" -ti $IMAGE_NAME bash
