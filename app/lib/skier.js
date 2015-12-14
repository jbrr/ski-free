function Skier(options) {
  this.x = options.canvas.width/2;
  this.y = 150;
  this.width = 17;
  this.height = 35;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
  this.lives = 5;
  this.crashed = false;
  this.distance = 0;
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

Skier.prototype.draw = function(skierImg, skier) {
  if (skier.crashed === true) {
    this.context.drawImage(
      skierImg,
      0,
      78,
      31,
      31,
      this.x,
      this.y,
      31,
      31
    );
  } else {
    this.context.drawImage(
      skierImg,
      65,
      0,
      17,
      34,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  return this;
};

module.exports = Skier;
