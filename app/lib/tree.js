function Tree(options) {
  this.x = Math.floor(Math.random() * options.canvas.width) + 0;
  this.y = 600;
  this.width = 30;
  this.height = 34;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
}

Tree.prototype.go = function(obstaclesImg, increasedSpeed, speedBoost) {
  this.context.drawImage(
    obstaclesImg,
    0,
    28,
    this.width,
    this.height,
    this.x,
    this.y -= (3.5 + increasedSpeed + speedBoost),
    this.width,
    this.height
  );
  return this;
};

Tree.prototype.stop = function(obstaclesImg) {
  this.context.drawImage(
    obstaclesImg,
    0,
    28,
    this.width,
    this.height,
    this.x,
    this.y,
    this.width,
    this.height
  );
  return this;
};

module.exports = Tree;
