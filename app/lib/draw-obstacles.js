var drawObstacles = function(obstacles, skier, obstaclesImg, increasedSpeed) {
  for (var i = 0; i < obstacles.length; i++) {
    if (skier.crashed === false) {
      obstacles[i].go(obstaclesImg, increasedSpeed);
      increasedSpeed += 0.02;
      skier.distance += (0.05 + increasedSpeed/450);
    } else {
      obstacles[i].stop(obstaclesImg);
    }
  }
};

module.exports = drawObstacles;
