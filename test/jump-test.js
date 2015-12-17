const chai = require('chai');
const assert = chai.assert;

const Jump = require('../app/lib/jump');

describe('Jump', function () {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    this.image = new Image ();
    this.image.src = 'images/skifree-objects.png';
  });

  it('should be an object', function() {
    let jump = new Jump({ canvas: this.canvas, context: this.context });
    assert.isObject(jump);
  });

  it('should have an X-coordinate', function() {
    let jump = new Jump({ canvas: this.canvas, context: this.context });
    assert.isDefined(jump.x, 'x coordinate has been defined');
  });

  it('should have a random X-coordinate', function() {
    let jump1 = new Jump({ canvas: this.canvas, context: this.context });
    let jump2 = new Jump({ canvas: this.canvas, context: this.context });
    assert.notStrictEqual(jump1.x, jump2.x);
  });

  it('should have a Y-coordinate', function() {
    let jump = new Jump({ canvas: this.canvas, context: this.context });
    assert.strictEqual(jump.y, 600);
  });

  it('should have a width', function() {
    let jump = new Jump({ canvas: this.canvas, context: this.context });
    assert.ok(jump.width);
  });

  it('should have a height', function() {
    let jump = new Jump({ canvas: this.canvas, context: this.context });
    assert.ok(jump.height);
  });

  it('should be able to go', function() {
    let jump = new Jump({ canvas: this.canvas, context: this.context });
    var increasedSpeed = 0;
    var speedBoost = 0;
    var originalY = jump.y;
    jump.go(this.image, increasedSpeed, speedBoost);

    assert.strictEqual(jump.y, originalY - (3.5 + increasedSpeed));
  });

  it('should be able to stop', function () {
    let jump = new Jump({ canvas: this.canvas, context: this.context });
    var originalY = jump.y;
    jump.stop(this.image);

    assert.strictEqual(jump.y, originalY);
  });
});
