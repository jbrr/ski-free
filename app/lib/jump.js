function Jump(options) {
  this.x = Math.floor(Math.random() * options.canvas.width) + 0;
  this.y = 600;
  this.width = 32;
  this.height = 8;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
}

Jump.prototype.go = function(obstaclesImg, increasedSpeed, speedBoost) {
  this.context.drawImage(
    obstaclesImg,
    109,
    55,
    this.width,
    this.height,
    this.x,
    this.y -= (3.5 + increasedSpeed + speedBoost),
    this.width,
    this.height
  );
  return this;
};

Jump.prototype.stop = function(obstaclesImg) {
  this.context.drawImage(
    obstaclesImg,
    109,
    55,
    this.width,
    this.height,
    this.x,
    this.y,
    this.width,
    this.height
  );
  return this;
};

module.exports = Jump;
