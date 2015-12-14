const chai = require('chai');
const assert = chai.assert;

const Skier = require('../app/lib/skier');
const Tree = require('../app/lib/tree');
var drawObstacles = require('../app/lib/draw-obstacles');

describe('drawObstacles', function() {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    this.image = new Image ();
    this.image.src = 'images/skifree-objects.png';
  });

  it('should increment obstacle if the skier is not crashed', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var tree = new Tree({ canvas: this.canvas, context: this.context });
    var obstacles = [];
    var increasedSpeed = 0;
    obstacles.push(tree);
    var originalY = obstacles[0].y;
    drawObstacles(obstacles, skier, this.image, increasedSpeed);

    assert.isBelow(obstacles[0].y, originalY);
  });

  it('should increment skier distance if the skier is not crashed', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var tree = new Tree({ canvas: this.canvas, context: this.context });
    var obstacles = [];
    var increasedSpeed = 0;
    obstacles.push(tree);
    var originalDistance = skier.distance;
    drawObstacles(obstacles, skier, this.image, increasedSpeed);

    assert.isAbove(skier.distance, originalDistance);
  });

  it('should not increment obstacle if the skier is crashed', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var tree = new Tree({ canvas: this.canvas, context: this.context });
    var obstacles = [];
    skier.crashed = true;
    obstacles.push(tree);
    var originalY = obstacles[0].y;
    drawObstacles(obstacles, skier, this.image);

    assert.strictEqual(obstacles[0].y, originalY);
  });

  it('should not increment skier distance if the skier is crashed', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    var tree = new Tree({ canvas: this.canvas, context: this.context });
    var obstacles = [];
    skier.crashed = true;
    obstacles.push(tree);
    var originalDistance = skier.distance;
    drawObstacles(obstacles, skier, this.image);

    assert.strictEqual(skier.distance, originalDistance);
  });
});
