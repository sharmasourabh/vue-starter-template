# Vue starter template [![Build Status](https://travis-ci.org/sharmasourabh/vue-starter-template.svg?branch=master)](https://travis-ci.org/sharmasourabh/vue-starter-template) [![Dependency Status](https://david-dm.org/sharmasourabh/vue-starter-template.svg?branch=master)](https://david-dm.org/sharmasourabh/vue-starter-template.svg)

A simple, useful and opinionated vue starter template. This template uses bulma with font-awesome for UI components.

## Packages
Please check package.json for updated list

1. `vue`
1. `vue-router`: Official router of vue.js
1. `vue-server-renderer`: Official offers Node.js server-side rendering for Vue 2.0
1. `vuex`: Official Centralized State Management for Vue.js
1. `vuex-router-sync`: Official Sync vue-router's current $route as part of vuex store's state.
1. `vee-validate`: For form validation
1. `bulma`: For UI
1. `axios`: For HTTP client
1. `moment`: Parse, validate, manipulate, and display dates and times
1. `moment-timezone`: Parse and display dates in any timezone
1. `accounting`: Provides simple and advanced number, money and currency formatting
1. `lodash`: Utility library delivering modularity, performance & extras
1. `flag-icon-css`: For flag icons
1. `idle-timeout`: Makes idle state detection in the browser
1. `popper.js`: Easily position tooltips, popovers or anything with just a line of code

## Testing Packages

- Unit Testing: `jasmine`
- Unit Test Runner: `karma`
- Unit Test Coverage: `istanabul`
- End 2 End Test: `testcafe`

## Build Setup

Uses webpack, babel etc.

``` bash
# install dependencies
yarn install

# Start mock server (json-server) from mock_server directory
node server.js

# Unit test and code coverage
yarn run test

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

## E2E Tests

Uses test-cafe and testcafe-vue-selectors

``` bash
# Please make sure that mock server (json-server) is up before performing e2e testing. If not, start from mock_server directory
node server.js

# Run e2e from project home dir
yarn run e2e

```