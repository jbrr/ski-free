
var Skier = require('./skier');
var Tree = require('./tree');
var Rock = require('./rock');
var reportCollisions = require('./collision');

var canvas = document.getElementById('skifree');
var ctx = canvas.getContext('2d');
document.addEventListener("keydown", function(event) {
  keyPressed(event);
}, false);

var skier = new Skier({ canvas: canvas, context: ctx });
var obstacles = [];

function keyPressed(event) {
  if (event.keyCode === 37) {
    skier.moveLeft();
  } else if (event.keyCode === 39) {
    skier.moveRight();
  }
}

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
    if (skier.crashed === false) {
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
  reportCollisions(obstacles, skier);
  requestAnimationFrame(gameLoop);
});
