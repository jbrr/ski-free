var drawObstacles = function(obstacles, skier, obstaclesImg) {
  for (var i = 0; i < obstacles.length; i++) {
    if (skier.crashed === false) {
      obstacles[i].go(obstaclesImg);
      skier.distance += 0.3;
    } else {
      obstacles[i].stop(obstaclesImg);
    }
  }
};

module.exports = drawObstacles;
