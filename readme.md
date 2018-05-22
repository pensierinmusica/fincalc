# Fincalc

[![Travis](https://img.shields.io/travis/pensierinmusica/fincalc.svg)](https://travis-ci.com/pensierinmusica/fincalc)
[![Coveralls](https://img.shields.io/coveralls/pensierinmusica/fincalc.svg)](https://coveralls.io/r/pensierinmusica/fincalc)
[![npm](https://img.shields.io/npm/v/fincalc.svg)](https://www.npmjs.com/package/fincalc)
[![David](https://img.shields.io/david/pensierinmusica/fincalc.svg)](https://www.npmjs.com/package/fincalc)

## Introduction

Fincalc is a helper to perform **proper basic arithmetic operations with monetary values in JavaScript**, or else two decimal precision arithmetic in a [floating point scenario](http://stackoverflow.com/questions/2876536/precise-financial-calculation-in-javascript-what-are-the-gotchas). It also offers a utility to calculate the **percentual variation between two values**. It comes as a [**Bower**](http://bower.io) and [**npm**](http://npmjs.org) module that can be respectively imported in your front-end scripts for the **browser**, or in **NodeJS**.

## Install

#### Back-end
`npm install fincalc`

(add "--save" if you want the module to be automatically added to your project's "package.json" dependencies)

`var fin = require(fincalc)`

#### Front-end
`bower install fincalc`

(add "--save" if you want the module to be automatically added to your project's "bower.json" dependencies)

`<script src="bower_components/fincalc/fincalc.js"></script>`

(keep in mind this script will define an object "fin" that contains the methods described below, and might conflict if your scope contains another variable with the same name, or an object named "module" with a truthy "exports" key).

## Why
#### The problem
Fincalc is made to fix a simple problem with JavaScript [floating point operations](http://stackoverflow.com/questions/2876536/precise-financial-calculation-in-javascript-what-are-the-gotchas).

Try this in your JavaScript console:

`0.1 + 0.2` returns `0.30000000000000004`

`2.18 * 100` returns `218.00000000000003`

#### The solution
`fin(0.1 + 0.2)` returns `0.3`

`fin(2.18 * 100)` returns `218`

## API
Fincalc methods accept numbers (or string representation of them) as input, and return a single number rounded up to two decimal precision (i.e. to the money cent).

#### Rounding
`fin(x)`

Where **x** can be a number or an arithmetic operation:

```javascript
fin(893.15784) // -> 893.16
fin(148.4528 + 9285.8864) // -> 9434.34
fin(2.18 * 200) // -> 436
fin(100 / 3) // -> 33.33
```

#### Calculate percentual variation
`fin.pervar(x, y)`

Returns the percentual variation between two values.

```javascript
fin.pervar(456.12, 487.35) // -> 6.85
fin.pervar(23, 21) // -> -8.7
```


***

MIT License
