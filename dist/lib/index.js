'use strict';

// src/foo.js
var foo = 'hello world!';

var version = "1.0.0";

// src/index.js
function index () {
  console.log(foo);
  console.log('version2341 woshi123 --->',version);
}

module.exports = index;
