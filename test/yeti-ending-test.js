const chai = require('chai');
const assert = chai.assert;

const Yeti = require('../app/lib/yeti');
const Skier = require('../app/lib/skier');
var yetiEnding = require('../app/lib/yeti-ending');

describe('yetiEnding', function() {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should set the yeti to aggressive under the right circumstances', function() {
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var image = new Image();
    image.src = 'images/sprites.png';
    skier.distance = 30500;
    (function doLotsOfTimes(count) {
      if (count < 10000) {
        yetiEnding(skier, yeti, image);
        count += 1;
        doLotsOfTimes(count);
      }
    })(0);
    assert.strictEqual(yeti.aggressive, true);
  });
});
