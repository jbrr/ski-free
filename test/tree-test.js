const chai = require('chai');
const assert = chai.assert;

const Tree = require('../app/lib/tree');

describe('Tree', function () {

  it('should be an object', function() {
    let tree = new Tree({ maxWidth: 600});
    assert.isObject(tree);
  });

  it('should have an X-coordinate', function() {
    let tree = new Tree({ maxWidth: 600});
    assert.strictEqual(tree.x, 300);
  });

  it('should have a Y-coordinate', function() {
    let tree = new Tree({ maxWidth: 600});
    assert.strictEqual(tree.y, 600);
  });

  it('should have a width', function() {
    let tree = new Tree({ maxWidth: 600});
    assert.strictEqual(tree.width, 10);
  });

  it('should have a height', function() {
    let tree = new Tree({ maxWidth: 600});
    assert.strictEqual(tree.height, 10);
  });

});
