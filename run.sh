#!/usr/bin/env bash

docker build . --tag fed
docker run -it --rm --privileged -p 8080:8080 --name fed fed
