var Skier = function(options) {
  this.x = 400;
  this.y = 200;
  this.width = 10;
  this.height = 10;
  this.maxX = options.maxX;
};

Skier.prototype.moveRight = function() {
  if (this.x < this.maxX - this.width) {
    this.x += 5;
  }
  return this;
};

Skier.prototype.moveLeft = function() {
  if (this.x > 3) {
    this.x -= 5;
  }
  return this;
};

Skier.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};
