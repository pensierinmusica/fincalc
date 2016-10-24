'use strict';

require('chai').should();

const fin = require('../fincalc.js');

describe('fincalc', () => {

  describe('round', () => {

    it('should round a numeric value correctly to two decimals', () => {
      fin(893.15784).should.equal(893.16);
      fin(148.4528 + 9285.8864).should.equal(9434.34);
      fin(2.18 * 200).should.equal(436);
      fin(100 / 3).should.equal(33.33);
    });

  });

  describe('pervar', () => {

    it('should calculate correctly the percentual variation between two values, up to two decimals', () => {
      fin.pervar(456.12, 487.35).should.equal(6.85);
      fin.pervar(23, 21).should.equal(-8.7);
    });

  });

});
