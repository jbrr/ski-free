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
  var bodies = [skier, tree, rock];

  function keyPressed(event) {
    if (event.keyCode === 37) {
      skier.moveLeft();
    } else if (event.keyCode === 39) {
      skier.moveRight();
    }
  }

  var isColliding = function(b1, b2) {
    if (b1.x === b2.x && b1.y === b2.y) {
      console.log("collision");
    }
  };

  var reportCollisions = function(bodies) {
    var bodyPairs = [];
    for (var i = 0; i < bodies.length; i++) {
      for (var j = i + 1; j < bodies.length; j++) {
        if (isColliding(bodies[i], bodies[j])) {
          bodyPairs.push([bodies[i], bodies[j]]);
        }
      }
    }
  };

  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    skier.draw();
    tree.draw();
    rock.draw();
    reportCollisions(bodies);
    requestAnimationFrame(gameLoop);
  });
}

module.exports = Skifree;
