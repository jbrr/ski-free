const chai = require('chai');
const assert = chai.assert;

var arrayContainsObject = require('../app/lib/array-contains-object');

describe('ArrayContainsObject', function() {
  it('should return true if object is in array', function() {
    let obj1 = { test: 'test' };
    let array = [];
    array.push(obj1);

    assert.strictEqual(arrayContainsObject(obj1, array), true);
  });

  it('should return false if object is not in array', function() {
    let obj1 = { test: 'test' };
    let obj2 = { pizza: 'sausage' };
    let array = [];
    array.push(obj1);

    assert.strictEqual(arrayContainsObject(obj2, array), false);
  });
});
