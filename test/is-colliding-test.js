const chai = require('chai');
const assert = chai.assert;

var isColliding = require('../app/lib/collision/is-colliding');
const Skier = require('../app/lib/skier');
const Tree = require('../app/lib/tree');

describe('isColliding', function() {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should report if there is a collision', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var obstacle = new Tree({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    obstacle.x = 50; obstacle.y = 50;

    assert.strictEqual(skier.crashed, false);

    isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, true);
  });

  it('should report if there is no collision', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var obstacle = new Tree({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    obstacle.x = 50; obstacle.y = 30;
    isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, false);
  });

  it('should report based on the skiers width', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var obstacle = new Tree({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    obstacle.x = 50; obstacle.y = skier.y - skier.width - 5;
    isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, false);

    obstacle.y = skier.y - skier.width;
    isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, false);

    obstacle.y = skier.y - skier.width + 2;
    isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, true);
  });
});
