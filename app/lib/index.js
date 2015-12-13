
var Skier = require('./skier');
var reportCollisions = require('./collision');
var obstacleGenerator = require('./obstacle-generator');
var yetiEnding = require('./yeti-ending');
var Yeti = require('./yeti');

var canvas = document.getElementById('skifree');
var ctx = canvas.getContext('2d');
var stopped = false;
var spriteMapImg = new Image();
spriteMapImg.src = 'https://s3.amazonaws.com/jbrr-turing/assets/spritemap.png';

function keyPressed(event, skier) {
  if (event.keyCode === 37) {
    skier.moveLeft();
  } else if (event.keyCode === 39) {
    skier.moveRight();
  }
}

var stopCheck = function(skier, yeti) {
  if (Math.round(yeti.x) === Math.round(skier.x) && Math.round(yeti.y) === Math.round(skier.y)) {
    skier.lives = 0;
  }
  if (skier.lives === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stopped = true;
  }
};

var start = function(skier, yeti, obstacles, spriteMapImg) {
  if (stopped === false) {
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      skier.draw(spriteMapImg);
      obstacleGenerator(obstacles, skier, canvas, ctx);
      reportCollisions(obstacles, skier);
      yetiEnding(skier, yeti);
      stopCheck(skier, yeti);
      requestAnimationFrame(gameLoop);
    });
  }
};


function init() {
  document.addEventListener("keydown", function(event) {
    keyPressed(event, skier);
  }, false);
  var yeti = new Yeti({canvas: canvas, context: ctx });
  var skier = new Skier({ canvas: canvas, context: ctx });
  var obstacles = [];
  start(skier, yeti, obstacles);
}

init();
