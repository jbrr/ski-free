const chai = require('chai');
const assert = chai.assert;

var hypotenuse = require('../app/lib/hypotenuse');

describe('Hypotenuse', function() {
  it('should return the distance between two objects', function() {
    var obj1 = { x: 50, y: 50, width: 10 };
    var obj2 = { x: 40, y: 40, width: 10 };

    assert.strictEqual(hypotenuse(obj1, obj2), 14.142135623730951);
  });
});
