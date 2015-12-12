var isColliding = require('./is-colliding');

var reportCollisions = function(obstacles, skier) {
  for (var i = 0; i < obstacles.length; i++) {
    isColliding(skier, obstacles[i]);
  }
};

module.exports = reportCollisions;
