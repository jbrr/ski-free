function Tree(options) {
  this.x = options.canvas.width/2;
  this.y = 600;
  this.width = 10;
  this.height = 10;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
}

Tree.prototype.draw = function() {
  this.context.fillStyle="green";
  this.context.fillRect(this.x, this.y--, this.width, this.height);
  return this;
};

module.exports = Tree;
