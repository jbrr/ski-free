function Rock(options) {
  this.x = Math.floor(Math.random() * options.canvas.width) + 0;
  this.y = 600;
  this.width = 10;
  this.height = 10;
  this.maxWidth = options.canvas.width;
  this.context = options.context;
}

Rock.prototype.draw = function() {
  this.context.fillStyle="grey";
  this.context.fillRect(this.x, this.y--, this.width, this.height);
  return this;
};

module.exports = Rock;
