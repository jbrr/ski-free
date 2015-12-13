const $ = require('jquery');
var Skier = require('./skier');
var reportCollisions = require('./collision');
var obstacleGenerator = require('./obstacle-generator');
var yetiEnding = require('./yeti-ending');
var Yeti = require('./yeti');

var canvas = document.getElementById('skifree');
var ctx = canvas.getContext('2d');
var stopped = false;
var scores = [];

function keyPressed(event, skier) {
  if (event.keyCode === 37) {
    skier.moveLeft();
  } else if (event.keyCode === 39) {
    skier.moveRight();
  }
}

var stopper = function(skier, yeti) {
  if (Math.round(yeti.x) === Math.round(skier.x) && Math.round(yeti.y) === Math.round(skier.y)) {
    skier.lives = 0;
  }
  if (skier.lives === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stopped = true;
    scores.push(Math.floor(skier.distance));
    skier.distance = 0;
    gameOver(scores);
  }
};

var start = function(skier, yeti, obstacles, skierImg, obstaclesImg) {
  requestAnimationFrame(function gameLoop() {
    if (stopped === false) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      skier.draw(skierImg);
      obstacleGenerator(obstacles, skier, canvas, ctx, obstaclesImg);
      reportCollisions(obstacles, skier);
      yetiEnding(skier, yeti);
      stopper(skier, yeti);
      requestAnimationFrame(gameLoop);
    }
  });
};

function init() {
  document.addEventListener("keydown", function(event) {
    keyPressed(event, skier);
  }, false);
  var yeti = new Yeti({canvas: canvas, context: ctx });
  var skier = new Skier({ canvas: canvas, context: ctx });
  var obstacles = [];
  var skierImg = new Image();
  skierImg.src = 'images/sprites.png';
  var obstaclesImg = new Image();
  obstaclesImg.src = 'images/skifree-objects.png';
  start(skier, yeti, obstacles, skierImg, obstaclesImg);
  displayDivs('starter', 'none');
  displayDivs('game-over', 'none');
}

function gameOver(scores) {
  displayDivs('game-over', 'inline');
  for (var i = 0; i < scores.length; i++) {
    $('#top-scores').append(
      '<li>' + scores[i] + '</li>'
    );
  }
  document.getElementById('restart-button').onclick = function(){
    init();
  };
}

function freshGame() {
  displayDivs('starter', 'inline');
  displayDivs('game-over', 'none');
  document.getElementById('start-button').onclick = function(){
    init();
  };
}

function displayDivs(div, style) {
  document.getElementById(div).style.display = style;
}

freshGame();
