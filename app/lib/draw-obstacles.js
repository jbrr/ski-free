var drawObstacles = function(obstacles, skier) {
  for (var i = 0; i < obstacles.length; i++) {
    if (skier.crashed === false) {
      obstacles[i].go();
    } else {
      obstacles[i].stop();
    }
  }
};

module.exports = drawObstacles;
