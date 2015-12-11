var arrayContainsObject = require('./array-contains-object');
var collisionObstacles = [];


var isColliding = function(skier, obstacle) {
  var hypotenuse = Math.sqrt(Math.pow((skier.x + skier.width / 2) - (obstacle.x + obstacle.width / 2), 2) +
                    Math.pow(skier.y - obstacle.y, 2));
  if (hypotenuse < skier.width) {
    skier.crashed = true;
    if (arrayContainsObject(obstacle, collisionObstacles) === false) {
      collisionObstacles.push(obstacle);
      skier.lives -= 1;
      console.log(skier.lives);
    }

    document.onkeyup=function(){
      skier.crashed = false;
    };
  }
};

module.exports = isColliding;
