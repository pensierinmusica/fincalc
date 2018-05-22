'use strict';

const fin = num => Math.round(num * 100) / 100;

fin.pervar = (a, b) => fin(((b / a) - 1) * 100);

// Allow the same file to be used as Node module and in the browser
typeof module !== 'undefined' && typeof module.exports !== 'undefined' && (module.exports = fin);
