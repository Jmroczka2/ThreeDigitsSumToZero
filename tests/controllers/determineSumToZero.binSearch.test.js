const chai = require('chai');
const sumToZeroController = require('../../controllers/determineSumToZero.binSearch.js');

const expect = chai.expect; // eslint-disable-line prefer-destructuring

describe('determineSumToZero.binSearch.js', function () {
  context('when the function \'determineSumToZero\' is called on the array [1, 2, 3, -4]', function () {
    const sumToZeroResults = sumToZeroController([1, 2, 3, -4]);

    it('should return an array with three elements', function () {
      expect(sumToZeroResults).to.be.an('array').that.has.lengthOf(3);
    });
    it('should return [1, 3, -4]', function () {
      expect(sumToZeroResults.reduce((num, sum) => sum + num, 0)).to.equal(0);
    });
  });

  context('when the function \'determineSumToZero\' is called on the array [0]', function () {
    const sumToZeroResults = sumToZeroController([0]);

    it('should return an array with three elements', function () {
      expect(sumToZeroResults).to.be.an('array').that.has.lengthOf(3);
    });
    it('should return [0, 0, 0]', function () {
      expect(sumToZeroResults.reduce((num, sum) => sum + num, 0)).to.equal(0);
    });
  });

  context('when the function \'determineSumToZero\' is called on the array [7, -100, 50, -12, 50, 9]', function () {
    const sumToZeroResults = sumToZeroController([7, -100, 50, -12, 50, 9]);

    it('should return an array with three elements', function () {
      expect(sumToZeroResults).to.be.an('array').that.has.lengthOf(3);
    });
    it('should return [-100, 50, 50]', function () {
      expect(sumToZeroResults.reduce((num, sum) => sum + num, 0)).to.equal(0);
    });
  });

  context('when the function \'determineSumToZero\' is called on the array []', function () {
    const sumToZeroResults = sumToZeroController([]);

    it('should return an empty array', function () {
      expect(sumToZeroResults).to.be.an('array').that.has.lengthOf(0);
    });
  });
});
