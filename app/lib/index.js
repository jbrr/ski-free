const $ = require('jquery');
var Skier = require('./skier');
var reportCollisions = require('./collision');
var obstacleGenerator = require('./obstacle-generator');
var topScores = require('./top-scores');
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
    topScores(skier, scores);
    gameOver(scores);
  }
};

var start = function(skier, yeti, obstacles, skierImg, obstaclesImg, increasedSpeed) {
  requestAnimationFrame(function gameLoop() {
    if (stopped === false) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      skier.draw(skierImg);
      obstacleGenerator(obstacles, skier, canvas, ctx, obstaclesImg, increasedSpeed);
      reportCollisions(obstacles, skier);
      yetiEnding(skier, yeti, skierImg);
      stopper(skier, yeti);
      scoreBoard(skier);
      requestAnimationFrame(gameLoop);
    }
  });
};

function scoreBoard(skier) {
  $('#score-board').html(
    '<div><p>Lives: ' + skier.lives + '</p><p>Distance: ' + Math.floor(skier.distance) + 'm</p></div>'
  );
}

function init() {
  document.addEventListener('keydown', function(event) {
    keyPressed(event, skier);
  }, false);
  var yeti = new Yeti({canvas: canvas, context: ctx });
  var skier = new Skier({ canvas: canvas, context: ctx });
  var obstacles = [];
  var skierImg = new Image();
  skierImg.src = 'images/sprites.png';
  var obstaclesImg = new Image();
  obstaclesImg.src = 'images/skifree-objects.png';
  var increasedSpeed = 0;
  start(skier, yeti, obstacles, skierImg, obstaclesImg, increasedSpeed);
  stopped = false;
  displayDivs('starter', 'none');
  displayDivs('game-over', 'none');
  displayDivs('score-board', 'inline');
}

function gameOver(scores) {
  displayDivs('game-over', 'inline');
  displayDivs('score-board', 'none');
  $('#top-scores').html("");
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
  displayDivs('score-board', 'none');
  document.getElementById('start-button').onclick = function(){
    init();
  };
}

function displayDivs(div, style) {
  document.getElementById(div).style.display = style;
}

freshGame();
