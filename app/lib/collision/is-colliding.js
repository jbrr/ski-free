var arrayContainsObject = require('./array-contains-object');
var collisionObstacles = [];
var hypotenuse = require('./hypotenuse');

var isColliding = function(skier, obstacle) {
  if (hypotenuse(skier, obstacle) < skier.width) {
    skier.crashed = true;
    if (arrayContainsObject(obstacle, collisionObstacles) === false) {
      collisionObstacles.push(obstacle);
      skier.lives -= 1;
      console.log(skier.lives);
    }

    document.onkeydown=function(){
      skier.crashed = false;
    };
  }
};

module.exports = isColliding;
