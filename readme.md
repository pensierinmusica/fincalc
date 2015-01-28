# Fincalc

## Introduction

Fincalc is a helper to perform **proper basic arithmetic operations with monetary values in JavaScript**, or else two decimal precision arithmetic in a [floating point scenario](http://stackoverflow.com/questions/2876536/precise-financial-calculation-in-javascript-what-are-the-gotchas). It comes as a [**Bower**](http://bower.io) and [**npm**](http://npmjs.org) module that can be respectively imported in your front-end scripts for the **browser**, or in **NodeJS**.

## Install

##### Back-end
`npm install fincalc`

(add "--save" if you want the module to be automatically added to your project's "package.json" dependencies)

`var fin = require(fincalc)`

##### Front-end
`bower install fincalc`

(add "--save" if you want the module to be automatically added to your project's "bower.json" dependencies)

`<script src="bower_components/fincalc/fincalc.js"></script>`

(keep in mind this script will define an object "fin" that contains the methods described below, and might conflict if your scope contains another variable with the same name, or an object named "module" with a truthy "exports" key).

## Why
##### The problem
Fincalc is made to fix a simple problem with JavaScript [floating point operations](http://stackoverflow.com/questions/2876536/precise-financial-calculation-in-javascript-what-are-the-gotchas).

Try this in your JavaScript console:

`0.1 + 0.2` returns `0.30000000000000004`

`2.18 * 100` returns `218.00000000000003`

##### The solution
`fin.sum(0.1, 0.2)` returns `0.3`

`fin.mul(2.18, 100)` returns `218`

## API
Fincalc methods accept numbers (or string representation of them) as input, and returns a single number rounded up to two decimal precision (i.e. to the money cent).

##### Sum
`fin.sum(a, b)`

##### Subtract
`fin.sub(a, b)`

##### Multiply
`fin.mul(a, b)`

##### Divide
`fin.div(a, b)`

##### Round
`fin.round(num)`

##### Percentual variation
`fin.pervar(a, b)`

***

MIT License