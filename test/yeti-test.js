const chai = require('chai');
const assert = chai.assert;

const Yeti = require('../app/lib/yeti');
const Skier = require('../app/lib/skier');
var hypotenuse = require('../app/lib/collision/hypotenuse');

describe('Yeti', function () {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should be an object', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });

    assert.isObject(yeti);
  });

  it('should have an x coordinate', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });

    assert.ok(yeti.x);
  });

  it('should have a y coordinate', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });

    assert.ok(yeti.y);
  });

  it('should have a height', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });

    assert.ok(yeti.height);
  });

  it('should have a width', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });

    assert.ok(yeti.width);
  });

  it('should not be aggressive by default', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });

    assert.strictEqual(yeti.aggressive, false);
  });

  it('should be able to move towards the skier', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var originalDistance = hypotenuse(skier, yeti);
    yeti.attack(skier);

    assert.isBelow(hypotenuse(skier, yeti), originalDistance);
  });
});
