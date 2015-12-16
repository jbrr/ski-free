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

  it('should increment yeti\'s animation position', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    var originalPosition = yeti.position;
    animateYeti.posYeti(yeti);

    assert.isAbove(yeti.position, originalPosition);
  });
});
