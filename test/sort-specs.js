const { expect } = require('chai');

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const bubbleSort = require("../bubble-sort.js");

describe('Basic Sorting Algorithms', function () {

  let arr;
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = chai.spy.on(console, 'log');
    arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
  });

  afterEach(() => {
    chai.spy.restore(console, 'log');
  });

  it('performs a bubble sort', function () {

    bubbleSort(arr);

    expect(consoleSpy).on.nth(1).be.called.with('2,4,6,1,3,5,7,8,9');
    expect(consoleSpy).on.nth(2).be.called.with('2,4,1,3,5,6,7,8,9');
    expect(consoleSpy).on.nth(3).be.called.with('2,1,3,4,5,6,7,8,9');
    expect(consoleSpy).on.nth(4).be.called.with('1,2,3,4,5,6,7,8,9');
  });
});

