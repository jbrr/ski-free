const chai = require('chai');
const assert = chai.assert;

const Yeti = require('../app/lib/yeti');
const Skier = require('../app/lib/skier');
var animateYeti = require('../app/lib/animate-yeti');

describe('animateYeti', function() {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should increment yeti\'s running animation position', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    var originalPosition = yeti.position;
    animateYeti.posYeti(yeti);

    assert.isAbove(yeti.position, originalPosition);
  });

  it('should set yeti\'s position to 0 if it is above 16', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    yeti.position = 16;
    animateYeti.posYeti(yeti);

    assert.strictEqual(yeti.position, 0);
  });

  it('should increment yeti\'s eating animation position', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    var originalEating = yeti.eating;
    animateYeti.eatingYeti(yeti);

    assert.isAbove(yeti.eating, originalEating);
  });

  it('should set yeti\'s eating animation to 0 if it is above 50', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    yeti.eating = 50;
    animateYeti.eatingYeti(yeti);

    assert.strictEqual(yeti.eating, 0);
  });
});
