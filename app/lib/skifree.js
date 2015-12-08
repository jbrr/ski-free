var Skier = require('./skier');
var Tree = require('./tree');

function Skifree () {
  var canvas = document.getElementById('skifree');
  var context = canvas.getContext('2d');
  window.addEventListener("keydown", keyPressed, false);

  var skier = new Skier({ maxWidth: canvas.width });
  var tree = new Tree({ maxWidth: canvas.width });

  function keyPressed(event) {
    if (event.keyCode === "37") {
      skier.moveLeft();
    } else if (event.keyCode === "39") {
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
