#!/usr/bin/env sh

START_DIR=$(pwd)

echo $START_DIR

cd $START_DIR/backend
./mvnw clean verify -DskipTests
cd $START_DIR/frontend
yarn
yarn generateApiClient


