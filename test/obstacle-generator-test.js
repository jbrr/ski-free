const chai = require('chai');
const assert = chai.assert;

var obstacleGenerator = require('../app/lib/obstacle-generator');
const Skier = require('../app/lib/skier');

describe('obstacleGenerator', function() {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should populate the obstacles array', function() {
    var obstacles = [];
    var canvas = this.canvas;
    var ctx = this.context;
    var skier = new Skier({ canvas: canvas, context: ctx });
    var image = new Image ();
    var increasedSpeed = 0;
    image.src = 'images/skifree-objects.png';
    (function doLotsOfTimes(count) {
      if (count < 1000) {
        obstacleGenerator(obstacles, skier, canvas, ctx, image, increasedSpeed);
        count += 1;
        doLotsOfTimes(count);
      }
    })(0);
    assert.isAbove(obstacles.length, 0);
  });
});
