const chai = require('chai');
const assert = chai.assert;

var yetiCollision = require('../app/lib/collision/yeti-collision');
const Skier = require('../app/lib/skier');
const Yeti = require('../app/lib/yeti');

describe('yetiCollsion', function() {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should report false if yeti and skier are not colliding', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    yeti.x = 100; yeti.y = 100;

    assert.strictEqual(yetiCollision(skier, yeti), false);
  });

  it('should report true if yeti and skier are colliding', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var yeti = new Yeti({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    yeti.x = 50; yeti.y = 50;

    assert.strictEqual(yetiCollision(skier, yeti), true);
  });
});
