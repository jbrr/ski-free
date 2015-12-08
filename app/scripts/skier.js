var Skier = function(options) {
  this.x = options.maxWidth/2;
  this.y = 150;
  this.width = 10;
  this.height = 10;
  this.maxWidth = options.maxWidth;
};

Skier.prototype.moveRight = function() {
  if (this.x < this.maxWidth - this.width) {
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
  context.fillStyle="black";
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};
