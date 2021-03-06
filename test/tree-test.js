const chai = require('chai');
const assert = chai.assert;

const Tree = require('../app/lib/tree');

describe('Tree', function () {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    this.image = new Image ();
    this.image.src = 'images/skifree-objects.png';
  });

  it('should be an object', function() {
    let tree = new Tree({ canvas: this.canvas, context: this.context });
    assert.isObject(tree);
  });

  it('should have an X-coordinate', function() {
    let tree = new Tree({ canvas: this.canvas, context: this.context });
    assert.isDefined(tree.x, 'x coordinate has been defined');
  });

  it('should have a random X-coordinate', function() {
    let tree1 = new Tree({ canvas: this.canvas, context: this.context });
    let tree2 = new Tree({ canvas: this.canvas, context: this.context });
    assert.notStrictEqual(tree1.x, tree2.x);
  });

  it('should have a Y-coordinate', function() {
    let tree = new Tree({ canvas: this.canvas, context: this.context });
    assert.strictEqual(tree.y, 600);
  });

  it('should have a width', function() {
    let tree = new Tree({ canvas: this.canvas, context: this.context });
    assert.ok(tree.width);
  });

  it('should have a height', function() {
    let tree = new Tree({ canvas: this.canvas, context: this.context });
    assert.ok(tree.height);
  });

  it('should be able to go', function() {
    let tree = new Tree({ canvas: this.canvas, context: this.context });
    var increasedSpeed = 0;
    var speedBoost = 0;
    var originalY = tree.y;
    tree.go(this.image, increasedSpeed, speedBoost);

    assert.strictEqual(tree.y, originalY - (3.5 + increasedSpeed));
  });

  it('should be able to stop', function () {
    let tree = new Tree({ canvas: this.canvas, context: this.context });
    var originalY = tree.y;
    tree.stop(this.image);

    assert.strictEqual(tree.y, originalY);
  });
});
