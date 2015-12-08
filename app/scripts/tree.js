var Tree = function(options) {
  this.x = options.maxWidth/2;
  this.y = 600;
  this.width = 10;
  this.height = 10;
  this.maxWidth = options.maxWidth;
};

Tree.prototype.draw = function() {
  context.fillStyle="green";
  context.fillRect(this.x, this.y--, this.width, this.height);
  return this;
};
