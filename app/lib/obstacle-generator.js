var Tree = require('./tree');
var Rock = require('./rock');
var Jump = require('./jump');
var drawObstacles = require('./draw-obstacles');

var obstacleGenerator = function(obstacles, skier, canvas, ctx, obstaclesImg, increasedSpeed) {
  if (Math.random() > (0.96 - increasedSpeed/100) && !skier.crashed) {
    obstacles.push(new Rock({ canvas: canvas, context: ctx }));
  }
  if (Math.random() > (0.96 - increasedSpeed/100) && !skier.crashed) {
    obstacles.push(new Tree({ canvas: canvas, context: ctx }));
  }
  if (Math.random() > (0.99 - increasedSpeed/100) && !skier.crashed) {
    obstacles.push(new Jump({ canvas: canvas, context: ctx }));
  }

  drawObstacles(obstacles, skier, obstaclesImg, increasedSpeed);
};

module.exports = obstacleGenerator;
