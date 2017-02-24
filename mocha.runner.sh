#!/usr/bin/env bash
DEBUG=*$1* BABEL_ENV=mocha mocha --require mocha-setup.js --compilers js:babel-core/register --watch `find __tests__/mocha -name "$1.spec.js" | xargs`