
var Skier = require('./skier');
var reportCollisions = require('./collision');
var obstacleGenerator = require('./obstacle-generator');

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

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  skier.draw();
  obstacleGenerator(obstacles, skier, canvas, ctx);
  reportCollisions(obstacles, skier);
  requestAnimationFrame(gameLoop);
});
