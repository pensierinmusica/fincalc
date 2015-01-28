'use strict';

var fin = {
  sum: function (a, b) {
    return Math.round(a.toFixed(2) * 100 + b.toFixed(2) * 100) / 100;
  },
  sub: function (a, b) {
    return Math.round(a.toFixed(2) * 100 - b.toFixed(2) * 100) / 100;
  },
  mul: function (a, b) {
    return Math.round((a.toFixed(2) * 100) * (b.toFixed(2) * 100)) / 10000;
  },
  div: function (a, b) {
    return Math.round(((a.toFixed(2) * 100) / (b.toFixed(2) * 100)) * 100) / 100;
  },
  round: function (num) {
    return Math.round(num * 100) / 100;
  },
  pervar: function (a, b) {
    return fin.round(((b / a) - 1) * 100);
  }
};

// Hack to use same file in npm and Bower
!(typeof module === 'undefined') && !(typeof module.exports === 'undefined') && (module.exports = fin);