// 2-calcul_chai test cases

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Additional Edge Cases', function () {
    it('should return 0 when dividing 0 by 4.5', function () {
      expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
    });

    it('should return -1 when inputs are -0.5 and 0.5 with SUBTRACT', function () {
      expect(calculateNumber('SUBTRACT', -0.5, 0.5)).to.equal(-1);
    });

    it('should return 3 when inputs are 1.5 and 0.5 with SUM', function () {
      expect(calculateNumber('SUM', 1.5, 0.5)).to.equal(3);
    });
  });
});
