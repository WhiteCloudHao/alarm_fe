#!/bin/bash

# Set environment variables
export SSH_USER=dep
export SSH_HOST=192.168.0.86
export IMAGE_TAG=itodo

#Remove old container and old version image
ssh $SSH_USER@$SSH_HOST "docker rm -f $IMAGE_TAG ; docker rmi -f $IMAGE_TAG"
# Load Docker image
docker save $IMAGE_TAG | gzip | ssh $SSH_USER@$SSH_HOST "gunzip -f | docker load"
# Start Docker container
ssh $SSH_USER@$SSH_HOST "docker-compose -f /home/dep/itodo/docker-compose.yml up -d"



