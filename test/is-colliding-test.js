const chai = require('chai');
const assert = chai.assert;

var isColliding = require('../app/lib/collision/is-colliding');
const Skier = require('../app/lib/skier');
const Tree = require('../app/lib/tree');
const Jump = require('../app/lib/jump');

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

    isColliding.isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, true);
  });

  it('should decrement the skier\'s lives by one on collision', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var obstacle = new Tree({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    obstacle.x = 50; obstacle.y = 50;
    var originalLives = skier.lives;
    isColliding.isColliding(skier, obstacle);

    assert.isBelow(skier.lives, originalLives);
  });

  it('should report if there is no collision', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var obstacle = new Tree({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    obstacle.x = 50; obstacle.y = 30;
    isColliding.isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, false);
  });

  it('should report based on the skiers width', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var obstacle = new Tree({ canvas: this.canvas, context: this.context });
    skier.x = 50; skier.y = 50;
    obstacle.x = 50; obstacle.y = skier.y - skier.width - 5;
    isColliding.isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, false);

    obstacle.y = skier.y - skier.width;
    isColliding.isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, false);

    obstacle.y = skier.y - skier.width + 2;
    isColliding.isColliding(skier, obstacle);

    assert.strictEqual(skier.crashed, true);
  });
  describe('crashed', function() {
    it('should add obstacles to collisionObstacles after collision', function () {
      var skier = new Skier({ canvas: this.canvas, context: this.context });
      var obstacle = new Tree({ canvas: this.canvas, context: this.context });
      var collisionObstacles = [];
      skier.x = 50; skier.y = 50;
      obstacle.x = 50; obstacle.y = 50;
      isColliding.crashed(skier, obstacle, collisionObstacles);

      assert.deepEqual(collisionObstacles[0], obstacle);
    });

    it('should not be able to collide with obstacles in collisionObstacles', function() {
      var skier = new Skier({ canvas: this.canvas, context: this.context });
      var obstacle = new Tree({ canvas: this.canvas, context: this.context });
      var collisionObstacles = [];
      skier.x = 50; skier.y = 50;
      obstacle.x = 50; obstacle.y = 50;
      collisionObstacles.push(obstacle);
      var originalLives = skier.lives;
      isColliding.crashed(skier, obstacle, collisionObstacles);

      assert.strictEqual(originalLives, skier.lives);
    });
  });

  describe('jump', function() {
    it('should set jumping to true if obstacle is a jump', function() {
      var skier = new Skier({ canvas: this.canvas, context: this.context });
      var obstacle = new Jump({ canvas: this.canvas, context: this.context });
      skier.x = 50; skier.y = 50;
      obstacle.x = 50; obstacle.y = 50;
      isColliding.isColliding(skier, obstacle);

      assert.strictEqual(skier.jumping, true);
    });

    it('should not set jumping to true if obstacle is not a jump', function() {
      var skier = new Skier({ canvas: this.canvas, context: this.context });
      var obstacle = new Tree({ canvas: this.canvas, context: this.context });
      skier.x = 50; skier.y = 50;
      obstacle.x = 50; obstacle.y = 50;
      isColliding.isColliding(skier, obstacle);

      assert.strictEqual(skier.jumping, false);
    });
  });
});
