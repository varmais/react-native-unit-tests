#!/usr/bin/env bash
DEBUG=*$1* mocha --require react-native-mock/mock.js --compilers js:babel-core/register --watch `find tests -name "$1.spec.js" | xargs`