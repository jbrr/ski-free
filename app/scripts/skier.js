var canvas = document.getElementById('skifree');
var context = canvas.getContext('2d');
// window.addEventListener("keydown", keyPressed, false);

var Skier = function() {
  this.x = 400;
  this.y = 200;
  this.width = 10;
  this.height = 10;
};

Skier.prototype.moveRight = function() {
  if (this.x < canvas.width) {
    x++;
  }
  return this;
};

Skier.prototype.moveLeft = function() {
  if (this.x > 0) {
    x--;
  }
  return this;
};

Skier.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

var skier = new Skier();

requestAnimationFrame(function gameLoop() {
  skier.draw();
});

// function keyPressed(e) {
//   if (e.keyCode == "37" || e.keyCode == "39") {
//     requestAnimationFrame(function gameLoop(e) {
//       // context.clearRect(0, 0, canvas.width, canvas.height);
//       if (e.keyCode == "37") {
//         skier.draw().moveLeft();
//       } else if (e.keyCode == "39") {
//         skier.draw().moveRight();
//       }
//       requestAnimationFrame(gameLoop);
//     });
//   }
// }
