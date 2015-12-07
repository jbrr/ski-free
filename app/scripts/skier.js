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
