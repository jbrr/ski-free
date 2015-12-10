function Skier(options) {
  this.x = options.canvas.width/2;
  this.y = 150;
  this.width = 10;
  this.height = 10;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
  this.lives = 5;
}

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
  this.context.fillStyle="black";
  this.context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

module.exports = Skier;
