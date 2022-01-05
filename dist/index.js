'use strict';

var lodashEs = require('lodash-es');

// src/foo.js
var foo = 'hello world!';

// src/index.js
// import isArray from 'lodash/isArray';

function index () {
  if (lodashEs.isArray([])) {
    console.log(foo);
    console.log('1 --->',1);
    console.log('2 --->',2);
  }
  console.log('3 --->',3);
  // console.log('version2341 woshi123 --->',version);
}

module.exports = index;
