function Tree(options) {
  this.x = Math.floor(Math.random() * options.canvas.width) + 0;
  this.y = 600;
  this.width = 30;
  this.height = 34;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
}

Tree.prototype.go = function(obstaclesImg) {
  this.context.drawImage(
    obstaclesImg,
    0,
    28,
    30,
    34,
    this.x,
    this.y -= 3.5,
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
    30,
    34,
    this.x,
    this.y,
    this.width,
    this.height
  );
  return this;
};

module.exports = Tree;
