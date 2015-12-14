const chai = require('chai');
const assert = chai.assert;

const Skier = require('../app/lib/skier');
var topScores = require('../app/lib/top-scores');

describe('topScores', function() {
  beforeEach(function () {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
  });

  it('should store score based on distance', function(){
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    skier.distance = 1000;
    var scores = [];
    topScores(skier, scores);

    assert.strictEqual(scores[0], 1000);
  });

  it('should sort scores from highest to lowest', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    skier.distance = 1000;
    var scores = [];
    topScores(skier, scores);
    skier.distance = 800;
    topScores(skier, scores);
    skier.distance = 900;
    topScores(skier, scores);

    assert.strictEqual(scores[0], 1000);
    assert.strictEqual(scores[1], 900);
    assert.strictEqual(scores[2], 800);
  });

  it('should only hold the top 5 scores', function() {
    var skier = new Skier({ canvas: this.canvas, context: this.context });
    skier.distance = 1000;
    var scores = [];
    topScores(skier, scores);
    skier.distance = 800;
    topScores(skier, scores);
    skier.distance = 900;
    topScores(skier, scores);
    skier.distance = 10;
    topScores(skier, scores);
    skier.distance = 700;
    topScores(skier, scores);
    skier.distance = 2;
    topScores(skier, scores);
    var array = [1000, 900, 800, 700, 10];

    assert.deepEqual(scores, array);
  });
});
