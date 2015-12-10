
var Skier = require('./skier');
var Tree = require('./tree');
var Rock = require('./rock');

var canvas = document.getElementById('skifree');
var ctx = canvas.getContext('2d');
document.addEventListener("keydown", function(event) {
  keyPressed(event);
}, false);

var skier = new Skier({ canvas: canvas, context: ctx });
var obstacles = [];
var crashed = false;
var collisionObstacles = [];

function keyPressed(event) {
  if (event.keyCode === 37) {
    skier.moveLeft();
  } else if (event.keyCode === 39) {
    skier.moveRight();
  }
}

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
}

var isColliding = function(skier, obstacle) {
  var hypotenuse = Math.sqrt(Math.pow((skier.x + skier.width / 2) - (obstacle.x + obstacle.width / 2), 2) +
                    Math.pow(skier.y - obstacle.y, 2));
  if (hypotenuse < skier.height) {
    console.log("collision");
    crashed = true;
    if (containsObject(obstacle, collisionObstacles) === false) {
      collisionObstacles.push(obstacle);
      skier.lives -= 1;
      console.log(skier.lives);
    }
    setTimeout(function(){
      crashed = false;
    }, 1000);
  }
};

var reportCollisions = function(obstacles) {
  for (var i = 0; i < obstacles.length; i++) {
    isColliding(skier, obstacles[i]);
  }
};

var obstacleGenerator = function() {
  if (Math.random() > 0.98) {
    obstacles.push(new Tree({ canvas: canvas, context: ctx }));
  }
  if (Math.random() > 0.98) {
    obstacles.push(new Rock({ canvas: canvas, context: ctx }));
  }
  drawObstacles();
};

var drawObstacles = function() {
  for (var i = 0; i < obstacles.length; i++) {
    if (crashed === false) {
      obstacles[i].go();
    } else {
      obstacles[i].stop();
    }
  }
};

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  skier.draw();
  obstacleGenerator();
  reportCollisions(obstacles);
  requestAnimationFrame(gameLoop);
});
