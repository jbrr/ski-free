var Tree = require('./tree');
var Rock = require('./rock');
var drawObstacles = require('./draw-obstacles');

var obstacleGenerator = function(obstacles, skier, canvas, ctx, obstaclesImg) {
  if (Math.random() > 0.98) {
    obstacles.push(new Tree({ canvas: canvas, context: ctx }));
  }
  if (Math.random() > 0.98) {
    obstacles.push(new Rock({ canvas: canvas, context: ctx }));
  }
  drawObstacles(obstacles, skier, obstaclesImg);
};

module.exports = obstacleGenerator;
