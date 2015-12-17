var arrayContainsObject = require('./array-contains-object');
var collisionObstacles = [];
var Jump = require('./../jump');
var hypotenuse = require('./hypotenuse');

var isColliding = function(skier, obstacle) {
  if (hypotenuse(skier, obstacle) < skier.width && obstacle instanceof Jump) {
    skier.jumping = true;
    if (cancelableStateTimeout) {
      clearTimeout(cancelableStateTimeout);
    }
    var cancelableStateTimeout = setTimeout(function() {
      console.log('made it');
      skier.jumping = false;
    }, 3000);
  } else if (hypotenuse(skier, obstacle) < skier.width && skier.jumping === false) {
    skier.crashed = true;
    if (arrayContainsObject(obstacle, collisionObstacles) === false) {
      collisionObstacles.push(obstacle);
      skier.lives -= 1;
    }
    document.onkeydown=function(){
      skier.crashed = false;
    };
  }
};

module.exports = isColliding;
