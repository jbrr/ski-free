var Skier = require('./skier');
var Tree = require('./tree');

function Skifree () {
  var canvas = document.getElementById('skifree');
  var context = canvas.getContext('2d');
  document.addEventListener("keydown", function(event) {
    keyPressed(event);
  }, false);

  var skier = new Skier({ canvas: canvas, context: context });
  var tree = new Tree({ canvas: canvas, context: context });

  function keyPressed(event) {
    if (event.keyCode === 37) {
      skier.moveLeft();
    } else if (event.keyCode === 39) {
      skier.moveRight();
    }
  }

  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    skier.draw();
    tree.draw();
    requestAnimationFrame(gameLoop);
  });
}

module.exports = Skifree;
