const $ = require('jquery');
var Skier = require('./skier');
var Collision = require('./collision');
var obstacleGenerator = require('./obstacle-generator');
var StartFlag = require('./start-flag');
var yetiEnding = require('./yeti-ending');
var Yeti = require('./yeti');
var keyAction = require('./key-action');
var topScores = require('./top-scores');
var domManipulation = require('./dom-manipulation');

var canvas = document.getElementById('skifree');
var ctx = canvas.getContext('2d');
var stopped = false;
var scores = [];

var start = function(skier, yeti, obstacles, skierImg, obstaclesImg, increasedSpeed, speedBoost, flag) {
  requestAnimationFrame(function gameLoop() {
    if (stopped === false) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      flag.draw(obstaclesImg);
      obstacleGenerator(obstacles, skier, canvas, ctx, obstaclesImg, increasedSpeed, speedBoost);
      skier.draw(skierImg, skier);
      Collision.reportCollisions(obstacles, skier);
      yetiEnding(skier, yeti, skierImg);
      stopper(skier, yeti, skierImg);
      domManipulation.scoreBoard(skier);
      requestAnimationFrame(gameLoop);
    }
  });
};

function init() {
  document.addEventListener('keydown', function(event) {
    keyAction(event, skier, true);
  }, false);
  document.addEventListener('keyup', function(event) {
    keyAction(event, skier, false);
  }, false);
  $('#move-left').on('touchstart', function() {
    keyAction({event: {'keyCode': 37}}, skier, true);
  });
  $('#move-left').on('touchend', function() {
    keyAction({event: {'keyCode': 37}}, skier, false);
  });
  $('#move-right').on('touchstart', function() {
    keyAction({event: {'keyCode': 39}}, skier, true);
  });
  $('#move-right').on('touchend', function() {
    keyAction({event: {'keyCode': 39}}, skier, false);
  });
  var yeti = new Yeti({canvas: canvas, context: ctx });
  var skier = new Skier({ canvas: canvas, context: ctx });
  var flag = new StartFlag({ canvas: canvas, context: ctx });
  var obstacles = [];
  var skierImg = new Image();
  skierImg.src = 'images/sprites.png';
  var obstaclesImg = new Image();
  obstaclesImg.src = 'images/skifree-objects.png';
  var increasedSpeed = 0;
  var speedBoost = 0;
  start(skier, yeti, obstacles, skierImg, obstaclesImg, increasedSpeed, speedBoost, flag);
  stopped = false;
  domManipulation.displayDivs('starter', 'none');
  domManipulation.displayDivs('game-over', 'none');
  domManipulation.displayDivs('score-board', 'inline');
}

function freshGame() {
  domManipulation.displayDivs('starter', 'inline');
  domManipulation.displayDivs('game-over', 'none');
  domManipulation.displayDivs('score-board', 'none');
  document.getElementById('start-button').onclick = function(){
    init();
  };
}

function deathSequence(yeti, skier, eaten, skierImg) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  yeti.eat(skier, skierImg);
  if (yeti.eating === 50) {
    clearInterval(eaten);
  }
}

function ender(skier) {
  topScores(skier, scores);
  gameOver(scores);
}

var stopper = function(skier, yeti, skierImg) {
  if (Collision.yetiCollision(skier, yeti)) {
    yeti.aggressive = false;
    stopped = true;
    var eaten = setInterval(function() { deathSequence(yeti, skier, eaten, skierImg); }, 20);
    setTimeout(function() { ender(skier); } , 1000);
  }
  if (skier.lives <= 0) {
    stopped = true;
    ender(skier);
  }
};

function gameOver(scores) {
  domManipulation.displayDivs('game-over', 'inline');
  domManipulation.displayDivs('score-board', 'none');
  var $topScores = $('#top-scores');
  $topScores.html("");
  for (var i = 0; i < scores.length; i++) {
    $topScores.append(
      '<li>' + scores[i] + '</li>'
    );
  }
  document.getElementById('restart-button').onclick = function(){
    init();
  };
}

module.exports = { freshGame: freshGame };
