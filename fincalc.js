'use strict';

var fin = function (num) {
  return Math.round(num * 100) / 100;
};

fin.pervar = function (a, b) {
  return fin(((b / a) - 1) * 100);
};

// Hack to use same file in npm and Bower
typeof module !== 'undefined' && typeof module.exports !== 'undefined' && (module.exports = fin);
