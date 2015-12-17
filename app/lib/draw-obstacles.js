var drawObstacles = function(obstacles, skier, obstaclesImg, increasedSpeed, speedBoost) {
  for (var i = 0; i < obstacles.length; i++) {
    if (skier.jumping === true) {
      speedBoost = 2;
    } else {
      speedBoost = 0;
    }
    obstacleCreation(skier, obstacles, i, obstaclesImg, increasedSpeed, speedBoost);
  }
};

function obstacleCreation(skier, obstacles, i, obstaclesImg, increasedSpeed, speedBoost) {
  if (skier.crashed === false) {
    obstacles[i].go(obstaclesImg, increasedSpeed, speedBoost);
    increasedSpeed += 0.02;
    skier.distance += (0.05 + increasedSpeed/450 + speedBoost/450);
  } else {
    obstacles[i].stop(obstaclesImg);
  }
}

module.exports = drawObstacles;
