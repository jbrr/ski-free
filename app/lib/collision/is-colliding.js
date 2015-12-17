var arrayContainsObject = require('./array-contains-object');
var collisionObstacles = [];
var Jump = require('./../jump');
var hypotenuse = require('./hypotenuse');

var isColliding = function(skier, obstacle) {
  if (hypotenuse(skier, obstacle) < skier.width && obstacle instanceof Jump) {
    jump(skier);
  } else if (hypotenuse(skier, obstacle) < skier.width && skier.jumping === false) {
    crashed(skier, obstacle, collisionObstacles);
  }
};

function crashed(skier, obstacle, collisionObstacles) {
  skier.crashed = true;
  if (arrayContainsObject(obstacle, collisionObstacles) === false) {
    collisionObstacles.push(obstacle);
    skier.lives -= 1;
  }
  document.onkeydown=function(){
    skier.crashed = false;
  };
}

function jump(skier) {
  skier.jumping = true;
  if (cancelableStateTimeout) {
    clearTimeout(cancelableStateTimeout);
  }
  var cancelableStateTimeout = setTimeout(function() {
    skier.jumping = false;
  }, 2000);
}

module.exports = { isColliding: isColliding,
                   crashed: crashed,
                   jump: jump };
