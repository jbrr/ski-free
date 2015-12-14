function Rock(options) {
  this.x = Math.floor(Math.random() * options.canvas.width) + 0;
  this.y = 600;
  this.width = 23;
  this.height = 11;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
}

Rock.prototype.go = function(obstaclesImg, increasedSpeed) {
  this.context.drawImage(
    obstaclesImg,
    30,
    52,
    23,
    11,
    this.x,
    this.y -= (3.5 + increasedSpeed),
    this.width,
    this.height
  );
  return this;
};

Rock.prototype.stop = function(obstaclesImg) {
  this.context.drawImage(
    obstaclesImg,
    30,
    52,
    23,
    11,
    this.x,
    this.y,
    this.width,
    this.height
  );
  return this;
};

module.exports = Rock;
