var canvas = document.getElementById('skifree');
var context = canvas.getContext('2d');
window.addEventListener("keydown", keyPressed, false);

var Skier = function() {
  this.x = 400;
  this.y = 200;
  this.width = 10;
  this.height = 10;
};

Skier.prototype.moveRight = function() {
  if (this.x < canvas.width - this.width) {
    this.x += 3;
  }
  return this;
};

Skier.prototype.moveLeft = function() {
  if (this.x > 3) {
    this.x -= 3;
  }
  return this;
};

Skier.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

var skier = new Skier();

function keyPressed(event) {
  if (event.keyCode == "37") {
    skier.moveLeft();
  } else if (event.keyCode == "39") {
    skier.moveRight();
  }
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  skier.draw();
  requestAnimationFrame(gameLoop);
});
