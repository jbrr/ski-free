const chai = require('chai');
const assert = chai.assert;

const Skier = require('../app/lib/skier');

describe('Skier', function () {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should be an object', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.isObject(skier);
  });

  it('should have an X-coordinate', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.ok(skier.x);
  });

  it('should have a Y-coordinate', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.ok(skier.y);
  });

  it('should have a width', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.ok(skier.width);
  });

  it('should have a height', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.ok(skier.height);
  });

  it('should have five lives', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.strictEqual(skier.lives, 5);
  });

  it('should not be crashed by default', function () {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.strictEqual(skier.crashed, false);
  });

  it('should have a default distance of 0', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.strictEqual(skier.distance, 0);
  });

  it('should not be turning left by default', function () {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.strictEqual(skier.turningLeft, false);
  });

  it('should not be turning right by default', function () {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.strictEqual(skier.turningRight, false);
  });

  it('should not be jumping by default', function() {
    let skier = new Skier({ canvas: this.canvas, context: this.context});

    assert.strictEqual(skier.jumping, false);
  });

  describe('moveLeft', function() {
    it('should move the skier left', function() {
      let skier = new Skier({ canvas: this.canvas, context: this.context});
      let skier2 = skier.moveLeft();

      assert.isTrue(skier2.x < skier.maxWidth/2);
    });
  });

  describe('moveRight', function() {
    it('should move the skier right', function() {
      let skier = new Skier({ canvas: this.canvas, context: this.context});
      let skier2 = skier.moveRight();

      assert.isTrue(skier2.x > skier.maxWidth/2);
    });
  });

});
