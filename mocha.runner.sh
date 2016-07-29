#!/usr/bin/env bash
DEBUG=*$1* BABEL_ENV=test mocha --require mocha-setup.js --compilers js:babel-core/register --watch `find src -name "$1.spec.js" | xargs`