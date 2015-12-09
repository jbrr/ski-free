var Skier = require('./skier');
var Tree = require('./tree');
var Rock = require('./rock');

function Skifree () {
  var canvas = document.getElementById('skifree');
  var context = canvas.getContext('2d');
  document.addEventListener("keydown", function(event) {
    keyPressed(event);
  }, false);

  var skier = new Skier({ canvas: canvas, context: context });
  var tree = new Tree({ canvas: canvas, context: context });
  var rock = new Rock({ canvas: canvas, context: context });
  var obstacles = [tree, rock];

  function keyPressed(event) {
    if (event.keyCode === 37) {
      skier.moveLeft();
    } else if (event.keyCode === 39) {
      skier.moveRight();
    }
  }

  var isColliding = function(skier, obstacle) {
    var hypotenuse = Math.sqrt(Math.pow((skier.x + skier.width / 2) - (obstacle.x + obstacle.width / 2), 2) +
                      Math.pow(skier.y - obstacle.y, 2));
    if (hypotenuse < skier.height) {
      console.log("collision");
    }
  };

  var reportCollisions = function(obstacles) {
    for (var i = 0; i < obstacles.length; i++) {
      if (isColliding(skier, obstacles[i])) {
      }
    }
  };

  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    skier.draw();
    tree.draw();
    rock.draw();
    reportCollisions(obstacles);
    requestAnimationFrame(gameLoop);
  });
}

module.exports = Skifree;
