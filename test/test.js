/**
 * Fizz Buzz
 * f(x)
 * if x is a multiple of 3, return "fizz"
 * if x is a multiple of 5, return "buzz"
 * if x is a multiple of 3 and 5, return "fizzbuzz"
 * if x is neither a multiple of 3 or 5, return x
 */

const assert = require('assert');
const fizzbuzz = require('../index');

describe('FizzBuzz', () => {
  describe('multiples of 3', () => {
    it('should return "fizz" if 3 is passed in', () => {
      let whatFizzBuzzReturnsWhenIPassIn3 = fizzbuzz(3);
      assert.equal("fizz", whatFizzBuzzReturnsWhenIPassIn3);
    });
    it('should return "fizz" if 6 is passed in', () => {
      assert.equal("fizz", fizzbuzz(6));
    });
    it('should return 7 if 7 is passed in', () => {
      assert.equal(7, fizzbuzz(7));
    })
    it('should return 8 if 8 is passed in', () => {
      assert.equal(8, fizzbuzz(8));
    })
  });
  describe('multiples of 5', () => {
    it('should return "buzz" if 5 is passed in', () => {
      assert.equal("buzz", fizzbuzz(5));
    });
    it('should return "buzz" if 25 is passed in', () => {
      assert.equal("buzz", fizzbuzz(25));
    });
    it('should return 26 if 26 is passed in', () => {
      assert.equal(26, fizzbuzz(26));
    });
    it('should return 28 if 28 is passed in', () => {
      assert.equal(28, fizzbuzz(28));
    });
  });
  describe('multiples of 3 and 5', () => {
    it('should return "fizzbuzz" if 15 is passed in', () => {
      assert.equal("fizzbuzz", fizzbuzz(15));
    });
  })
});